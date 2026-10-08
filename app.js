import { werke } from './data/werke/index.js';
import { epochen } from './data/epochen.js';
import { stilmittel, kategorien, verwandt } from './data/stilmittel.js';
import { seiten } from './data/theorie.js';
import { referate, referatGruppen } from './data/referate.js';
import { motive } from './data/motive.js';
import { quellen } from './data/quellen.js';

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const stripTags = (html) => String(html ?? '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');

const werkById = Object.fromEntries(werke.map((w) => [w.id, w]));
const epocheById = Object.fromEntries(epochen.map((e) => [e.id, e]));
const stilById = Object.fromEntries(stilmittel.map((s) => [s.id, s]));
const werkeSortiert = [...werke].sort((a, b) => a.jahr - b.jahr);
const hueOf = (epId) => epocheById[epId]?.hue ?? 215;
const epStyle = (epId, extra = '') => `style="--h:${hueOf(epId)};${extra}"`;

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('deutschabi:' + key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('deutschabi:' + key, JSON.stringify(value)); } catch { /* privater Modus o. Ä. */ }
  }
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function epochChip(epId, label) {
  const e = epocheById[epId];
  if (!e) return '';
  return `<a class="chip ep" ${epStyle(epId)} href="#/epoche/${e.id}">${esc(label || e.name)}</a>`;
}

function workLink(id) {
  const w = werkById[id];
  return w ? `<a href="#/werk/${w.id}">${esc(w.kurztitel)}</a>` : esc(id);
}

function stilLink(id, label) {
  return stilById[id] ? `<a href="#/stilmittel/${id}">${label}</a>` : label;
}

/* ---------- Live source: Wikipedia ---------- */
const WIKI_API = 'https://de.wikipedia.org/w/api.php?format=json&formatversion=2&origin=*&action=query&prop=extracts%7Cinfo&exintro=1&explaintext=1&inprop=url&redirects=1';

async function wikiExtract(title) {
  let res = await fetch(`${WIKI_API}&titles=${encodeURIComponent(title)}`);
  let data = await res.json();
  let page = data?.query?.pages?.[0];
  if (!page || page.missing || !page.extract) {
    res = await fetch(`${WIKI_API}&generator=search&gsrlimit=1&gsrsearch=${encodeURIComponent(title)}`);
    data = await res.json();
    page = data?.query?.pages?.[0];
  }
  if (!page?.extract) throw new Error('Kein Artikel gefunden');
  return page;
}

function liveBox(title, label) {
  return `<div class="live" data-wiki="${esc(title)}">
  <strong>Live-Quelle: Wikipedia</strong>
  <p class="small muted" style="margin:.3em 0 .6em">Lädt die aktuelle Einleitung des Wikipedia-Artikels „${esc(label || title)}“ direkt aus der Quelle – zum Gegenlesen und Weiterlesen.</p>
  <button class="btn btn--small" type="button" data-action="wiki">Aus Wikipedia laden</button>
  <div class="live__out" aria-live="polite"></div>
</div>`;
}

async function loadWiki(box) {
  const out = $('.live__out', box);
  const btn = $('button', box);
  btn.disabled = true;
  out.innerHTML = '<p class="muted small">Lade …</p>';
  try {
    const page = await wikiExtract(box.dataset.wiki);
    const paras = page.extract.split(/\n+/).filter(Boolean).slice(0, 5);
    out.innerHTML = `<h4 style="margin-top:0">${esc(page.title)}</h4>${paras.map((p) => `<p>${esc(p)}</p>`).join('')}
<p class="live__credit">Quelle: <a href="${esc(page.fullurl)}" target="_blank" rel="noopener">Wikipedia – „${esc(page.title)}“</a> · Text unter CC BY-SA 4.0, abgerufen am ${new Date().toLocaleDateString('de-DE')}. Wikipedia ist ein guter Einstieg, aber keine zitierfähige Quelle fürs Abitur – prüfe Aussagen am Primärtext.</p>`;
  } catch (err) {
    out.innerHTML = `<p class="small">Konnte gerade nicht geladen werden (offline oder gesperrt). <a href="https://de.wikipedia.org/w/index.php?search=${encodeURIComponent(box.dataset.wiki)}" target="_blank" rel="noopener">Direkt bei Wikipedia suchen</a>.</p>`;
    btn.disabled = false;
  }
}

/* ---------- Views ---------- */
function viewHome() {
  const gelernt = store.get('gelernt', {});
  const cards = werkeSortiert.map((w) => `
    <a class="card work-card ep" ${epStyle(w.epoche)} href="#/werk/${w.id}">
      <div class="work-card__meta"><span>${esc(w.jahrText || w.jahr)} · ${esc(w.gattung)}</span>${gelernt[w.id] ? '<span class="done-badge">gelernt ✓</span>' : ''}</div>
      <div class="work-card__title">${esc(w.titel)}</div>
      <div class="work-card__author">${esc(w.autor)}</div>
      <p class="work-card__text">${esc(w.einSatz)}</p>
      <ul class="chips"><li><span class="chip ep" ${epStyle(w.epoche)}>${esc(epocheById[w.epoche]?.name || '')}</span></li>${w.badge ? `<li><span class="chip chip--accent">${esc(w.badge)}</span></li>` : ''}</ul>
    </a>`).join('');

  const min = 1770, max = 2015;
  const pos = (y) => ((y - min) / (max - min)) * 100;
  const placed = placeLabels(werkeSortiert, { min, max, width: 680, text: (w) => `${w.kurztitel} ${w.jahr}` });
  const labelRows = Math.max(...placed.map((p) => p.row)) + 1;
  const axisTop = labelRows * 20 + 8;
  const strip = placed.map((w) => `
    <a href="#/werk/${w.id}" class="ep" ${epStyle(w.epoche)} title="${esc(w.kurztitel)} (${w.jahr})">
      <span class="ministrip__dot" style="left:${pos(w.jahr)}%;top:${axisTop - 8}px"></span>
      <span class="ministrip__label" style="left:${pos(w.jahr)}%;top:${w.row * 20}px">${esc(w.kurztitel)} ${w.jahr}</span>
    </a>`).join('');

  const tiles = [
    ['#/zeitstrahl', 'Epochen-Zeitstrahl', 'Barock bis Gegenwart: Merkmale, Textformen, Gedichte'],
    ['#/stilmittel', 'Stilmittel', `${stilmittel.length} Stilmittel mit Wirkung – und Quiz`],
    ['#/erzaehltheorie', 'Erzähltheorie (Epik)', 'Erzähler, Perspektive, Zeit, Rede'],
    ['#/dramentheorie', 'Dramentheorie', 'Aristoteles, Freytag, offen/geschlossen, Brecht'],
    ['#/lyrik', 'Lyrik-Werkzeug', 'Metrum, Reim, Kadenz, Gedichtformen'],
    ['#/methode', 'Interpretieren im Abi', 'Aufbau, Operatoren, Zitieren, Formulierungen'],
    ['#/abiformen', 'Weitere Abi-Formen', 'Erörterung, materialgestütztes Argumentieren und Informieren'],
    ['#/training', 'Abi-Training', 'Aufgaben mit Lösungsskizzen und Quiz'],
    ['#/motive', 'Motive & Vergleiche', 'Werke miteinander verknüpfen'],
    ['#/referate', 'Referatsthemen', `${referate.length} Werke, ergänzt um die Handouts`],
    ['#/abitur', 'Abitur in Bayern', 'Aufgabenarten, Themenfelder, Pflichtlektüren']
  ].map(([href, t, d]) => `<a class="card tile" href="${href}"><strong>${t}</strong><span>${d}</span></a>`).join('');

  return {
    title: 'Deutsch-Abi – Literatur im Überblick',
    html: `<div class="wrap">
  <section class="hero">
    <p class="eyebrow">Deutsch · Abitur</p>
    <h1>Alle Abi-Lektüren auf einen Blick</h1>
    <p class="lead">Inhalt, Interpretation und Epoche zu jedem Werk, ein Zeitstrahl mit Merkmalen, Textformen und Gedichten, dazu Stilmittel, Erzähl- und Dramentheorie und Übungsaufgaben im Abi-Format mit Lösungsskizzen.</p>
    <form class="search-big" data-search role="search">
      <label class="visually-hidden" for="home-q">Suchen</label>
      <input id="home-q" type="search" name="q" placeholder="Figur, Zitat, Stilmittel, Epoche …">
      <button class="btn btn--primary" type="submit">Suchen</button>
    </form>
  </section>

  <section class="section">
    <h2>Deine Lektüren</h2>
    <div class="grid grid--works">${cards}</div>
  </section>

  <section class="section">
    <h2>Auf dem Zeitstrahl</h2>
    <div class="ministrip-wrap"><div class="ministrip" style="height:${axisTop + 20}px"><div class="ministrip__axis" style="top:${axisTop}px"></div>${strip}</div></div>
    <p class="small muted">Von „${esc(werkeSortiert[0].kurztitel)}“ (${werkeSortiert[0].jahr}) bis „${esc(werkeSortiert.at(-1).kurztitel)}“ (${werkeSortiert.at(-1).jahr}) – <a href="#/zeitstrahl">zum ganzen Epochen-Zeitstrahl</a>.</p>
  </section>

  <section class="section">
    <h2>Lernen & Üben</h2>
    <div class="grid grid--tiles">${tiles}</div>
  </section>

  <section class="section notice">
    <p><strong>Woher kommen die Inhalte?</strong> Die Zusammenfassungen sind eigenständig aus den Primärtexten erarbeitet – nicht von Zusammenfassungsportalen übernommen. Für Epochen und Hintergründe sind Quellen angegeben, viele lassen sich per „Live-Quelle“ direkt abrufen. Vers- und Seitenangaben: Verse nach der üblichen Zählung (Faust), Szenen/Auftritte nach den gängigen Reclam-Ausgaben. Gleiche Zitate fürs Abi immer mit deiner Schulausgabe ab.</p>
  </section>
</div>`
  };
}

