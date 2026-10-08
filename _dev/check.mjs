// Prüft die Daten der Deutsch-Abi-App auf kaputte Querverweise und fehlende Felder.
// Aufruf (im Repo-Wurzelverzeichnis): node deutsch-abi/_dev/check.mjs
import { werke } from '../data/werke/index.js';
import { epochen } from '../data/epochen.js';
import { stilmittel, kategorien, verwandt } from '../data/stilmittel.js';
import { seiten } from '../data/theorie.js';
import { referate, referatGruppen } from '../data/referate.js';
import { motive } from '../data/motive.js';
import { handouts } from '../data/handouts.js';
import { quellen } from '../data/quellen.js';

const errors = [];
const fail = (msg) => errors.push(msg);
const ids = (list, name) => {
  const set = new Set();
  for (const x of list) {
    if (set.has(x.id)) fail(`${name}: doppelte id ${x.id}`);
    set.add(x.id);
  }
  return set;
};

const werkIds = ids(werke, 'werke');
const epIds = ids(epochen, 'epochen');
const smIds = ids(stilmittel, 'stilmittel');
const refIds = ids(referate, 'referate');
const grpIds = ids(referatGruppen, 'referatGruppen');
const routes = new Set(['', 'zeitstrahl', 'stilmittel', 'training', 'motive', 'referate', 'quellen', 'suche', 'quiz', ...Object.keys(seiten)]);

const werkFields = ['id', 'titel', 'kurztitel', 'autor', 'autorLeben', 'jahr', 'epoche', 'gattung', 'formKurz', 'wiki', 'einSatz', 'kernpunkte', 'steckbrief', 'hintergrund', 'inhalt', 'figuren', 'interpretation', 'form', 'stilmittel', 'epochenbezug', 'zitate', 'abitur', 'quellen'];
for (const w of werke) {
  for (const f of werkFields) if (w[f] === undefined) fail(`werk ${w.id}: Feld ${f} fehlt`);
  if (!epIds.has(w.epoche)) fail(`werk ${w.id}: unbekannte Epoche ${w.epoche}`);
  (w.weitereEpochen || []).forEach((e) => epIds.has(e) || fail(`werk ${w.id}: unbekannte weitere Epoche ${e}`));
  if (w.kernpunkte.length !== 5) fail(`werk ${w.id}: ${w.kernpunkte.length} statt 5 Kernpunkte`);
  w.stilmittel.forEach((s) => smIds.has(s.id) || fail(`werk ${w.id}: Stilmittel-id ${s.id} unbekannt`));
  (w.vergleiche || []).forEach((v) => werkIds.has(v.mit) || fail(`werk ${w.id}: Vergleich mit unbekanntem Werk ${v.mit}`));
  w.abitur.forEach((t, i) => {
    for (const f of ['titel', 'format', 'aufgabe', 'loesung']) if (!t[f]) fail(`werk ${w.id}: Aufgabe ${i + 1} ohne ${f}`);
  });
  w.quellen.forEach((q) => q.url?.startsWith('http') || fail(`werk ${w.id}: Quelle ohne URL: ${q.titel}`));
}
for (const e of epochen) {
  for (const f of ['name', 'zeitraum', 'von', 'bis', 'row', 'hue', 'kurzbeschreibung', 'hintergrund', 'weltbild', 'merkmale', 'textformen', 'dominant', 'gattungen', 'autoren', 'gedichte', 'wiki', 'quellen']) if (e[f] === undefined) fail(`epoche ${e.id}: Feld ${f} fehlt`);
  if (e.von >= e.bis) fail(`epoche ${e.id}: von >= bis`);
}
// Zeitstrahl: Balken in derselben Zeile dürfen sich nicht überlappen.
const rows = {};
for (const e of epochen) (rows[e.row] ||= []).push(e);
for (const [r, list] of Object.entries(rows)) {
  list.sort((a, b) => a.von - b.von);
  for (let i = 1; i < list.length; i++) if (list[i].von < list[i - 1].bis) fail(`Zeitstrahl Zeile ${r}: ${list[i - 1].id} überlappt ${list[i].id}`);
}
for (const s of stilmittel) {
  if (!kategorien[s.kategorie]) fail(`stilmittel ${s.id}: unbekannte Kategorie ${s.kategorie}`);
  for (const f of ['name', 'definition', 'beispiel', 'wirkung']) if (!s[f]) fail(`stilmittel ${s.id}: Feld ${f} fehlt`);
}
verwandt.flat().forEach((id) => smIds.has(id) || fail(`verwandt: unbekanntes Stilmittel ${id}`));
for (const r of referate) {
  if (!epIds.has(r.epoche)) fail(`referat ${r.id}: unbekannte Epoche ${r.epoche}`);
  if (!grpIds.has(r.gruppe)) fail(`referat ${r.id}: unbekannte Gruppe ${r.gruppe}`);
  if (r.werk && !werkIds.has(r.werk)) fail(`referat ${r.id}: unbekanntes Werk ${r.werk}`);
  if (r.handout) for (const k of Object.keys(r.handout)) if (!['aufbau', 'figuren', 'details', 'epoche', 'zitate'].includes(k)) fail(`referat ${r.id}: unbekanntes Handout-Feld ${k}`);
}
Object.keys(handouts).forEach((id) => refIds.has(id) || fail(`handout ohne Referat: ${id}`));
for (const m of motive) m.eintraege.forEach((e) => werkIds.has(e.werk) || fail(`motiv ${m.titel}: unbekanntes Werk ${e.werk}`));
quellen.forEach((q) => q.url === undefined || q.url.startsWith('http') || fail(`quelle ohne gültige URL: ${q.titel}`));

// Alle internen Links (#/...) in allen Texten prüfen.
const allText = JSON.stringify({ werke, epochen, stilmittel, seiten, referate, motive });
for (const [, path] of allText.matchAll(/href=\\"#\/([^"\\]*)\\"/g)) {
  const [route, id] = path.split('#')[0].split('?')[0].split('/');
  const ok =
    (route === 'werk' && werkIds.has(id)) ||
    (route === 'epoche' && epIds.has(id)) ||
    (route === 'stilmittel' && (!id || smIds.has(id))) ||
    (route === 'referate' && (!id || refIds.has(id))) ||
    (!id && routes.has(route));
  if (!ok) fail(`kaputter interner Link: #/${path}`);
}

if (errors.length) {
  console.error(`${errors.length} Fehler:\n` + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`OK: ${werke.length} Werke, ${epochen.length} Epochen, ${stilmittel.length} Stilmittel, ${referate.length} Referate, ${motive.length} Motive, ${Object.keys(seiten).length} Theorieseiten.`);
