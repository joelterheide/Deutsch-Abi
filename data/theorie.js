// Theorie- und Methodenseiten. Schlüssel = Route (#/erzaehltheorie usw.).
import { abiformen } from './abiformen.js';

const w = (id, text) => `<a href="#/werk/${id}">${text}</a>`;

export const seiten = {
  erzaehltheorie: {
    titel: 'Erzähltheorie (Epik)',
    eyebrow: 'Werkzeugkasten',
    intro: 'Mit diesen Begriffen beschreibst du, <em>wie</em> erzählt wird – und warum das für die Deutung wichtig ist. Die Kästen „Anwendung“ zeigen die Begriffe an deinen Lektüren.',
    abschnitte: [
      { titel: 'Autor und Erzähler', html: `<div class="def"><p>Der <strong>Autor</strong> ist die reale Person, die den Text geschrieben hat. Der <strong>Erzähler</strong> ist eine vom Autor geschaffene Instanz im Text. Sie dürfen nie gleichgesetzt werden – auch nicht bei einem Ich-Erzähler.</p></div>
<p>Formulierung im Abi: „Der Erzähler kommentiert …“, nicht „Hoffmann kommentiert …“ – außer du sprichst über Absichten des Autors (z. B. „Hoffmann gestaltet den Erzähler so, dass …“).</p>
<div class="apply"><p><strong>Anwendung:</strong> Im ${w('sandmann', 'Sandmann')} gibt sich der Erzähler als Freund Nathanaels aus und spricht den „günstigen Leser“ an – eine Erzählerfigur, nicht E.T.A. Hoffmann selbst.</p></div>` },
      { titel: 'Erzählform: Ich- oder Er/Sie-Erzählung', html: `<ul>
<li><strong>Ich-Erzählung</strong>: Der Erzähler ist selbst Figur der Geschichte (erzählendes Ich und erlebendes Ich können zeitlich auseinanderliegen).</li>
<li><strong>Er-/Sie-Erzählung</strong>: Der Erzähler gehört nicht zur erzählten Welt.</li>
</ul>
<div class="def"><p>Die <strong>Diegese</strong> ist die erzählte Welt – alles, was in der Geschichte existiert und geschieht (Figuren, Orte, Ereignisse). Danach wird bestimmt, wo der Erzähler steht.</p></div>
<p><strong>Erzählebenen</strong> (nach Genette) – wichtig bei Rahmen- und Binnenerzählungen:</p>
<ul>
<li><strong>extradiegetisch</strong>: außerhalb jeder erzählten Welt – hier steht der Erzähler, der die Rahmenerzählung erzählt.</li>
<li><strong>intradiegetisch</strong>: innerhalb der erzählten Welt der Rahmenerzählung (Rahmenhandlung). Erzählt dort eine Figur selbst eine Geschichte, ist sie ein intradiegetischer Erzähler.</li>
<li><strong>metadiegetisch</strong> (auch hypodiegetisch): die Geschichte, die diese Figur erzählt, also die <strong>Binnenerzählung</strong> – eine Erzählung in der Erzählung.</li>
</ul>
<p>In der Fachsprache (nach Gérard Genette): <strong>homodiegetisch</strong> (Erzähler gehört zur erzählten Welt; <em>autodiegetisch</em>, wenn er die Hauptfigur ist) und <strong>heterodiegetisch</strong> (Erzähler gehört nicht dazu).</p>
<div class="apply"><p><strong>Anwendung:</strong> Die drei Briefe im ${w('sandmann', 'Sandmann')} sind Ich-Erzählungen (autodiegetisch: Nathanael über sich). ${w('tod-in-venedig', 'Der Tod in Venedig')}, ${w('bahnwaerter-thiel', 'Bahnwärter Thiel')} und ${w('heimsuchung', 'Heimsuchung')} sind Er-/Sie-Erzählungen (heterodiegetisch).</p></div>` },
      { titel: 'Erzählverhalten: auktorial, personal, neutral', html: `<p>Nach Franz K. Stanzel unterscheidet man typische Erzählsituationen:</p>
<div class="table-wrap"><table class="table"><thead><tr><th>Erzählverhalten</th><th>Merkmale</th><th>Wirkung</th></tr></thead><tbody>
<tr><td><strong>auktorial</strong></td><td>Erzähler steht über dem Geschehen: Überblick, Kommentare, Wertungen, Vorausdeutungen, Leseranrede, Einblick in mehrere Figuren</td><td>Ordnung, Distanz, Lenkung des Lesers, oft Ironie</td></tr>
<tr><td><strong>personal</strong></td><td>Erzählt aus der Wahrnehmung einer Figur (Reflektorfigur), ohne erkennbaren Erzähler; viel erlebte Rede</td><td>Nähe, Identifikation, eingeschränkte Sicht</td></tr>
<tr><td><strong>neutral</strong></td><td>Nur Äußeres, Dialoge, keine Innensicht und keine Kommentare (wie eine Kamera)</td><td>Objektivität, Leser muss selbst deuten</td></tr>
</tbody></table></div>
<p>Wichtig: Das Erzählverhalten kann innerhalb eines Textes wechseln.</p>
<div class="apply"><p><strong>Anwendung:</strong> ${w('tod-in-venedig', 'Tod in Venedig')}: auktorial-ironisch, gleitet aber in Aschenbachs Bewusstsein. ${w('bahnwaerter-thiel', 'Thiel')}: berichtend-auktorial in Kapitel I, personal in den Visionen. ${w('heimsuchung', 'Heimsuchung')}: wechselnde personale Perspektiven, der Gärtner meist von außen.</p></div>` },
      { titel: 'Perspektive und Fokalisierung', html: `<ul>
<li><strong>Innensicht</strong>: Gedanken und Gefühle einer Figur werden wiedergegeben.</li>
<li><strong>Außensicht</strong>: nur Sichtbares und Hörbares.</li>
</ul>
<p>Genette spricht von <strong>Fokalisierung</strong>: <em>Nullfokalisierung</em> (Erzähler weiß mehr als die Figuren), <em>interne Fokalisierung</em> (Erzähler weiß so viel wie eine Figur), <em>externe Fokalisierung</em> (Erzähler weiß weniger, nur Außensicht).</p>` },
      { titel: 'Erzählhaltung', html: `<p>Die Einstellung des Erzählers zum Erzählten: neutral, sachlich, distanziert, ironisch, kritisch, einfühlend, humorvoll, pathetisch. Belege sie immer am Text (Wortwahl, Kommentare).</p>
<div class="apply"><p><strong>Anwendung:</strong> Der Schlusssatz des ${w('tod-in-venedig', 'Tod in Venedig')} („eine respektvoll erschütterte Welt“) zeigt die ironische Erzählhaltung.</p></div>` },
      { titel: 'Darstellung von Rede und Gedanken', html: `<div class="table-wrap"><table class="table"><thead><tr><th>Form</th><th>Erkennungszeichen</th><th>Beispiel (konstruiert)</th></tr></thead><tbody>
<tr><td><strong>Erzählerbericht</strong></td><td>Erzähler berichtet Handlung</td><td>Er ging zum Bahnhof.</td></tr>
<tr><td><strong>Redebericht</strong></td><td>Gespräch wird nur zusammengefasst</td><td>Sie sprachen über die Reise.</td></tr>
<tr><td><strong>Direkte Rede</strong></td><td>Anführungszeichen, Redebegleitsatz</td><td>Er sagte: „Ich reise morgen ab.“</td></tr>
<tr><td><strong>Indirekte Rede</strong></td><td>Konjunktiv, Redebegleitsatz</td><td>Er sagte, er reise morgen ab.</td></tr>
<tr><td><strong>Erlebte Rede</strong></td><td>3. Person, Präteritum/Indikativ, kein Redebegleitsatz, Sprache der Figur (Fragen, Ausrufe)</td><td>Morgen würde er abreisen. Ja, morgen – ganz bestimmt!</td></tr>
<tr><td><strong>Innerer Monolog</strong></td><td>1. Person, Präsens, kein Redebegleitsatz</td><td>Morgen reise ich ab. Ganz bestimmt. Oder doch nicht?</td></tr>
<tr><td><strong>Bewusstseinsstrom</strong></td><td>ungeordnete Assoziationen, Satzfetzen</td><td>abreisen morgen der Strand das Licht nein …</td></tr>
</tbody></table></div>
<p>Erlebte Rede und innerer Monolog erzeugen große Nähe zur Figur; bei erlebter Rede verschwimmt die Grenze zwischen Erzähler- und Figurenstimme.</p>` },
      { titel: 'Zeitgestaltung', html: `<ul>
<li><strong>Erzählzeit</strong>: Zeit, die man zum Lesen braucht (Umfang). <strong>Erzählte Zeit</strong>: Zeitraum der Handlung.</li>
<li><strong>Zeitdeckend</strong> (Erzählzeit ≈ erzählte Zeit, z. B. Dialoge), <strong>zeitdehnend</strong> (Erzählzeit > erzählte Zeit, z. B. Gedanken in einem Augenblick), <strong>zeitraffend</strong> (Erzählzeit < erzählte Zeit), <strong>Zeitsprung</strong> (Aussparung).</li>
<li><strong>Rückblende</strong> (Analepse) und <strong>Vorausdeutung</strong> (Prolepse); chronologisches oder achronologisches Erzählen.</li>
<li><strong>Iteratives Erzählen</strong>: Wiederholtes wird einmal erzählt („Jeden Morgen …“).</li>
</ul>
<div class="apply"><p><strong>Anwendung:</strong> ${w('bahnwaerter-thiel', 'Thiel')}: Kapitel I rafft zehn Jahre, Kapitel III dehnt den Unglückstag. ${w('heimsuchung', 'Heimsuchung')}: Der Prolog rafft Jahrtausende, die Gärtner-Kapitel erzählen iterativ. ${w('sandmann', 'Sandmann')}: Der erste Brief ist eine große Rückblende in Nathanaels Kindheit.</p></div>` },
      { titel: 'Raum', html: `<p>Räume sind nie nur Kulisse: <strong>Handlungsraum</strong> (wo etwas geschieht), <strong>Stimmungsraum</strong> (Atmosphäre, Spiegel des Inneren), <strong>symbolischer Raum</strong> (Bedeutung, Gegensätze wie oben/unten, innen/außen).</p>
<div class="apply"><p><strong>Anwendung:</strong> Wärterhäuschen gegen Wohnhaus (${w('bahnwaerter-thiel', 'Thiel')}), Venedig als Stadt von Schönheit und Fäulnis (${w('tod-in-venedig', 'Tod in Venedig')}), das Haus am See als Gedächtnisort (${w('heimsuchung', 'Heimsuchung')}), der Ratsturm im ${w('sandmann', 'Sandmann')} (Höhe = Wahn und Absturz).</p></div>` },
      { titel: 'Rahmen, Multiperspektivität, unzuverlässiges Erzählen', html: `<ul>
<li><strong>Rahmen- und Binnenerzählung</strong>: Eine Erzählung wird in eine andere eingebettet (z. B. Storms „Schimmelreiter“ mit mehreren Rahmen). Fachbegriffe: Die Binnenerzählung ist <em>metadiegetisch</em>; ihr Erzähler ist eine Figur der Rahmenhandlung und damit <em>intradiegetisch</em>; der Rahmenerzähler ist <em>extradiegetisch</em> (siehe Erzählform).</li>
<li><strong>Multiperspektivität</strong>: Dasselbe Geschehen wird aus mehreren Sichten erzählt – der Leser muss vergleichen.</li>
<li><strong>Unzuverlässiges Erzählen</strong>: Der Erzähler (oder eine Erzählfigur) ist nicht vertrauenswürdig – etwa weil er sich irrt, lügt oder wahnhaft wahrnimmt.</li>
</ul>
<div class="apply"><p><strong>Anwendung:</strong> Im ${w('sandmann', 'Sandmann')} widersprechen sich Nathanaels und Claras Briefe; Nathanaels Erinnerung kann verzerrt sein. ${w('heimsuchung', 'Heimsuchung')} erzählt ein Haus aus vielen Lebensperspektiven.</p></div>` },
      { titel: 'Epische Gattungen', html: `<div class="table-wrap"><table class="table"><thead><tr><th>Gattung</th><th>Merkmale</th><th>Beispiele</th></tr></thead><tbody>
<tr><td><strong>Roman</strong></td><td>Umfangreich, viele Figuren und Handlungsstränge; Unterarten: Bildungs-, Gesellschafts-, Brief-, Zeit-, historischer Roman</td><td>„Heimsuchung“, „Effi Briest“</td></tr>
<tr><td><strong>Novelle</strong></td><td>Goethe: „eine sich ereignete unerhörte Begebenheit“; straffe Handlung, Wendepunkt, Dingsymbol (Heyses „Falkentheorie“), Leitmotive, oft Rahmen; Storm: „Schwester des Dramas“</td><td>„Der Tod in Venedig“, „Bahnwärter Thiel“, „Der Schimmelreiter“</td></tr>
<tr><td><strong>Erzählung</strong></td><td>Mittellanger Prosatext ohne strenge Gattungsmerkmale</td><td>„Der Sandmann“ (Nachtstück)</td></tr>
<tr><td><strong>Kurzgeschichte</strong></td><td>Unvermittelter Anfang, offener Schluss, Alltagsausschnitt, Wendepunkt, knappe Sprache</td><td>Borchert „Das Brot“</td></tr>
<tr><td><strong>Märchen / Kunstmärchen</strong></td><td>Wunderbares, Formeln („Es war einmal“), Gut-Böse-Schema; Kunstmärchen: von einem Autor erfunden, oft vieldeutig</td><td>Grimm; Hoffmann „Der goldne Topf“; Antimärchen in „Woyzeck“</td></tr>
<tr><td><strong>Fabel / Parabel</strong></td><td>Lehrhafte Kurzform; Fabel mit Tieren und Moral, Parabel mit Bild- und Sachebene</td><td>Lessing, Gellert; Kafka</td></tr>
</tbody></table></div>` },
      { titel: 'Checkliste: einen Erzähltext analysieren', html: `<ol>
<li>Einordnung: Autor, Titel, Jahr, Gattung, Epoche; Stellung des Auszugs im Ganzen.</li>
<li>Inhalt und Aufbau des Auszugs (Sinnabschnitte, Wendepunkte).</li>
<li>Erzähler: Form, Verhalten, Perspektive, Haltung – mit Belegen.</li>
<li>Darstellung von Rede/Gedanken; Zeitgestaltung; Raum.</li>
<li>Figuren: Verhalten, Beziehungen, Entwicklung.</li>
<li>Sprache: Satzbau, Wortwahl, Bilder, Leitmotive – immer mit Wirkung.</li>
<li>Deutung: Was zeigt der Auszug über Thema, Figur, Epoche?</li>
</ol>` }
    ],
    quellen: [
      { titel: 'Franz K. Stanzel: Theorie des Erzählens (1979) – Standardwerk' },
      { titel: 'Gérard Genette: Die Erzählung (dt. 1994) – Standardwerk' },
      { titel: 'Matías Martínez / Michael Scheffel: Einführung in die Erzähltheorie (1999 u. ö.)' },
      { titel: 'Johann Peter Eckermann: Gespräche mit Goethe, 29. Januar 1827 (Novellendefinition; Wikisource-Suche)', url: 'https://de.wikisource.org/w/index.php?search=Eckermann+Gespr%C3%A4che+mit+Goethe' }
    ]
  },

  dramentheorie: {
    titel: 'Dramentheorie',
    eyebrow: 'Werkzeugkasten',
    intro: 'Von Aristoteles bis Brecht: die wichtigsten Modelle, um Dramen und Dramenszenen zu beschreiben – angewandt auf „Faust“, „Maria Stuart“, „Der zerbrochne Krug“, „Woyzeck“ und „Die Dreigroschenoper“.',
    abschnitte: [
      { titel: 'Grundbegriffe', html: `<ul>
<li><strong>Haupttext</strong> (Figurenrede) und <strong>Nebentext</strong> (Regieanweisungen, Personenverzeichnis, Titel).</li>
<li><strong>Akt/Aufzug</strong> und <strong>Szene/Auftritt</strong> (ein neuer Auftritt beginnt meist, wenn eine Figur kommt oder geht).</li>
<li><strong>Dialog</strong>, <strong>Monolog</strong> (Reflexions-, Konflikt-, Entscheidungsmonolog), <strong>Beiseitesprechen</strong>, <strong>Stichomythie</strong>, <strong>Antilabe</strong>.</li>
<li><strong>Teichoskopie</strong> (Mauerschau: gleichzeitiges Geschehen wird beschrieben) und <strong>Botenbericht</strong> (vergangenes Geschehen wird berichtet).</li>
<li><strong>Exposition</strong>: Einführung in Figuren, Ort, Zeit, Vorgeschichte und Konflikt.</li>
<li><strong>Figurenkonstellation</strong> (Beziehungsgefüge aller Figuren) und <strong>Figurenkonfiguration</strong> (wer ist in einer Szene gleichzeitig auf der Bühne).</li>
</ul>` },
      { titel: 'Aristoteles: Poetik', html: `<p>In seiner „Poetik“ (um 335 v. Chr.) beschreibt Aristoteles die Tragödie als <strong>Nachahmung (Mimesis)</strong> einer ernsten, abgeschlossenen Handlung. Sie soll durch <strong>Jammer und Schaudern</strong> (Eleos und Phobos, oft mit „Mitleid und Furcht“ übersetzt) eine <strong>Katharsis</strong> (Reinigung) bewirken. Wichtig sind die <strong>Einheit der Handlung</strong>, der Umschlag (<strong>Peripetie</strong>) und die Wiedererkennung (<strong>Anagnorisis</strong>). Der tragische Held scheitert an einem Fehler oder einer Verfehlung (<strong>Hamartia</strong>), ist also weder ganz gut noch ganz schlecht.</p>
<div class="apply"><p><strong>Anwendung:</strong> Maria Stuart ist weder ganz schuldig noch unschuldig; III,4 ist die Peripetie. Im ${w('der-zerbrochne-krug', 'Krug')} wird die Wiedererkennung des Täters komisch umgekehrt: Der Richter ist der Täter (vgl. „König Ödipus“).</p></div>` },
      { titel: 'Drei Einheiten, Ständeklausel, Lessing', html: `<ul>
<li><strong>Drei Einheiten</strong> von Ort, Zeit und Handlung: von der französischen Klassik und von Gottsched als feste Regel gefordert (Aristoteles verlangt nur die Einheit der Handlung).</li>
<li><strong>Ständeklausel</strong> (Barock, Opitz): Tragödie für hohe Stände, Komödie für niedere. Dahinter steht die Vorstellung der <strong>Fallhöhe</strong>.</li>
<li><strong>Lessing</strong> durchbricht die Ständeklausel mit dem <strong>bürgerlichen Trauerspiel</strong> und deutet Aristoteles neu: Ziel ist <strong>Mitleid</strong>; der Zuschauer soll mit Figuren „von gleichem Schrot und Korn“ mitfühlen („Hamburgische Dramaturgie“, 1767–1769).</li>
<li><strong>Schiller</strong>: „Die Schaubühne als eine moralische Anstalt betrachtet“ (1784); später das <strong>Erhabene</strong> – der Mensch beweist im Leiden seine moralische Freiheit.</li>
<li><strong>Hauptmann, „Die Ratten“</strong> (1911): Im Streit zwischen dem Theaterdirektor Hassenreuter (klassizistisch, Schiller-Pathos) und dem Studenten Spitta (naturalistisch) wird die Ständeklausel selbst zum Thema – Spitta verlangt, dass auch einfache Leute auf der Bühne tragisch sein können: „Vor der Kunst wie vor dem Gesetz sind alle Menschen gleich, Herr Direktor.“ (3. Akt; <a href="#/referate/ratten">Referat</a>).</li>
</ul>` },
      { titel: 'Freytags Pyramide (1863)', html: `<p>Gustav Freytag („Die Technik des Dramas“) beschreibt das klassische Fünf-Akt-Drama als Pyramide:</p>
<ol>
<li><strong>Exposition</strong> (mit erregendem Moment)</li>
<li><strong>Steigende Handlung</strong></li>
<li><strong>Höhepunkt / Peripetie</strong></li>
<li><strong>Fallende Handlung</strong> mit <strong>retardierendem Moment</strong> (Verzögerung, letzte Hoffnung)</li>
<li><strong>Katastrophe</strong></li>
</ol>
<div class="apply"><p><strong>Anwendung auf ${w('maria-stuart', 'Maria Stuart')}:</strong> I Exposition (Urteil, Mortimer) – II Steigerung (Hof, Intrigen) – III,4 Höhepunkt (Begegnung der Königinnen) – IV fallende Handlung (Anschlag, Mortimers Tod, Talbots Bitte als Retardation) – V Katastrophe (Hinrichtung).</p></div>` },
      { titel: 'Geschlossenes und offenes Drama', html: `<p>Nach Volker Klotz („Geschlossene und offene Form im Drama“, 1960):</p>
<div class="table-wrap"><table class="table"><thead><tr><th>Merkmal</th><th>geschlossene Form</th><th>offene Form</th></tr></thead><tbody>
<tr><td>Handlung</td><td>eine Haupthandlung, kausal, lückenlos</td><td>mehrere Stränge, Episoden, lose verknüpft</td></tr>
<tr><td>Zeit</td><td>kurze, zusammenhängende Spanne</td><td>lange Zeiträume, Sprünge</td></tr>
<tr><td>Ort</td><td>wenige, oft nur einer</td><td>viele wechselnde Orte</td></tr>
<tr><td>Figuren</td><td>wenige, oft hoher Stand, symmetrische Konstellation</td><td>viele, alle Schichten, Einzelne gegen die Welt</td></tr>
<tr><td>Sprache</td><td>einheitlich, Vers, gehoben</td><td>Prosa, Dialekt, Soziolekt, individuell</td></tr>
<tr><td>Aufbau</td><td>Akte, Pyramide</td><td>Szenen/Stationen, relativ selbstständig</td></tr>
<tr><td>Schluss</td><td>Lösung oder Katastrophe</td><td>offen</td></tr>
</tbody></table></div>
<div class="apply"><p><strong>Anwendung:</strong> geschlossen: ${w('maria-stuart', 'Maria Stuart')}, ${w('der-zerbrochne-krug', 'Der zerbrochne Krug')}; offen: ${w('woyzeck', 'Woyzeck')}; Mischform: ${w('faust', 'Faust I')}; eigenes Modell: ${w('dreigroschenoper', 'Dreigroschenoper')} (episch).</p></div>` },
      { titel: 'Analytisches Drama und Zieldrama', html: `<p>Im <strong>Zieldrama</strong> (synthetisch) entwickelt sich die Handlung vor den Augen des Publikums auf ein Ziel hin. Im <strong>analytischen Drama</strong> ist das entscheidende Ereignis schon geschehen; das Stück enthüllt es nach und nach (Muster: Sophokles, „König Ödipus“). Viele Dramen mischen beides.</p>
<div class="apply"><p><strong>Anwendung:</strong> ${w('der-zerbrochne-krug', 'Der zerbrochne Krug')} ist ein analytisches Drama: Die Tat geschah in der Nacht, die Verhandlung deckt sie auf.</p></div>` },
      { titel: 'Tragödie, Komödie, Tragikomödie', html: `<ul>
<li><strong>Tragödie</strong>: unausweichlicher Konflikt, Untergang des Helden.</li>
<li><strong>Komödie/Lustspiel</strong>: Konflikte werden komisch gelöst; Typen, Situations- und Sprachkomik; oft Kritik durch Lachen.</li>
<li><strong>Tragikomödie, Groteske</strong>: Komisches und Schreckliches verbinden sich (Dürrenmatt: Die Welt sei für die Tragödie zu unübersichtlich geworden).</li>
</ul>
<div class="apply"><p><strong>Anwendung:</strong> Der ${w('der-zerbrochne-krug', 'Krug')} ist ein Lustspiel mit ernsten Abgründen; die ${w('dreigroschenoper', 'Dreigroschenoper')} parodiert Oper und Happy End.</p></div>` },
      { titel: 'Brecht: Episches Theater', html: `<p>Brecht wollte ein Theater für das „wissenschaftliche Zeitalter“: Der Zuschauer soll nicht mitfühlen und sich einfühlen, sondern <strong>beobachten, urteilen und die Welt als veränderbar erkennen</strong>. In den Anmerkungen zur Oper „Aufstieg und Fall der Stadt Mahagonny“ (1930) stellt er die dramatische und die epische Form gegenüber (verkürzt):</p>
<div class="table-wrap"><table class="table"><thead><tr><th>Dramatische Form</th><th>Epische Form</th></tr></thead><tbody>
<tr><td>handelnd, verwickelt den Zuschauer in die Bühnenaktion</td><td>erzählend, macht den Zuschauer zum Betrachter</td></tr>
<tr><td>verbraucht seine Aktivität, ermöglicht Gefühle</td><td>weckt seine Aktivität, erzwingt Entscheidungen</td></tr>
<tr><td>Spannung auf den Ausgang</td><td>Spannung auf den Gang</td></tr>
<tr><td>der Mensch als bekannt vorausgesetzt, unveränderlich</td><td>der Mensch als Gegenstand der Untersuchung, veränderlich und verändernd</td></tr>
<tr><td>Gefühl</td><td>Ratio</td></tr>
</tbody></table></div>
<p><strong>Verfremdungseffekt (V-Effekt)</strong>: Vertrautes wird fremd gemacht, damit man es neu sieht. Mittel: Songs, die die Handlung unterbrechen; Schrifttafeln und Projektionen; Figuren sprechen das Publikum an oder treten aus der Rolle; Vorwegnahme des Ausgangs; Historisierung; sichtbare Bühnentechnik; ein Spiel, das die Figur „zeigt“ statt sich in sie zu verwandeln.</p>
<div class="apply"><p><strong>Anwendung:</strong> ${w('dreigroschenoper', 'Dreigroschenoper')}: Moritat nimmt vorweg, Songs kommentieren, Peachum spricht das Publikum an, der reitende Bote parodiert das Happy End.</p></div>` },
      { titel: 'Naturalistisches Drama', html: `<p>Genaue, oft seitenlange <strong>Regieanweisungen</strong> beschreiben Milieu und Figuren; <strong>Dialekt</strong> und Umgangssprache, Pausen und Satzabbrüche (<strong>Sekundenstil</strong>); kein Held, sondern Menschen, die von Vererbung und Umwelt bestimmt sind; oft offenes Ende. Beispiele: Hauptmann „Vor Sonnenaufgang“, „Die Weber“ (siehe Referate).</p>` },
      { titel: 'Checkliste: eine Dramenszene analysieren', html: `<ol>
<li>Einordnung: Autor, Titel, Jahr, Gattung, Epoche; Stellung der Szene im Drama (Vorher/Nachher).</li>
<li>Situation: Ort, Zeit, anwesende Figuren, Ausgangslage, Gesprächsanlass.</li>
<li>Verlauf: Phasen des Gesprächs, Wendepunkte, Ergebnis.</li>
<li>Gesprächsverhalten: Redeanteile, Strategien (Bitten, Drohen, Ausweichen), Machtverhältnis, Körpersprache im Nebentext.</li>
<li>Sprache und Form: Vers/Prosa, Stilmittel, Antilaben, Monolog/Dialog – mit Wirkung.</li>
<li>Funktion der Szene für das ganze Drama (Exposition, Höhepunkt, Retardation …).</li>
<li>Deutung und ggf. Epochenbezug.</li>
</ol>` }
    ],
    quellen: [
      { titel: 'Aristoteles: Poetik (z. B. Reclam-Ausgabe)' },
      { titel: 'Gotthold Ephraim Lessing: Hamburgische Dramaturgie (1767–1769; Project Gutenberg-Suche)', url: 'https://www.gutenberg.org/ebooks/search/?query=Hamburgische+Dramaturgie' },
      { titel: 'Gustav Freytag: Die Technik des Dramas (1863; Project Gutenberg-Suche)', url: 'https://www.gutenberg.org/ebooks/search/?query=Freytag+Technik+des+Dramas' },
      { titel: 'Volker Klotz: Geschlossene und offene Form im Drama (1960)' },
      { titel: 'Bertolt Brecht: Anmerkungen zur Oper „Aufstieg und Fall der Stadt Mahagonny“ (1930), in: Schriften zum Theater' }
    ]
  },

  lyrik: {
    titel: 'Lyrik-Werkzeug',
    eyebrow: 'Werkzeugkasten',
    intro: 'Metrum, Reim, Kadenz und Gedichtformen – und wie du sie für die Deutung nutzt. Gedichte zu jeder Epoche findest du im <a href="#/zeitstrahl">Zeitstrahl</a>.',
    abschnitte: [
      { titel: 'Sprechsituation', html: `<p>Im Gedicht spricht ein <strong>lyrisches Ich</strong> (oder ein lyrischer Sprecher) – nicht der Autor. Frage: Wer spricht zu wem, in welcher Situation, mit welcher Haltung? Es gibt auch Rollengedichte (ein Ich spricht als bestimmte Figur) und Gedichte ohne erkennbares Ich.</p>` },
      { titel: 'Vers, Strophe, Reim', html: `<ul>
<li><strong>Reimschema</strong>: Paarreim (aabb), Kreuzreim (abab), umarmender Reim (abba), Schweifreim (aabccb), Haufenreim (aaaa); <strong>Binnenreim</strong> (im Vers), <strong>unreiner Reim</strong> (Klang nur ähnlich), <strong>Waise</strong> (reimloser Vers in gereimter Umgebung).</li>
<li><strong>Kadenz</strong> (Versschluss): <strong>männlich/stumpf</strong> (letzte Silbe betont: „Herz“) – <strong>weiblich/klingend</strong> (letzte Silbe unbetont: „Pferde“).</li>
<li><strong>Zeilenstil</strong> (Satz endet mit dem Vers) – <strong>Enjambement</strong> (Satz läuft weiter).</li>
</ul>` },
      { titel: 'Metrum (Versmaß)', html: `<div class="table-wrap"><table class="table"><thead><tr><th>Versfuß</th><th>Schema</th><th>Beispielwort</th><th>Wirkung (Tendenz)</th></tr></thead><tbody>
<tr><td><strong>Jambus</strong></td><td>x X</td><td>Ge<strong>dicht</strong></td><td>steigend, lebendig, natürlich</td></tr>
<tr><td><strong>Trochäus</strong></td><td>X x</td><td><strong>Son</strong>ne</td><td>fallend, liedhaft, eindringlich</td></tr>
<tr><td><strong>Daktylus</strong></td><td>X x x</td><td><strong>Kö</strong>nigin</td><td>fließend, schwungvoll, feierlich</td></tr>
<tr><td><strong>Anapäst</strong></td><td>x x X</td><td>Para<strong>dies</strong></td><td>drängend, beschleunigend</td></tr>
</tbody></table></div>
<p><strong>Beispiel:</strong> „Es <strong>schlug</strong> mein <strong>Herz</strong>, ge<strong>schwind</strong> zu <strong>Pfer</strong>de!“ – vierhebiger Jambus mit weiblicher Kadenz (Goethe, „Willkommen und Abschied“).</p>
<p>Wichtig: Nicht nur das Schema bestimmen, sondern <strong>Abweichungen</strong> beachten (Tonbeugungen, zusätzliche Silben) – sie markieren oft wichtige Stellen.</p>` },
      { titel: 'Wichtige Versformen', html: `<ul>
<li><strong>Blankvers</strong>: fünfhebiger Jambus ohne Reim – klassisches Drama (Schiller, Kleist).</li>
<li><strong>Alexandriner</strong>: sechshebiger Jambus mit Zäsur nach der dritten Hebung – Barock (Antithetik).</li>
<li><strong>Knittelvers</strong>: vierhebig, Paarreim, freie Senkungen – Faust, Volksdichtung.</li>
<li><strong>Hexameter / Pentameter</strong>: antike Langverse; zusammen bilden sie das <strong>Distichon</strong> (Schiller, „Nänie“).</li>
<li><strong>Freie Rhythmen</strong>: rhythmisch, aber ohne festes Metrum und Reim (Goethe, „Prometheus“).</li>
<li><strong>Freie Verse</strong>: moderne Lyrik ohne Metrum und Reim.</li>
</ul>` },
      { titel: 'Gedichtformen', html: `<div class="table-wrap"><table class="table"><thead><tr><th>Form</th><th>Merkmale</th><th>Typische Epoche</th></tr></thead><tbody>
<tr><td><strong>Sonett</strong></td><td>14 Verse: 2 Quartette, 2 Terzette; These – Antithese – Synthese</td><td>Barock, Expressionismus, Gegenwart</td></tr>
<tr><td><strong>Lied / Volksliedstrophe</strong></td><td>meist vier Verse, Kreuzreim, drei Hebungen, schlicht</td><td>Romantik</td></tr>
<tr><td><strong>Ode, Hymne</strong></td><td>feierlich, erhaben; Hymne oft in freien Rhythmen</td><td>Empfindsamkeit, Sturm und Drang</td></tr>
<tr><td><strong>Elegie</strong></td><td>Klagegedicht, oft in Distichen</td><td>Klassik</td></tr>
<tr><td><strong>Ballade</strong></td><td>erzählendes Gedicht mit dramatischen Elementen (Dialog, Spannung)</td><td>Sturm und Drang, Klassik, Realismus</td></tr>
<tr><td><strong>Dinggedicht</strong></td><td>ein Gegenstand wird genau betrachtet und wird zum Symbol</td><td>Realismus, Jahrhundertwende (Rilke)</td></tr>
<tr><td><strong>Konkrete Poesie</strong></td><td>Sprache als Material, Anordnung auf der Fläche</td><td>1950er–1970er</td></tr>
</tbody></table></div>` },
      { titel: 'Bildlichkeit', html: `<p>Metapher, Vergleich, Personifikation, Symbol, Chiffre, Synästhesie – siehe <a href="#/stilmittel">Stilmittel</a>. Achte auf <strong>Bildfelder</strong> (z. B. Licht – Dunkel, Natur – Stadt) und wie sie sich im Gedicht entwickeln.</p>` },
      { titel: 'Gedichtvergleich', html: `<ol>
<li>Beide Gedichte einzeln kurz einordnen (Autor, Titel, Jahr, Epoche, Thema).</li>
<li>Vergleichsaspekte festlegen: Thema/Motiv, Sprechsituation, Aufbau, Bildlichkeit, Form (Metrum, Reim), Haltung, Epochenbezug.</li>
<li>Aspektweise vergleichen (nicht erst Gedicht A komplett, dann B): „Während …, …“, „Ebenso wie …“, „Im Unterschied zu …“.</li>
<li>Ergebnis: Gemeinsamkeiten und Unterschiede gewichten, Epochen erklären die Unterschiede.</li>
</ol>` },
      { titel: 'Epochen an Gedichten erkennen (Faustregeln)', html: `<ul>
<li><strong>Barock</strong>: Sonett, Alexandriner, Vanitas, Antithesen.</li>
<li><strong>Sturm und Drang</strong>: Ausrufe, freie Rhythmen, Natur und Leidenschaft, Genie.</li>
<li><strong>Klassik</strong>: Maß, Sentenzen, antike Formen, Humanität.</li>
<li><strong>Romantik</strong>: Nacht, Mond, Sehnsucht, Wandern, Volksliedstrophe, Konjunktiv der Sehnsucht.</li>
<li><strong>Vormärz</strong>: politische Botschaft, Ironie, Refrain zum Mitsingen.</li>
<li><strong>Realismus</strong>: Heimat, Detail, Ballade, Dinggedicht, Verklärung.</li>
<li><strong>Naturalismus</strong>: Großstadtelend, Mietskaserne, Alltagssprache.</li>
<li><strong>Jahrhundertwende</strong>: Stimmung, Klang, Symbol, Dinggedicht, Ästhetizismus.</li>
<li><strong>Expressionismus</strong>: Großstadt, Krieg, Weltende, Reihungsstil, grelle Farben.</li>
<li><strong>Neue Sachlichkeit</strong>: nüchterner Ton, Ironie, Alltag.</li>
<li><strong>Nachkrieg</strong>: karge Sprache, Bestandsaufnahme, Chiffren (Celan).</li>
</ul>` }
    ]
  },

  methode: {
    titel: 'Interpretieren im Abitur',
    eyebrow: 'Methode',
    intro: 'So baust du eine Interpretation auf, verstehst die Operatoren und zitierst richtig. Danach: <a href="#/training">Aufgaben üben</a>.',
    abschnitte: [
      { titel: 'Aufbau einer Interpretation', html: `<h4>Einleitung</h4>
<ul><li>Autor, Titel, Erscheinungsjahr, Textsorte/Gattung, Epoche</li><li>Thema in einem Satz</li><li>bei Auszügen: Einordnung in den Handlungszusammenhang (kurz!)</li><li><strong>Deutungshypothese</strong>: deine zentrale These, die der Hauptteil prüft</li></ul>
<h4>Hauptteil</h4>
<ul><li>kurze Inhaltswiedergabe / Gliederung des Auszugs (nicht nacherzählen!)</li><li>Analyse: <strong>linear</strong> (Abschnitt für Abschnitt) oder <strong>aspektorientiert</strong> (z. B. Figuren, Sprache, Erzählweise) – Inhalt, Form und Sprache immer verknüpfen</li><li>Deutung: Was bedeutet das Beobachtete?</li><li>Zusatzauftrag (Vergleich, Erörterung) als eigener, klar markierter Teil</li></ul>
<h4>Schluss</h4>
<ul><li>Ergebnis bündeln, Deutungshypothese bestätigen oder differenzieren</li><li>Einordnung (Epoche, Gesamtwerk) oder begründete eigene Wertung</li></ul>` },
      { titel: 'Die Grundregel: Beobachtung – Beleg – Deutung', html: `<div class="def"><p>Jede Analyse-Aussage braucht drei Teile: <strong>Was</strong> fällt auf (Stilmittel, Erzählweise …)? <strong>Wo</strong> steht es (Zitat mit Angabe)? <strong>Was bewirkt</strong> es im Zusammenhang?</p></div>
<p><strong>Schwach:</strong> „In V. 354 ist eine Aufzählung.“<br><strong>Stark:</strong> „Die Akkumulation der vier Fakultäten (V. 354–356) unterstreicht Fausts umfassende Bildung; das eingeschobene ‚leider‘ wertet jedoch die Theologie ab und verleiht der Aufzählung einen bitter-ironischen Ton.“</p>` },
      { titel: 'Operatoren', html: `<p>Operatoren sagen, was du tun sollst. Sie sind drei Anforderungsbereichen (AB) zugeordnet:</p>
<div class="table-wrap"><table class="table"><thead><tr><th>Operator</th><th>Bedeutung</th><th>AB</th></tr></thead><tbody>
<tr><td>nennen, wiedergeben, zusammenfassen</td><td>Informationen knapp und sachlich, ohne Deutung</td><td>I</td></tr>
<tr><td>beschreiben, darstellen</td><td>Sachverhalte strukturiert und genau wiedergeben</td><td>I–II</td></tr>
<tr><td>analysieren, untersuchen</td><td>Text unter bestimmten Aspekten erschließen, Ergebnisse darlegen</td><td>II</td></tr>
<tr><td>erläutern, erklären</td><td>Zusammenhänge verständlich machen, mit Beispielen/Belegen</td><td>II</td></tr>
<tr><td>einordnen</td><td>in einen Zusammenhang (Werk, Epoche) stellen</td><td>II</td></tr>
<tr><td>charakterisieren</td><td>Figur mit Merkmalen, Verhalten, Entwicklung darstellen und deuten</td><td>II</td></tr>
<tr><td>vergleichen</td><td>Gemeinsamkeiten und Unterschiede kriterienorientiert herausarbeiten und gewichten</td><td>II–III</td></tr>
<tr><td>interpretieren</td><td>Inhalt, Aufbau, Sprache analysieren und zu einer begründeten Gesamtdeutung führen</td><td>III</td></tr>
<tr><td>erörtern</td><td>Problem durch Pro und Contra abwägen, begründetes Urteil</td><td>III</td></tr>
<tr><td>beurteilen, bewerten, Stellung nehmen</td><td>begründetes eigenes Urteil mit Kriterien</td><td>III</td></tr>
<tr><td>gestalten, verfassen</td><td>eigenen Text nach Vorgaben schreiben (z. B. informierender Text)</td><td>III</td></tr>
</tbody></table></div>
<p class="small muted">Formulierungen nach den Operatorenlisten der Bundesländer (KMK-Bildungsstandards); maßgeblich ist die Liste deiner Schule bzw. des ISB.</p>` },
      { titel: 'Richtig zitieren', html: `<ul>
<li><strong>Wörtlich</strong> in Anführungszeichen, mit Stellenangabe: Vers (V. 354), Zeile (Z. 12), Seite (S. 23), Drama: Akt und Szene (III,4) bzw. Auftritt.</li>
<li><strong>Auslassungen</strong> mit […], <strong>Ergänzungen/Anpassungen</strong> in eckigen Klammern: „[Er] bin so klug als wie zuvor“.</li>
<li><strong>Zitat im Zitat</strong> mit einfachen Anführungszeichen ‚…‘.</li>
<li>Versgrenzen mit Schrägstrich: „Zwei Seelen wohnen, ach! in meiner Brust, / Die eine will sich von der andern trennen“.</li>
<li><strong>Einbauen</strong> statt anhängen: Fausts Wunsch, zu erkennen, „was die Welt / Im Innersten zusammenhält“ (V. 382 f.), zeigt …</li>
<li><strong>Indirekt</strong> (sinngemäß) mit „vgl.“: (vgl. V. 354 ff.).</li>
</ul>` },
      { titel: 'Formulierungshilfen', html: `<ul>
<li><strong>Wirkung:</strong> unterstreicht, verdeutlicht, hebt hervor, veranschaulicht, verstärkt, kontrastiert, deutet voraus, verweist auf, lässt erkennen.</li>
<li><strong>Deutung vorsichtig:</strong> Dies lässt sich so verstehen, dass … · Naheliegend ist die Deutung … · Zugleich kann man … lesen als …</li>
<li><strong>Überleitung:</strong> Dieser Eindruck verstärkt sich, wenn … · Im Gegensatz dazu … · Damit bereitet die Szene … vor.</li>
<li><strong>Vergleich:</strong> Während in A …, zeigt B … · Beide Texte … · Ein wesentlicher Unterschied liegt in …</li>
<li><strong>Epochenbezug:</strong> Typisch für … ist … · Damit weist der Text über … hinaus.</li>
</ul>` },
      { titel: 'Vorgehen in der Prüfung', html: `<ol>
<li>Aufgaben lesen, Operatoren markieren; Wahl treffen.</li>
<li>Text zweimal lesen: erst Überblick, dann mit Markierungen (Sinnabschnitte, Auffälliges, Schlüsselwörter).</li>
<li>Deutungshypothese formulieren, Stichpunkt-Gliederung anlegen.</li>
<li>Schreiben: Einleitung, Hauptteil mit Belegen, Zusatzauftrag, Schluss.</li>
<li>Am Ende Zeit zum Korrekturlesen einplanen (Zitate, Zeichensetzung, Tempus: Präsens!).</li>
</ol>` },
      { titel: 'Typische Fehler', html: `<ul>
<li>Nacherzählen statt deuten.</li>
<li>Stilmittel aufzählen ohne Wirkung.</li>
<li>Autor und Erzähler/lyrisches Ich verwechseln.</li>
<li>Epochenwissen „abladen“, ohne Bezug zum Text.</li>
<li>Zitate ohne Stellenangabe oder aus dem Zusammenhang gerissen.</li>
<li>Den Zusatzauftrag zu knapp behandeln – er zählt oft viel.</li>
<li>Präteritum statt Präsens in der Analyse.</li>
</ul>` }
    ],
    quellen: [
      { titel: 'ISB Bayern: Checkliste Abitur Deutsch für Abiturientinnen und Abiturienten (PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Faecher/Deutsch/Abitur/1609_Checkliste_Abitur_Deutsch_Abiturienten.pdf' },
      { titel: 'ISB Bayern: Illustrierende Prüfungsaufgaben Deutsch – Beispiele, Erläuterungen, Hinweise (PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/IlluPA/D/IlluPA_Deutsch_Beispiele_Erlaeuterungen_Hinweise.pdf' },
      { titel: 'IQB: Gemeinsame Abituraufgabenpools der Länder', url: 'https://www.iqb.hu-berlin.de/abitur/' }
    ]
  },

  abiformen,

  abitur: {
    titel: 'Deutsch-Abitur in Bayern',
    eyebrow: 'Rahmen',
    intro: 'Was im schriftlichen Deutsch-Abitur verlangt wird und welche Vorgaben für deine Lektüren gelten. Stand der Recherche: Oktober 2026 – <strong>bitte immer mit deiner Lehrkraft und deutschabitur.bayern.de abgleichen</strong>, Vorgaben können sich ändern.',
    abschnitte: [
      { titel: 'Aufbau der schriftlichen Prüfung (ab 2026)', html: `<ul>
<li>Es stehen <strong>vier Aufgaben</strong> zur Wahl: <strong>zwei</strong> zum <strong>Interpretieren literarischer Texte</strong>, <strong>eine</strong> zum <strong>Analysieren/Informieren</strong> (z. B. materialgestütztes Verfassen eines informierenden Textes wie Vortragstext, Broschürenbeitrag, Programmheft) und <strong>eine</strong> zum <strong>Argumentieren</strong>.</li>
<li>Welche <strong>Gattung</strong> (Lyrik, Drama, Epik) bei den Interpretationsaufgaben kommt, wird <strong>nicht angekündigt</strong>.</li>
<li>Die Interpretationsaufgaben haben in der Regel einen <strong>Zusatzauftrag</strong>: vor allem Vergleich mit einer <strong>ländergemeinsamen Lektüre</strong>, mit einem beigefügten <strong>Zweittext</strong> (oft ein Gedicht), ein <strong>Motivvergleich</strong> oder eine <strong>poetologische Aufgabe</strong>.</li>
<li>Argumentieren: textbezogen (ohne Adressaten) oder materialgestützt (adressaten- und situationsbezogen). Aufbau und Übungen zu allen diesen Formen: <a href="#/abiformen">Weitere Abi-Formen</a>.</li>
<li>Ein großer Teil der Aufgaben stammt aus dem <strong>gemeinsamen Aufgabenpool der Länder</strong> (IQB) und wird mit den Lösungshinweisen unverändert übernommen.</li>
</ul>` },
      { titel: 'Ländergemeinsame Lektüren 2026–2028', html: `<div class="def"><p>Für die Abiturprüfungen <strong>2026, 2027 und 2028</strong> gelten – auch in Bayern – als ländergemeinsame Lektüren:</p><ul><li><strong>Heinrich von Kleist: „Der zerbrochne Krug“</strong> (Dramatik) – ${w('der-zerbrochne-krug', 'zur Werkseite')}</li><li><strong>Jenny Erpenbeck: „Heimsuchung“</strong> (Epik) – ${w('heimsuchung', 'zur Werkseite')}</li></ul></div>
<p>Diese beiden Werke werden in Aufgaben als bekannt vorausgesetzt (z. B. „Vergleichen Sie … mit …“). Die Lektüren für die Jahre ab 2029 sollen voraussichtlich 2026 bekanntgegeben werden.</p>` },
      { titel: 'Themenfelder', html: `<p>Themenfelder sind inhaltliche Schwerpunkte, die bundesweit für die gemeinsamen Aufgaben vereinbart werden und meist drei Jahre gelten:</p>
<div class="table-wrap"><table class="table"><thead><tr><th>Prüfungsjahre</th><th>Themenfeld</th><th>Passende Lektüren hier</th></tr></thead><tbody>
<tr><td>2024–2026</td><td>„Umbrüche in der deutschsprachigen Literatur um 1900“</td><td>${w('bahnwaerter-thiel', 'Bahnwärter Thiel')}, ${w('tod-in-venedig', 'Der Tod in Venedig')}; Epochen <a href="#/epoche/naturalismus">Naturalismus</a>, <a href="#/epoche/jahrhundertwende">Jahrhundertwende</a>, <a href="#/epoche/expressionismus">Expressionismus</a></td></tr>
<tr><td>2026–2027</td><td>„Sprache in politisch-gesellschaftlichen Verwendungszusammenhängen“ (Sprachreflexion)</td><td>Sprache und Macht: ${w('woyzeck', 'Woyzeck')} (Hauptmann/Doktor), ${w('der-zerbrochne-krug', 'Krug')} (Adams Lügen), ${w('dreigroschenoper', 'Dreigroschenoper')}</td></tr>
<tr><td>2027–2029</td><td>„Literatur um 1800“ (u. a. Romantik und Nachwirkung romantischer Motive bis in die Gegenwart)</td><td>${w('faust', 'Faust I')}, ${w('maria-stuart', 'Maria Stuart')}, ${w('der-zerbrochne-krug', 'Der zerbrochne Krug')}, ${w('sandmann', 'Der Sandmann')}; Epochen <a href="#/epoche/sturm-und-drang">Sturm und Drang</a>, <a href="#/epoche/klassik">Klassik</a>, <a href="#/epoche/romantik">Romantik</a></td></tr>
</tbody></table></div>
<p class="small muted">Die Zuordnung der Themenfelder zu den Jahren stammt aus den Übersichten des Kultusministeriums; die genauen Schwerpunkte stehen in den jeweiligen Schreiben (KMS) – siehe Quellen.</p>` },
      { titel: 'Was das für deine Vorbereitung heißt', html: `<ul>
<li>Die zwei ländergemeinsamen Lektüren <strong>sehr gründlich</strong> kennen (Inhalt, Figuren, Schlüsselszenen, Zitate) – sie können in jeder Interpretationsaufgabe als Vergleich auftauchen.</li>
<li>Für dein Themenfeld: Epochenmerkmale an Texten zeigen können und typische Gedichte der Epoche erkennen (siehe <a href="#/zeitstrahl">Zeitstrahl</a>).</li>
<li><strong>Motive</strong> über Werke hinweg vergleichen üben (siehe <a href="#/motive">Motive & Vergleiche</a>).</li>
<li>Erzähl- und Dramentheorie sicher anwenden; Gedichtanalyse und Gedichtvergleich trainieren.</li>
<li>Alte Prüfungsaufgaben und die Beispielaufgaben des ISB durcharbeiten.</li>
</ul>` }
    ],
    quellen: [
      { titel: 'Bayerisches Kultusministerium: Ländergemeinsame Lektüren 2026–2028 (KMS, PDF)', url: 'https://deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/KMS_Laendergemeinsame_Lektueren_2026-2028.pdf' },
      { titel: 'Bayerisches Kultusministerium: Themenfeld für die Abiturprüfungen 2027, 2028 und 2029 (KMS, PDF)', url: 'https://deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/KMS_Deutsch_Themenfeld_2027_2028_2029.pdf' },
      { titel: 'Übersicht der Themenfelder (PDF)', url: 'https://www.deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/UEbersicht_Themenfelder_PDF.pdf' },
      { titel: 'Themenfeld 2 für 2026/2027 (KMS, PDF)', url: 'https://www.deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/KMS_Deutsch_Themenfeld_2_2026_2027.pdf' },
      { titel: 'Handreichung Deutschabitur ab 2026 (PDF)', url: 'https://www.deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/Handreichung_Deutschabitur_ab_2026.pdf' },
      { titel: 'ISB: Checkliste Abitur Deutsch (Stand September 2025, PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Faecher/Deutsch/Abitur/1609_Checkliste_Abitur_Deutsch_Abiturienten.pdf' },
      { titel: 'ISB: Aufgabenbeispiele Deutschabitur (Stand Mai 2025, PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Faecher/Deutsch/Abitur/2011_Aufgabenbeispiele_Deutschabitur_Stand-Mai-2025.pdf' },
      { titel: 'IQB: Abiturprüfung – gemeinsame Aufgabenpools', url: 'https://www.iqb.hu-berlin.de/abitur/' }
    ]
  }
};