const TABS = [
  ['ueberblick', 'Überblick'], ['inhalt', 'Inhalt'], ['figuren', 'Figuren'], ['interpretation', 'Interpretation'],
  ['form', 'Form & Sprache'], ['epoche', 'Epoche'], ['zitate', 'Zitate'], ['abitur', 'Abi-Aufgaben'], ['quellen', 'Quellen'], ['alles', 'Alles']
];

function renderTask(t, w, idx) {
  return `<article class="card task ep" ${epStyle(w.epoche)} id="aufgabe-${idx + 1}">
  <p class="task__format">${esc(t.format)}</p>
  <h3 style="margin-top:.2em">${esc(t.titel)}</h3>
  <div>${t.aufgabe}</div>
  ${t.material ? `<details class="block"><summary>Material anzeigen</summary><div class="block__body">${t.material}</div></details>` : ''}
  <details class="block"><summary>Lösungsskizze (Erwartungshorizont)</summary><div class="block__body solution">${t.loesung.map((l) => `<h4>${esc(l.titel)}</h4><ul>${l.punkte.map((p) => `<li>${p}</li>`).join('')}</ul>`).join('')}</div></details>
  ${t.muster ? `<details class="block"><summary>Musterformulierungen</summary><div class="block__body">${t.muster}</div></details>` : ''}
</article>`;
}

function werkSection(w, tab) {
  const e = epocheById[w.epoche];
  switch (tab) {
    case 'ueberblick':
      return `<section><h2 style="margin-top:0">Kurz gesagt</h2><p class="lead">${esc(w.einSatz)}</p>
<h3>Das Wichtigste in fünf Punkten</h3><ol class="keypoints">${w.kernpunkte.map((k) => `<li>${k}</li>`).join('')}</ol>
<h3>Steckbrief</h3><div class="card"><table class="kv">${w.steckbrief.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${v}</td></tr>`).join('')}</table></div>
<h3>Hintergrund & Entstehung</h3><div class="prose">${w.hintergrund}</div></section>`;
    case 'inhalt':
      return `<section><h2 style="margin-top:0">Inhalt</h2>${w.inhaltHinweis ? `<p class="notice">${w.inhaltHinweis}</p>` : ''}
<div class="btnrow"><button class="btn btn--small" type="button" data-action="open-all">Alle aufklappen</button><button class="btn btn--small" type="button" data-action="close-all">Alle zuklappen</button></div>
${w.inhalt.map((s, i) => `<details class="block"${i === 0 ? ' open' : ''}><summary>${esc(s.titel)}</summary><div class="block__body prose">${s.text}</div></details>`).join('')}</section>`;
    case 'figuren':
      return `<section><h2 style="margin-top:0">Figuren</h2>
${w.konstellation ? `<h3>Figurenkonstellation</h3><div class="card">${w.konstellation}</div>` : ''}
<h3>Charakterisierung</h3><div class="grid grid--2">${w.figuren.map((f) => `<article class="card figure-card"><h3>${esc(f.name)}</h3><p class="role">${esc(f.rolle)}</p><p>${f.text}</p></article>`).join('')}</div></section>`;
    case 'interpretation':
      return `<section><h2 style="margin-top:0">Interpretation</h2>${w.interpretation.map((s) => `<h3>${esc(s.titel)}</h3><div class="prose">${s.text}</div>`).join('')}</section>`;
    case 'form':
      return `<section><h2 style="margin-top:0">Form & Sprache</h2>${w.form.map((s) => `<h3>${esc(s.titel)}</h3><div class="prose">${s.text}</div>`).join('')}
<h3>Stilmittel im Werk</h3><div class="table-wrap"><table class="table"><thead><tr><th>Stilmittel</th><th>Beispiel</th><th>Wirkung</th></tr></thead><tbody>
${w.stilmittel.map((s) => `<tr><td>${stilLink(s.id, esc(s.name))}</td><td><span class="verse">${esc(s.beispiel)}</span><br><span class="small muted">${esc(s.stelle)}</span></td><td>${esc(s.wirkung)}</td></tr>`).join('')}
</tbody></table></div></section>`;
    case 'epoche':
      return `<section><h2 style="margin-top:0">Epochenbezug</h2>
<div class="card ep" ${epStyle(w.epoche, 'border-left:5px solid var(--ep)')}><p class="eyebrow" style="color:var(--ep)">${esc(e?.zeitraum || '')}</p><h3 style="margin-top:0"><a href="#/epoche/${e?.id}">${esc(e?.name || '')}</a></h3><p>${w.epochenbezug.text}</p><a class="btn btn--small" href="#/epoche/${e?.id}">Merkmale der Epoche ansehen →</a></div>
<div class="twocol" style="margin-top:16px"><div class="card yes"><h3>Passt zur Epoche</h3><ul>${w.epochenbezug.passt.map((p) => `<li>${p}</li>`).join('')}</ul></div>
<div class="card no"><h3>Weicht ab / weist voraus</h3><ul>${w.epochenbezug.weicht.map((p) => `<li>${p}</li>`).join('')}</ul></div></div>
${w.vergleiche?.length ? `<h3>Vergleichen mit …</h3><ul>${w.vergleiche.map((v) => `<li><strong>${workLink(v.mit)}:</strong> ${v.text}</li>`).join('')}</ul><p class="small"><a href="#/motive">Alle Motivvergleiche →</a></p>` : ''}
<h3>Live-Quelle</h3>${liveBox(w.wiki, w.kurztitel)}</section>`;
    case 'zitate':
      return `<section><h2 style="margin-top:0">Schlüsselzitate</h2>
${w.zitateHinweis ? `<p class="notice">${w.zitateHinweis}</p>` : ''}
${w.zitate.length >= 3 ? `<div class="btnrow"><a class="btn btn--small btn--primary" href="#/quiz/zitate/${w.id}">Zitate-Quiz zu diesem Werk</a></div>` : ''}
${w.zitate.map((z) => `<figure class="quote ep" ${epStyle(w.epoche)}><blockquote>„${esc(z.text)}“</blockquote><figcaption class="src">${esc(z.wer)} · ${esc(z.stelle)}</figcaption><p class="why">${esc(z.deutung)}</p></figure>`).join('')}</section>`;
    case 'abitur':
      return `<section><h2 style="margin-top:0">Abi-Aufgaben mit Lösungsskizze</h2>
<p class="notice">Die Aufgaben sind nach dem Muster der bayerischen Abiturprüfung gebaut (Operatoren, Zusatzauftrag mit Vergleich). Es sind <strong>keine Original-Prüfungsaufgaben</strong>; die Lösungsskizzen zeigen, was ein Erwartungshorizont typischerweise verlangt. Erst selbst probieren, dann aufklappen! <a href="#/methode">So gehst du vor →</a></p>
${w.abitur.map((t, i) => renderTask(t, w, i)).join('')}</section>`;
    case 'quellen':
      return `<section><h2 style="margin-top:0">Quellen & Primärtext</h2><ul>${w.quellen.map((q) => `<li><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.titel)}</a> <span class="chip">${esc(q.typ)}</span></li>`).join('')}</ul>
<p class="small muted">Bewusst nicht verwendet: Zusammenfassungsportale wie inhaltsangabe.de – dort stehen erfahrungsgemäß Fehler. Grundlage ist immer der Primärtext.</p></section>`;
    default:
      return '';
  }
}

function viewWerk(id, tab = 'ueberblick') {
  const w = werkById[id];
  if (!w) return viewNotFound();
  if (!TABS.some(([t]) => t === tab)) tab = 'ueberblick';
  const idx = werkeSortiert.indexOf(w);
  const prev = werkeSortiert[idx - 1];
  const next = werkeSortiert[idx + 1];
  const gelernt = store.get('gelernt', {});
  const body = tab === 'alles'
    ? TABS.filter(([t]) => t !== 'alles').map(([t]) => werkSection(w, t)).join('<hr style="border:0;border-top:1px solid var(--line);margin:32px 0">')
    : werkSection(w, tab);
  return {
    title: `${w.kurztitel} – Deutsch-Abi`,
    html: `<div class="wrap ep" ${epStyle(w.epoche)}>
  <header class="work-head">
    <p class="eyebrow">${esc(w.gattung)} · ${esc(w.jahrText || w.jahr)}</p>
    <h1>${esc(w.titel)}</h1>
    <p class="meta">${esc(w.autor)} (${esc(w.autorLeben)}) · ${esc(w.formKurz)}</p>
    <ul class="chips"><li>${epochChip(w.epoche, w.epochenText)}</li>${w.badge ? `<li><span class="chip chip--accent">${esc(w.badge)}</span></li>` : ''}</ul>
    <label class="learned"><input type="checkbox" data-learned="${w.id}" ${gelernt[w.id] ? 'checked' : ''}> Als gelernt markieren</label>
  </header>
  <nav class="tabs" aria-label="Abschnitte">${TABS.map(([t, l]) => `<a href="#/werk/${w.id}/${t}"${t === tab ? ' aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
  ${body}
  <nav class="pager" aria-label="Weitere Werke">
    ${prev ? `<a class="btn" href="#/werk/${prev.id}">← ${esc(prev.kurztitel)}</a>` : '<span></span>'}
    ${next ? `<a class="btn" href="#/werk/${next.id}">${esc(next.kurztitel)} →</a>` : '<span></span>'}
  </nav>
</div>`
  };
}

/* ---------- Timeline ---------- */
const TL_MIN = 1600, TL_MAX = 2030;
const tlPos = (y) => ((y - TL_MIN) / (TL_MAX - TL_MIN)) * 100;

// Distributes labels on rows so that they do not overlap. Widths are estimated for the
// narrowest layout (the strips scroll horizontally below that), so wider screens only get more room.
function placeLabels(items, { min, max, width, text, anchor = 'center' }) {
  const rows = [];
  const pxPerYear = width / (max - min);
  return items.map((it) => {
    const x = (it.jahr - min) * pxPerYear;
    const w = text(it).length * 6.6 + (anchor === 'left' ? 17 : 0);
    // Left-anchored labels that would run past the right edge are flipped to the left of their dot.
    const flip = anchor === 'left' && x - 6 + w > width;
    const start = anchor === 'left' ? (flip ? x + 6 - w : x - 6) : x - w / 2;
    let r = 0;
    while (rows[r] !== undefined && start < rows[r] + 8) r++;
    rows[r] = start + w;
    return { ...it, row: r, flip };
  });
}

function viewZeitstrahl(params) {
  const showRef = params.get('referate') !== 'nein';
  const ticks = [];
  for (let y = TL_MIN; y <= TL_MAX; y += 50) ticks.push(y);
  const rowsUsed = Math.max(...epochen.map((e) => e.row)) + 1;
  const bars = epochen.map((e) => `<a class="gantt__bar ep" ${epStyle(e.id, `left:${tlPos(e.von)}%;width:${tlPos(e.bis) - tlPos(e.von)}%;top:${e.row * 34}px`)} href="#/epoche/${e.id}" title="${esc(e.name)} (${esc(e.zeitraum)})">${esc(e.kurz || e.name)}</a>`).join('');

  const items = [
    ...werke.map((w) => ({ jahr: w.jahr, label: w.kurztitel, href: `#/werk/${w.id}`, ep: w.epoche, ref: false })),
    ...(showRef ? referate.map((r) => ({ jahr: r.jahr, label: r.kurz, href: `#/referate/${r.id}`, ep: r.epoche, ref: true })) : [])
  ].sort((a, b) => a.jahr - b.jahr);
  const placed = placeLabels(items, { min: TL_MIN, max: TL_MAX, width: 948, text: (p) => `${p.label} ${p.jahr}`, anchor: 'left' });
  const workRows = Math.max(...placed.map((p) => p.row)) + 1;
  const works = placed.map((p) => `<a class="gantt__work ep${p.ref ? ' gantt__work--ref' : ''}${p.flip ? ' gantt__work--flip' : ''}" ${epStyle(p.ep, `left:${tlPos(p.jahr)}%;top:${p.row * 22 + 8}px`)} href="${p.href}" title="${esc(p.label)} (${p.jahr})">${esc(p.label)} <span class="muted">${p.jahr}</span></a>`).join('');

  const list = epochen.map((e) => {
    const ws = werke.filter((w) => w.epoche === e.id);
    const rs = referate.filter((r) => r.epoche === e.id);
    return `<li class="ep" ${epStyle(e.id)}><div class="card">
  <span class="period">${esc(e.zeitraum)}</span>
  <h3><a href="#/epoche/${e.id}">${esc(e.name)}</a></h3>
  <p class="small muted" style="margin-bottom:.5em">${esc(e.kurzbeschreibung)}</p>
  <ul class="minilist">${e.merkmale.slice(0, 3).map((m) => `<li>${m}</li>`).join('')}</ul>
  <p class="forms" style="margin:.6em 0 0"><strong>Prägende Textformen:</strong> ${esc(e.textformen.join(', '))}</p>
  ${ws.length ? `<p class="small" style="margin:.4em 0 0"><strong>Deine Lektüren:</strong> ${ws.map((w) => workLink(w.id)).join(', ')}</p>` : ''}
  ${rs.length ? `<p class="small muted" style="margin:.2em 0 0"><strong>Referate:</strong> ${rs.map((r) => `<a href="#/referate/${r.id}">${esc(r.kurz)}</a>`).join(', ')}</p>` : ''}
</div></li>`;
  }).join('');

  return {
    title: 'Epochen-Zeitstrahl – Deutsch-Abi',
    html: `<div class="wrap">
  <header class="page-head"><p class="eyebrow">Literaturgeschichte</p><h1>Epochen-Zeitstrahl</h1>
  <p class="lead">Von Barock bis Gegenwart: Jede Epoche mit Hintergrund, Merkmalen, prägenden Textformen, typischen Gedichten und den Werken, die du liest. Klick auf einen Balken oder ein Werk.</p></header>
  <div class="legend"><span>Abi-Lektüre</span><span class="ref">Referatsthema</span>
    <a href="#/zeitstrahl${showRef ? '?referate=nein' : ''}">${showRef ? 'Referate ausblenden' : 'Referate einblenden'}</a></div>
  <div class="gantt-wrap" tabindex="0" aria-label="Zeitstrahl, horizontal scrollbar">
    <div class="gantt">
      <div class="gantt__axis">${ticks.map((t) => `<span class="gantt__tick" style="left:${tlPos(t)}%">${t}</span>`).join('')}</div>
      ${ticks.map((t) => `<span class="gantt__grid" style="left:calc(16px + (100% - 32px) * ${tlPos(t) / 100})"></span>`).join('')}
      <div class="gantt__rows" style="height:${rowsUsed * 34}px">${bars}</div>
      <div class="gantt__works" style="height:${workRows * 22 + 16}px">${works}</div>
    </div>
  </div>
  <p class="small muted">Epochengrenzen sind Orientierungswerte – Epochen überlappen sich, und viele Autoren lassen sich nicht eindeutig zuordnen (z. B. Kleist, Büchner, Heine).</p>
  <h2>Alle Epochen</h2>
  <ol class="vtl">${list}</ol>
</div>`
  };
}

function viewEpoche(id) {
  const e = epocheById[id];
  if (!e) return viewNotFound();
  const i = epochen.indexOf(e);
  const prev = epochen[i - 1];
  const next = epochen[i + 1];
  const ws = werke.filter((w) => w.epoche === e.id || w.weitereEpochen?.includes(e.id));
  const rs = referate.filter((r) => r.epoche === e.id);
  const formCard = (key, label) => e.gattungen[key] ? `<div class="card ${[].concat(e.dominant).includes(key) ? 'dominant' : ''}"><h4>${label}</h4><p>${e.gattungen[key]}</p></div>` : '';
  return {
    title: `${e.name} – Deutsch-Abi`,
    html: `<div class="wrap ep" ${epStyle(e.id)}>
  <header class="epoch-head"><p class="eyebrow">Epoche</p><h1>${esc(e.name)}</h1><p class="period">${esc(e.zeitraum)}</p><p style="margin:0">${esc(e.kurzbeschreibung)}</p></header>
  <div class="twocol">
    <div><h2 style="margin-top:0">Historischer Hintergrund</h2><div class="prose">${e.hintergrund}</div></div>
    <div><h2 style="margin-top:0">Weltbild & Grundgedanken</h2><div class="prose">${e.weltbild}</div></div>
  </div>
  <h2>Merkmale</h2>
  <div class="card"><ul>${e.merkmale.map((m) => `<li>${m}</li>`).join('')}</ul></div>
  <h2>Textformen: Was war prägend?</h2>
  <p class="muted">Prägende Textformen: <strong>${esc(e.textformen.join(', '))}</strong></p>
  <div class="forms-grid">${formCard('drama', 'Drama')}${formCard('epik', 'Epik')}${formCard('lyrik', 'Lyrik')}</div>
  ${e.sprache ? `<h2>Sprache & Stil</h2><div class="prose">${e.sprache}</div>` : ''}
  <h2>Wichtige Autorinnen, Autoren und Werke</h2>
  <div class="table-wrap"><table class="table"><thead><tr><th>Autor/in</th><th>Werke</th></tr></thead><tbody>${e.autoren.map((a) => `<tr><td><strong>${esc(a.name)}</strong></td><td>${esc(a.werke)}</td></tr>`).join('')}</tbody></table></div>
  <h2>Typische Gedichte</h2>
  <div class="grid grid--2">${e.gedichte.map((g) => `<article class="card poem"><h4>${esc(g.titel)}</h4><p class="src">${esc(g.autor)} · ${esc(g.jahr)}</p>${g.auszug ? `<p class="verse">${g.auszug.split('\n').map(esc).join('<br>')}</p>` : ''}<p class="small">${g.hinweis}</p>${g.url ? `<a class="small" href="${esc(g.url)}" target="_blank" rel="noopener">Ganzer Text →</a>` : ''}</article>`).join('')}</div>
  ${ws.length ? `<h2>Deine Lektüren aus dieser Epoche</h2><div class="grid grid--works">${ws.map((w) => `<a class="card work-card ep" ${epStyle(w.epoche)} href="#/werk/${w.id}"><div class="work-card__meta">${w.jahr}</div><div class="work-card__title">${esc(w.titel)}</div><div class="work-card__author">${esc(w.autor)}</div></a>`).join('')}</div>` : ''}
  ${rs.length ? `<h2>Referatsthemen aus dieser Epoche</h2><ul>${rs.map((r) => `<li><a href="#/referate/${r.id}">${esc(r.autor)}: ${esc(r.titel)}</a> (${r.jahr})</li>`).join('')}</ul>` : ''}
  ${e.abgrenzung ? `<h2>Abgrenzung</h2><div class="prose">${e.abgrenzung}</div>` : ''}
  <h2>Live-Quelle & Quellen</h2>
  ${liveBox(e.wiki, e.name)}
  <ul style="margin-top:14px">${e.quellen.map((q) => `<li><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.titel)}</a></li>`).join('')}</ul>
  <nav class="pager" aria-label="Weitere Epochen">
    ${prev ? `<a class="btn" href="#/epoche/${prev.id}">← ${esc(prev.name)}</a>` : '<span></span>'}
    ${next ? `<a class="btn" href="#/epoche/${next.id}">${esc(next.name)} →</a>` : '<span></span>'}
  </nav>
</div>`
  };
}

/* ---------- Stilmittel ---------- */
function viewStilmittel(focusId) {
  const cards = stilmittel.map((s) => `<article class="card device" id="sm-${s.id}" data-cat="${s.kategorie}" data-text="${esc(norm(`${s.name} ${s.alias || ''} ${stripTags(s.definition)} ${s.beispiel}`))}">
  <p class="cat">${esc(kategorien[s.kategorie])}</p>
  <h3>${esc(s.name)}${s.alias ? ` <span class="muted small">(${esc(s.alias)})</span>` : ''}</h3>
  <p style="margin:0">${s.definition}</p>
  <dl><dt>Beispiel</dt><dd><span class="verse">${esc(s.beispiel)}</span></dd>
  <dt>Wirkung</dt><dd>${s.wirkung}</dd>
  ${s.werk ? `<dt>In deinen Werken</dt><dd>${s.werk}</dd>` : ''}</dl>
</article>`).join('');
  return {
    title: 'Stilmittel – Deutsch-Abi',
    focus: focusId ? `#sm-${focusId}` : null,
    html: `<div class="wrap">
  <header class="page-head"><p class="eyebrow">Werkzeugkasten</p><h1>Stilmittel</h1>
  <p class="lead">Fürs Abi zählt nicht das Erkennen allein, sondern die <strong>Wirkung im Zusammenhang</strong>: „Die Anapher … betont …, wodurch …“. Beispiele stammen, wo möglich, aus deinen Lektüren.</p>
  <div class="btnrow"><a class="btn btn--primary" href="#/quiz/stilmittel">Stilmittel-Quiz starten</a></div></header>
  <div class="filterbar">
    <label class="visually-hidden" for="sm-filter">Stilmittel filtern</label>
    <input id="sm-filter" type="search" placeholder="Filtern, z. B. „Wiederholung“ oder „Anapher“">
    <div class="filterchips" role="group" aria-label="Kategorie">
      <button type="button" data-cat="" aria-pressed="true">Alle</button>
      ${Object.entries(kategorien).map(([k, v]) => `<button type="button" data-cat="${k}" aria-pressed="false">${esc(v)}</button>`).join('')}
    </div>
  </div>
  <p class="small muted" id="sm-count"></p>
  <div class="grid grid--2" id="sm-list">${cards}</div>
</div>`,
    after() {
      const input = $('#sm-filter');
      let cat = '';
      const apply = () => {
        const q = norm(input.value.trim());
        let n = 0;
        $$('#sm-list .device').forEach((el) => {
          const ok = (!cat || el.dataset.cat === cat) && (!q || el.dataset.text.includes(q));
          el.hidden = !ok;
          if (ok) n++;
        });
        $('#sm-count').textContent = `${n} Stilmittel`;
      };
      input.addEventListener('input', apply);
      $$('.filterchips button').forEach((b) => b.addEventListener('click', () => {
        cat = b.dataset.cat;
        $$('.filterchips button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        apply();
      }));
      apply();
    }
  };
}

/* ---------- Quiz ---------- */
function quizView(kind, werkId) {
  let fragen = [];
  let titel = '';
  if (kind === 'stilmittel') {
    titel = 'Stilmittel-Quiz';
    const pool = stilmittel.filter((s) => s.quiz !== false);
    // Never offer a closely related device as a wrong answer – it might be right as well.
    const ok = (s, x) => x.id !== s.id && !verwandt.some((g) => g.includes(s.id) && g.includes(x.id));
    fragen = shuffle(pool).slice(0, 10).map((s) => {
      const falsch = shuffle(pool.filter((x) => ok(s, x) && x.kategorie === s.kategorie)).slice(0, 3);
      const fill = falsch.length < 3 ? shuffle(pool.filter((x) => ok(s, x) && !falsch.includes(x))).slice(0, 3 - falsch.length) : [];
      return {
        frage: s.beispiel,
        hinweis: 'Welches Stilmittel prägt dieses Beispiel am deutlichsten?',
        optionen: shuffle([s, ...falsch, ...fill]).map((x) => ({ text: x.name, richtig: x.id === s.id })),
        erklaerung: `<strong>${esc(s.name)}:</strong> ${s.definition} <a href="#/stilmittel/${s.id}">Mehr →</a>`
      };
    });
  } else {
    const auswahl = werkId && werkById[werkId] ? [werkById[werkId]] : werke;
    titel = werkId && werkById[werkId] ? `Zitate-Quiz: ${werkById[werkId].kurztitel}` : 'Zitate-Quiz: Wer sagt das – und wo?';
    const alle = werke.flatMap((w) => w.zitate.map((z) => ({ ...z, werk: w })));
    const pool = auswahl.flatMap((w) => w.zitate.map((z) => ({ ...z, werk: w })));
    fragen = shuffle(pool).slice(0, 10).map((z) => {
      if (werkId) {
        const sprecher = [...new Set(alle.filter((x) => x.werk.id === z.werk.id).map((x) => x.wer))];
        const falsch = shuffle(sprecher.filter((s) => s !== z.wer)).slice(0, 3);
        const extra = falsch.length < 3 ? shuffle([...new Set(alle.map((x) => x.wer))].filter((s) => s !== z.wer && !falsch.includes(s))).slice(0, 3 - falsch.length) : [];
        return {
          frage: `„${z.text}“`,
          hinweis: 'Wer sagt (oder schreibt) das?',
          optionen: shuffle([z.wer, ...falsch, ...extra]).map((s) => ({ text: s, richtig: s === z.wer })),
          erklaerung: `${esc(z.wer)} · ${esc(z.stelle)} – ${esc(z.deutung)}`
        };
      }
      const falsch = shuffle(werke.filter((w) => w.id !== z.werk.id)).slice(0, 3);
      return {
        frage: `„${z.text}“`,
        hinweis: 'Aus welchem Werk stammt das Zitat?',
        optionen: shuffle([z.werk, ...falsch]).map((w) => ({ text: `${w.kurztitel} (${w.autor.split(' ').pop()})`, richtig: w.id === z.werk.id })),
        erklaerung: `${esc(z.werk.kurztitel)} – ${esc(z.wer)}, ${esc(z.stelle)}. ${esc(z.deutung)}`
      };
    });
  }

  return {
    title: `${titel} – Deutsch-Abi`,
    html: `<div class="wrap"><header class="page-head"><p class="eyebrow">Abi-Training</p><h1>${esc(titel)}</h1></header><div class="quiz card" id="quiz"></div>
<p class="small" style="margin-top:14px"><a href="#/training">← Zurück zum Abi-Training</a></p></div>`,
    after() {
      const box = $('#quiz');
      let i = 0;
      let punkte = 0;
      const show = () => {
        if (i >= fragen.length) {
          box.innerHTML = `<h2 style="margin-top:0">${punkte} von ${fragen.length} richtig</h2><p>${punkte === fragen.length ? 'Stark – alles richtig!' : punkte >= fragen.length * 0.7 ? 'Gut! Schau dir die Fehler noch einmal an.' : 'Weiter üben – die Erklärungen helfen.'}</p><div class="btnrow"><button class="btn btn--primary" type="button" data-action="restart">Neue Runde</button></div>`;
          // A fresh route() call draws a new random set of questions.
          $('[data-action="restart"]', box).addEventListener('click', () => route());
          return;
        }
        const f = fragen[i];
        box.innerHTML = `<p class="small muted">Frage ${i + 1} von ${fragen.length} · ${punkte} richtig</p><div class="quiz__progress"><span style="width:${(i / fragen.length) * 100}%"></span></div>
<p class="small">${esc(f.hinweis)}</p><p class="quiz__q">${esc(f.frage)}</p>
<div class="quiz__opts">${f.optionen.map((o, k) => `<button type="button" data-k="${k}">${esc(o.text)}</button>`).join('')}</div>
<div class="quiz__feedback" aria-live="polite"></div>`;
        $$('.quiz__opts button', box).forEach((b) => b.addEventListener('click', () => {
          const o = f.optionen[Number(b.dataset.k)];
          if (o.richtig) punkte++;
          $$('.quiz__opts button', box).forEach((x) => {
            x.disabled = true;
            if (f.optionen[Number(x.dataset.k)].richtig) x.classList.add('right');
          });
          if (!o.richtig) b.classList.add('wrong');
          $('.quiz__feedback', box).innerHTML = `<p>${o.richtig ? '✓ Richtig.' : '✗ Leider falsch.'} ${f.erklaerung}</p><button class="btn btn--primary" type="button">${i + 1 < fragen.length ? 'Weiter' : 'Auswertung'}</button>`;
          $('.quiz__feedback button', box).addEventListener('click', () => { i++; show(); });
          $('.quiz__feedback button', box).focus();
        }));
      };
      show();
    }
  };
}

/* ---------- Theory pages ---------- */
function viewSeite(key) {
  const s = seiten[key];
  if (!s) return viewNotFound();
  return {
    title: `${s.titel} – Deutsch-Abi`,
    html: `<div class="wrap">
  <header class="page-head"><p class="eyebrow">${esc(s.eyebrow)}</p><h1>${esc(s.titel)}</h1><p class="lead">${s.intro}</p></header>
  <nav class="card toc" aria-label="Inhalt dieser Seite"><strong>Auf dieser Seite</strong><ol>${s.abschnitte.map((a, i) => `<li><a href="#/${key}#a${i + 1}">${esc(a.titel)}</a></li>`).join('')}</ol></nav>
  ${s.abschnitte.map((a, i) => `<section class="theory-section" id="a${i + 1}"><h2>${esc(a.titel)}</h2><div class="prose">${a.html}</div></section>`).join('')}
  ${s.quellen ? `<h2>Quellen</h2><ul>${s.quellen.map((q) => `<li>${q.url ? `<a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.titel)}</a>` : esc(q.titel)}</li>`).join('')}</ul>` : ''}
</div>`
  };
}

function viewTraining() {
  const tasks = werkeSortiert.flatMap((w) => w.abitur.map((t, i) => ({ w, t, i })));
  return {
    title: 'Abi-Training – Deutsch-Abi',
    html: `<div class="wrap">
  <header class="page-head"><p class="eyebrow">Üben</p><h1>Abi-Training</h1>
  <p class="lead">Aufgaben im Abi-Format mit Lösungsskizze, dazu Quiz zum Wiederholen. Tipp: Aufgabe lesen, 10 Minuten Stichpunkte machen, dann die Lösungsskizze vergleichen.</p></header>
  <div class="grid grid--tiles">
    <a class="card tile" href="#/quiz/stilmittel"><strong>Stilmittel-Quiz</strong><span>10 zufällige Beispiele erkennen</span></a>
    <a class="card tile" href="#/quiz/zitate"><strong>Zitate-Quiz</strong><span>Welches Werk? Quer durch alle Lektüren</span></a>
    <a class="card tile" href="#/methode"><strong>Interpretieren – so geht’s</strong><span>Aufbau, Operatoren, Zitieren</span></a>
    <a class="card tile" href="#/abiformen"><strong>Weitere Abi-Formen</strong><span>Erörtern, Argumentieren, Informieren – mit Übungen</span></a>
    <a class="card tile" href="#/motive"><strong>Motive & Vergleiche</strong><span>Für Zusatzaufträge mit Vergleich</span></a>
  </div>
  <h2>Alle Aufgaben (${tasks.length})</h2>
  <div class="table-wrap"><table class="table"><thead><tr><th>Werk</th><th>Aufgabe</th><th>Format</th></tr></thead><tbody>
  ${tasks.map(({ w, t, i }) => `<tr><td>${workLink(w.id)}</td><td><a href="#/werk/${w.id}/abitur" data-scroll="aufgabe-${i + 1}">${esc(t.titel)}</a></td><td class="small">${esc(t.format)}</td></tr>`).join('')}
  </tbody></table></div>
  <h2>Zitate-Quiz pro Werk</h2>
  <div class="chips">${werkeSortiert.filter((w) => w.zitate.length >= 3).map((w) => `<a class="chip ep" ${epStyle(w.epoche)} href="#/quiz/zitate/${w.id}">${esc(w.kurztitel)}</a>`).join('')}</div>
</div>`
  };
}

function viewMotive() {
  return {
    title: 'Motive & Vergleiche – Deutsch-Abi',
    html: `<div class="wrap">
  <header class="page-head"><p class="eyebrow">Vernetzen</p><h1>Motive & Vergleiche</h1>
  <p class="lead">Im Abi kommt oft ein Zusatzauftrag: „Vergleichen Sie … mit einem Werk, das Sie im Unterricht gelesen haben“ oder mit einer ländergemeinsamen Lektüre. Hier sind die wichtigsten Verbindungen zwischen deinen Werken.</p></header>
  ${motive.map((m) => `<section class="section"><h2>${esc(m.titel)}</h2><p class="muted">${m.intro}</p>
  <div class="grid grid--2">${m.eintraege.map((e) => { const w = werkById[e.werk]; return `<div class="card ep" ${epStyle(w.epoche, 'border-left:4px solid var(--ep)')}><h4 style="margin-top:0">${workLink(w.id)}</h4><p style="margin:0">${e.text}</p></div>`; }).join('')}</div>
  ${m.vergleich ? `<div class="apply">${m.vergleich}</div>` : ''}</section>`).join('')}
</div>`
  };
}

function renderHandout(r) {
  const h = r.handout;
  if (!h) return '';
  // Handout texts are plain text, so everything is escaped.
  const list = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  return `<div class="handout">
<h4>Aus den Handouts – geprüft und ergänzt</h4>
${h.aufbau ? `<p><strong>Form und Aufbau:</strong> ${esc(h.aufbau)}</p>` : ''}
${h.figuren?.length ? `<h5>Figuren</h5><ul class="minilist">${h.figuren.map(([n, d]) => `<li><strong>${esc(n)}</strong> – ${esc(d)}</li>`).join('')}</ul>` : ''}
${h.details?.length ? `<h5>Inhalt und Deutung</h5>${list(h.details)}` : ''}
${h.epoche?.length ? `<h5>Epochenmerkmale am Werk</h5>${list(h.epoche)}` : ''}
${h.zitate?.length ? `<h5>Zitate</h5>${h.zitate.map((z) => `<figure class="quote ep" ${epStyle(r.epoche)}><blockquote>„${esc(z.text)}“</blockquote><figcaption class="src">${esc(z.wer)}${z.stelle ? ` · ${esc(z.stelle)}` : ''}</figcaption></figure>`).join('')}` : ''}
</div>`;
}

function viewReferate(focusId) {
  const groups = referatGruppen.map((g) => {
    const items = referate.filter((r) => r.gruppe === g.id);
    return `<section class="ref-group" style="--grp:${g.farbe}"><h2>${esc(g.titel)}</h2><p class="muted small">${esc(g.text)}</p>
${items.map((r) => `<details class="block ep" ${epStyle(r.epoche)} id="ref-${r.id}"${r.id === focusId ? ' open' : ''}><summary><span class="ref-sum"><span>${esc(r.autor)}: ${esc(r.titel)}</span><small>${r.jahr} · ${esc(r.gattung)} · ${esc(epocheById[r.epoche]?.name || '')}</small></span></summary>
<div class="block__body"><p>${r.inhalt}</p><p><strong>Themen:</strong> ${esc(r.themen)}</p>
${r.werk ? `<p class="notice">Zu diesem Werk gibt es eine ausführliche Werkseite: ${workLink(r.werk)} – mit Inhalt nach Akten, Figuren, Interpretation, Zitaten und Abi-Aufgaben.</p>` : ''}
${renderHandout(r)}
<p><strong>Für Vergleiche:</strong> ${r.bezug}</p><p class="small">${epochChip(r.epoche)}</p></div></details>`).join('')}</section>`;
  }).join('');
  return {
    title: 'Referatsthemen – Deutsch-Abi',
    focus: focusId ? `#ref-${focusId}` : null,
    html: `<div class="wrap"><header class="page-head"><p class="eyebrow">AA 1 + 2</p><h1>Referatsthemen</h1>
<p class="lead">Die Werke aus der Referatsliste – jeweils mit Kurzinhalt, Epoche und Anknüpfungspunkten an deine Lektüren. Dazu kommen die geprüften Inhalte aus den Referats-Handouts. Die Farben entsprechen der Liste.</p></header>${groups}</div>`
  };
}

function viewQuellen() {
  const typen = [...new Set(quellen.map((q) => q.typ))];
  return {
    title: 'Quellen – Deutsch-Abi',
    html: `<div class="wrap prose-wide"><header class="page-head"><p class="eyebrow">Transparenz</p><h1>Quellen</h1>
<p class="lead">Die Texte dieser Seite sind eigenständig formuliert. Grundlage sind die Primärtexte (frei verfügbar, wo gemeinfrei) und die folgenden Quellen. Für jedes Werk stehen die Einzelquellen zusätzlich im Reiter „Quellen“.</p></header>
${typen.map((t) => `<h2>${esc(t)}</h2><ul>${quellen.filter((q) => q.typ === t).map((q) => `<li>${q.url ? `<a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.titel)}</a>` : esc(q.titel)}${q.hinweis ? ` <span class="muted small">– ${esc(q.hinweis)}</span>` : ''}</li>`).join('')}</ul>`).join('')}
<h2>Primärtexte der Lektüren</h2><ul>${werkeSortiert.map((w) => w.quellen.filter((q) => q.typ === 'Primärtext').map((q) => `<li><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.titel)}</a></li>`).join('')).join('')}</ul>
<div class="notice"><p><strong>Urheberrecht:</strong> Zitate aus noch geschützten Werken (Brecht bis Ende 2026, Erpenbeck) sind kurz gehalten und dienen der Analyse (Zitatrecht). Längere Auszüge stammen nur aus gemeinfreien Texten.</p></div>
</div>`
  };
}

/* ---------- Search ---------- */
let searchIndex = null;
function buildIndex() {
  const idx = [];
  const add = (type, title, href, html) => idx.push({ type, title, href, text: stripTags(html), n: norm(`${title} ${stripTags(html)}`) });
  for (const w of werke) {
    add('Werk', `${w.titel} (${w.autor})`, `#/werk/${w.id}`, `${w.einSatz} ${w.kernpunkte.join(' ')} ${w.hintergrund}`);
    w.inhalt.forEach((s) => add(`Inhalt · ${w.kurztitel}`, s.titel, `#/werk/${w.id}/inhalt`, s.text));
    w.figuren.forEach((f) => add(`Figur · ${w.kurztitel}`, f.name, `#/werk/${w.id}/figuren`, `${f.rolle} ${f.text}`));
    w.interpretation.forEach((s) => add(`Interpretation · ${w.kurztitel}`, s.titel, `#/werk/${w.id}/interpretation`, s.text));
    w.form.forEach((s) => add(`Form · ${w.kurztitel}`, s.titel, `#/werk/${w.id}/form`, s.text));
    w.zitate.forEach((z) => add(`Zitat · ${w.kurztitel}`, `„${z.text}“`, `#/werk/${w.id}/zitate`, `${z.wer} ${z.stelle} ${z.deutung}`));
    w.abitur.forEach((t) => add(`Abi-Aufgabe · ${w.kurztitel}`, t.titel, `#/werk/${w.id}/abitur`, `${t.format} ${t.aufgabe}`));
  }
  for (const e of epochen) {
    add('Epoche', `${e.name} (${e.zeitraum})`, `#/epoche/${e.id}`, `${e.kurzbeschreibung} ${e.merkmale.join(' ')} ${e.hintergrund} ${e.weltbild}`);
    e.gedichte.forEach((g) => add(`Gedicht · ${e.name}`, `${g.autor}: ${g.titel}`, `#/epoche/${e.id}`, `${g.auszug || ''} ${g.hinweis}`));
    e.autoren.forEach((a) => add(`Autor · ${e.name}`, a.name, `#/epoche/${e.id}`, a.werke));
  }
  stilmittel.forEach((s) => add('Stilmittel', s.name, `#/stilmittel/${s.id}`, `${s.alias || ''} ${s.definition} ${s.beispiel} ${s.wirkung}`));
  for (const [key, s] of Object.entries(seiten)) s.abschnitte.forEach((a) => add(s.titel, a.titel, `#/${key}`, a.html));
  referate.forEach((r) => {
    const h = r.handout || {};
    const extra = [h.aufbau, ...(h.figuren || []).map(([n, d]) => `${n} ${d}`), ...(h.details || []), ...(h.epoche || []), ...(h.zitate || []).map((z) => z.text)].filter(Boolean).join(' ');
    add('Referatsthema', `${r.autor}: ${r.titel}`, `#/referate/${r.id}`, `${r.inhalt} ${r.themen} ${extra}`);
  });
  motive.forEach((m) => add('Motiv', m.titel, '#/motive', `${m.intro} ${m.eintraege.map((e) => e.text).join(' ')}`));
  return idx;
}

function highlight(text, terms) {
  let out = esc(text);
  for (const t of terms) {
    if (t.length < 2) continue;
    const re = new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    out = out.replace(re, '<mark>$1</mark>');
  }
  return out;
}

function snippet(entry, terms) {
  const n = norm(entry.text);
  const i = terms.length ? n.indexOf(terms[0]) : -1;
  const start = Math.max(0, i - 70);
  const s = entry.text.slice(start, start + 220);
  return (start > 0 ? '… ' : '') + s + (start + 220 < entry.text.length ? ' …' : '');
}

function viewSuche(params) {
  const q = (params.get('q') || '').trim();
  searchIndex ||= buildIndex();
  const terms = norm(q).split(/\s+/).filter(Boolean);
  let results = [];
  if (terms.length) {
    results = searchIndex
      .filter((e) => terms.every((t) => e.n.includes(t)))
      .map((e) => ({ e, score: terms.reduce((s, t) => s + (norm(e.title).includes(t) ? 5 : 0) + (e.type === 'Werk' || e.type === 'Epoche' || e.type === 'Stilmittel' ? 2 : 0), 0) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 60);
  }
  const rawTerms = q.split(/\s+/).filter(Boolean);
  return {
    title: `Suche${q ? `: ${q}` : ''} – Deutsch-Abi`,
    html: `<div class="wrap"><header class="page-head"><p class="eyebrow">Suche</p><h1>${q ? `Ergebnisse für „${esc(q)}“` : 'Suche'}</h1>
<form class="search-big" data-search role="search"><label class="visually-hidden" for="s-q">Suchen</label><input id="s-q" type="search" name="q" value="${esc(q)}" placeholder="Figur, Zitat, Stilmittel, Epoche …"><button class="btn btn--primary" type="submit">Suchen</button></form></header>
${q ? `<p class="muted">${results.length ? `${results.length}${results.length === 60 ? '+' : ''} Treffer` : 'Keine Treffer. Versuch ein anderes Stichwort (z. B. „Wette“, „Anapher“, „Naturalismus“).'}</p>` : ''}
<ul class="results">${results.map(({ e }) => `<li class="card"><a href="${e.href}"><span class="type">${esc(e.type)}</span><span class="title"> ${highlight(e.title, rawTerms)}</span><br><span class="snip">${highlight(snippet(e, terms), rawTerms)}</span></a></li>`).join('')}</ul></div>`
  };
}

function viewNotFound() {
  return { title: 'Nicht gefunden – Deutsch-Abi', html: '<div class="wrap"><h1>Seite nicht gefunden</h1><p><a href="#/">Zur Übersicht</a></p></div>' };
}

/* ---------- Router ---------- */
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [pathPart, queryPart = ''] = raw.split('?');
  const [path, anchor] = pathPart.split('#');
  return { parts: path.split('/').filter(Boolean).map(decodeURIComponent), params: new URLSearchParams(queryPart), anchor };
}

function route() {
  const { parts, params, anchor } = parseHash();
  const [a, b, c] = parts;
  let view;
  let nav = a || 'start';
  switch (a) {
    case undefined: view = viewHome(); break;
    case 'werk': view = viewWerk(b, c); nav = 'start'; break;
    case 'zeitstrahl': view = viewZeitstrahl(params); break;
    case 'epoche': view = viewEpoche(b); nav = 'zeitstrahl'; break;
    case 'stilmittel': view = viewStilmittel(b); break;
    case 'quiz': view = quizView(b === 'zitate' ? 'zitate' : 'stilmittel', c); nav = 'training'; break;
    case 'training': view = viewTraining(); break;
    case 'motive': view = viewMotive(); break;
    case 'referate': view = viewReferate(b); break;
    case 'quellen': view = viewQuellen(); break;
    case 'suche': view = viewSuche(params); break;
    default: view = seiten[a] ? viewSeite(a) : viewNotFound();
  }
  const main = $('#main');
  main.innerHTML = view.html;
  document.title = view.title;
  $$('.mainnav a').forEach((el) => {
    if (el.dataset.nav === nav) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
  });
  // Keep the active item visible in horizontally scrolling bars (phones).
  for (const bar of $$('.mainnav, .tabs')) {
    const active = $('a[aria-current="page"]', bar);
    if (active) bar.scrollLeft = active.offsetLeft - (bar.clientWidth - active.offsetWidth) / 2;
  }
  view.after?.();

  const target = view.focus ? $(view.focus) : anchor ? document.getElementById(anchor) : null;
  const pending = sessionStorage.getItem('deutschabi:scroll');
  sessionStorage.removeItem('deutschabi:scroll');
  const scrollTarget = target || (pending ? document.getElementById(pending) : null);
  if (scrollTarget) {
    requestAnimationFrame(() => {
      scrollTarget.scrollIntoView({ block: 'start' });
      if (scrollTarget.classList.contains('device')) scrollTarget.classList.add('flash');
    });
  } else if (a === 'werk' && document.body.dataset.lastWerk === b) {
    // Tab switch inside the same work: keep the tab bar in view instead of jumping to the top.
    const head = $('.work-head');
    const limit = head ? head.offsetTop + head.offsetHeight - $('.topbar').offsetHeight : 0;
    if (window.scrollY > limit) window.scrollTo(0, limit);
  } else {
    window.scrollTo(0, 0);
  }
  document.body.dataset.lastWerk = a === 'werk' ? b : '';
  const topsearch = $('#topsearch-input');
  if (a !== 'suche') topsearch.value = '';
}

function updateTopbarHeight() {
  document.documentElement.style.setProperty('--topbar-h', `${$('.topbar').offsetHeight}px`);
}

/* ---------- Global events ---------- */
document.addEventListener('click', (ev) => {
  const link = ev.target.closest('a[href^="#"]');
  if (link) {
    const href = link.getAttribute('href');
    if (!href.startsWith('#/')) {
      // In-page anchors (#top, #main) must not trigger the router.
      ev.preventDefault();
      if (href === '#top') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(href.slice(1))?.focus();
      return;
    }
    const anchor = link.dataset.scroll || href.split('#')[2];
    if (href === location.hash) {
      ev.preventDefault();
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ block: 'start' });
      return;
    }
    if (link.dataset.scroll) {
      try { sessionStorage.setItem('deutschabi:scroll', link.dataset.scroll); } catch { /* privater Modus */ }
    }
  }
  const action = ev.target.closest('[data-action]');
  if (!action) return;
  if (action.dataset.action === 'wiki') loadWiki(action.closest('.live'));
  if (action.dataset.action === 'open-all') $$('#main details.block').forEach((d) => { d.open = true; });
  if (action.dataset.action === 'close-all') $$('#main details.block').forEach((d) => { d.open = false; });
});

document.addEventListener('change', (ev) => {
  const box = ev.target.closest('[data-learned]');
  if (!box) return;
  const g = store.get('gelernt', {});
  g[box.dataset.learned] = box.checked;
  store.set('gelernt', g);
});

document.addEventListener('submit', (ev) => {
  const form = ev.target.closest('form[data-search], #topsearch');
  if (!form) return;
  ev.preventDefault();
  const q = new FormData(form).get('q')?.toString().trim();
  if (q) location.hash = `#/suche?q=${encodeURIComponent(q)}`;
});

window.addEventListener('hashchange', route);
window.addEventListener('resize', updateTopbarHeight);
updateTopbarHeight();
route();
