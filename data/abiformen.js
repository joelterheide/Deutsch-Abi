// Weitere Aufgabenarten neben der Interpretation: Erörtern, Argumentieren, Informieren, Analysieren.
// Alle Übungstexte und Materialien sind selbst verfasst; Zahlen und Stimmen in den Materialien sind erfunden.
const w = (id, text) => `<a href="#/werk/${id}">${text}</a>`;
const s = (id, text) => `<a href="#/stilmittel/${id}">${text}</a>`;

const uebung = ({ titel, art, aufgabe, material, loesung }) => `<div class="card task uebung">
<p class="task__format">Übungsaufgabe · ${art}</p>
<h3 style="margin-top:.2em">${titel}</h3>
${aufgabe}
${material ? `<details class="block"><summary>Material anzeigen</summary><div class="block__body">${material}</div></details>` : ''}
<details class="block"><summary>Lösungsskizze (Erwartungshorizont)</summary><div class="block__body solution">${loesung}</div></details>
</div>`;

const fiktiv = '<p class="small muted">Übungsmaterial, selbst verfasst. Personen, Zahlen und Zitate in diesem Material sind erfunden.</p>';

export const abiformen = {
  titel: 'Weitere Abi-Formen',
  eyebrow: 'Aufgabenarten',
  intro: 'Neben der Interpretation gibt es im Abitur Aufgaben zum <strong>Argumentieren</strong> (Erörtern) und zum <strong>Analysieren/Informieren</strong>. Hier findest du jede Form mit Aufbau, Tipps und einer Übungsaufgabe samt Lösungsskizze. Zur Interpretation selbst: <a href="#/methode">Interpretieren im Abitur</a>.',
  abschnitte: [
    { titel: 'Überblick: Welche Aufgabenarten gibt es?', html: `<div class="table-wrap"><table class="table"><thead><tr><th>Aufgabenart</th><th>Du bekommst …</th><th>Du schreibst …</th></tr></thead><tbody>
<tr><td><strong>Interpretieren literarischer Texte</strong></td><td>Gedicht, Dramen- oder Prosaauszug, meist mit Zusatzauftrag (Vergleich, Erörterung)</td><td>eine Interpretation – siehe <a href="#/methode">Methode</a></td></tr>
<tr><td><strong>Analysieren pragmatischer Texte</strong></td><td>Sachtext, Rede, Kommentar, Essay</td><td>eine Analyse von Argumentation, Sprache und Absicht</td></tr>
<tr><td><strong>Textgebundene Erörterung</strong> (textbezogenes Argumentieren)</td><td>einen Sachtext mit einer Position</td><td>Analyse des Textes + eigene Erörterung der Position</td></tr>
<tr><td><strong>Dialektische Erörterung</strong></td><td>eine Streitfrage (Entscheidungsfrage)</td><td>Pro und Contra abwägen, begründetes Urteil</td></tr>
<tr><td><strong>Literarische Erörterung</strong></td><td>eine These oder Frage zu einem Werk (oft als Zusatzauftrag)</td><td>Erörterung mit Belegen aus dem Werk</td></tr>
<tr><td><strong>Materialgestütztes Argumentieren</strong></td><td>Schreibsituation + Dossier (M1, M2 …: Texte, Grafiken, Zitate)</td><td>adressatenbezogenen Kommentar, Essay, Leserbrief, Rede</td></tr>
<tr><td><strong>Materialgestütztes Informieren</strong></td><td>Schreibsituation + Dossier</td><td>informierenden Text: Programmheft-, Lexikon- oder Broschürenbeitrag, Vortrag</td></tr>
</tbody></table></div>
<div class="def"><p><strong>In Bayern ab 2026</strong> stehen vier Aufgaben zur Wahl: zwei zum Interpretieren, eine zum Analysieren/Informieren, eine zum Argumentieren (textbezogen oder materialgestützt) – Details auf der Seite <a href="#/abitur">Abitur in Bayern</a>. Eine „freie“ Erörterung ganz ohne Textgrundlage ist dort nicht als eigene Aufgabenart genannt. Das <strong>dialektische Abwägen</strong> brauchst du trotzdem in jeder Argumentationsaufgabe, in literarischen Erörterungen und in vielen Zusatzaufträgen. Maßgeblich ist, was deine Lehrkraft und das ISB vorgeben.</p></div>` },

    { titel: 'Argumentieren: das Handwerkszeug', html: `<h4>So ist ein Argument gebaut</h4>
<ol><li><strong>These</strong> (Behauptung): Was meinst du?</li><li><strong>Begründung</strong> (Argument im engeren Sinn): Warum?</li><li><strong>Beleg / Beispiel</strong>: Woran sieht man das? (Fakten, Textstelle, Erfahrung)</li><li><strong>Rückbezug / Folgerung</strong>: Was folgt daraus für die Frage?</li></ol>
<div class="apply"><p><strong>Beispiel:</strong> Klassiker sollten im Unterricht gelesen werden (These), weil sie Grundfragen behandeln, die sich bis heute stellen (Begründung). So verhandelt ${w('nathan', '„Nathan der Weise“')} das Zusammenleben verschiedener Religionen (Beispiel) – ein Thema, das in einer vielfältigen Gesellschaft hochaktuell ist. Die Lektüre schult also den Blick auf die Gegenwart (Rückbezug).</p></div>
<h4>Argumenttypen</h4>
<div class="table-wrap"><table class="table"><thead><tr><th>Typ</th><th>stützt sich auf …</th><th>Beispiel (Thema: Klassiker im Unterricht)</th></tr></thead><tbody>
<tr><td>Faktenargument</td><td>überprüfbare Tatsachen, Zahlen</td><td>„Der zerbrochne Krug“ (UA 1808) und „Heimsuchung“ (2008) sind die ländergemeinsamen Lektüren 2026–2028.</td></tr>
<tr><td>Normatives Argument</td><td>Werte und Normen</td><td>Schule soll zur Teilhabe an der gemeinsamen Kultur befähigen.</td></tr>
<tr><td>Autoritätsargument</td><td>Experten, Institutionen</td><td>Die Bildungsstandards verlangen Kenntnisse der Literaturgeschichte.</td></tr>
<tr><td>Erfahrungsargument</td><td>eigene oder allgemeine Erfahrung</td><td>Viele merken erst bei der Aufführung, wie komisch der „Krug“ ist.</td></tr>
<tr><td>Analogieargument</td><td>Vergleich mit einem ähnlichen Fall</td><td>Im Musikunterricht hört man auch Bach, nicht nur aktuelle Charts.</td></tr>
<tr><td>Kausalargument</td><td>Ursache und Folge</td><td>Wer nur leichte Texte liest, lernt nicht, mit schwierigen umzugehen.</td></tr>
<tr><td>Indirektes Argument</td><td>Entkräften der Gegenposition</td><td>Dass alte Sprache schwer ist, spricht nicht gegen Klassiker, sondern für Hilfen beim Lesen.</td></tr>
</tbody></table></div>
<h4>Scheinargumente erkennen (wichtig für Sachtextanalysen)</h4>
<ul><li><strong>Verallgemeinerung</strong>: „Alle Jugendlichen hassen …“</li><li><strong>Totschlagargument</strong>: „Das war schon immer so.“ / „Das versteht doch jeder.“</li><li><strong>Angriff auf die Person</strong> statt auf die Sache: „Das sagen nur Leute, die …“</li><li><strong>Schwarz-Weiß-Malerei</strong>: nur zwei Möglichkeiten, keine Zwischentöne</li><li><strong>Vage Autorität</strong>: „Studien zeigen …“ ohne Quelle</li><li><strong>Emotionalisierung</strong> statt Begründung: Übertreibungen, Angstbilder</li></ul>
<h4>Formulierungshilfen</h4>
<ul><li><strong>Einräumen:</strong> Zwar …, doch … · Zuzugeben ist, dass … · Auf den ersten Blick …</li><li><strong>Gewichten:</strong> Schwerer wiegt jedoch … · Entscheidend ist … · Noch wichtiger erscheint …</li><li><strong>Überleiten:</strong> Dem lässt sich entgegenhalten, dass … · Betrachtet man dagegen …</li><li><strong>Folgern:</strong> Daraus ergibt sich … · Folglich … · Insgesamt überwiegt …</li></ul>` },

    { titel: 'Dialektische Erörterung (Pro und Contra)', html: `<p>Die dialektische (kontroverse) Erörterung beantwortet eine <strong>Entscheidungsfrage</strong> („Sollte …?“, „Ist … sinnvoll?“) durch Abwägen von Pro und Contra. Bei einer <strong>Ergänzungsfrage</strong> („Welche Ursachen hat …?“, „Wie kann man …?“) erörtert man dagegen <strong>linear</strong> (steigernd): Aspekte werden nach Wichtigkeit geordnet, vom schwächsten zum stärksten.</p>
<h4>Einleitung</h4>
<ul><li>Hinführung: aktueller Anlass, Beispiel, Zitat oder Zahl</li><li>Problemfrage formulieren; wichtige Begriffe klären</li><li>kein Ergebnis vorwegnehmen</li></ul>
<h4>Hauptteil: zwei Bauformen</h4>
<div class="grid grid--2">
<div class="card"><h4 style="margin-top:0">Sanduhr-Prinzip (Blockbauweise)</h4><p>Erst die <strong>Gegenposition</strong> (Antithese): Argumente vom stärksten zum schwächsten. Dann eine Überleitung. Dann die <strong>eigene Position</strong> (These): Argumente vom schwächsten zum stärksten. Das stärkste Argument steht ganz am Ende und bleibt im Gedächtnis.</p><p class="small muted">Form: breit – schmal – schmal – breit, wie eine Sanduhr.</p></div>
<div class="card"><h4 style="margin-top:0">Pingpong-Prinzip (Reißverschluss)</h4><p>Pro und Contra wechseln sich ab; jedes Argument bezieht sich direkt auf das vorige („Dem lässt sich entgegenhalten …“). Das wirkt lebendig und zeigt echtes Abwägen. Die eigene Position bekommt das letzte Wort.</p><p class="small muted">Gut geeignet, wenn sich Argumente paarweise gegenüberstehen.</p></div>
</div>
<h4>Schluss (Synthese)</h4>
<ul><li>Ergebnis der Abwägung: begründetes eigenes Urteil</li><li>gegebenenfalls Kompromiss oder Bedingungen („ja, wenn …“)</li><li>Ausblick oder Appell – aber <strong>kein neues Argument</strong></li></ul>
${uebung({
  titel: 'Lektüre per Hörbuch oder Verfilmung?',
  art: 'Dialektische Erörterung',
  aufgabe: '<p>Sollte es im Deutschunterricht erlaubt sein, eine Pflichtlektüre statt als Buch als Hörbuch, Verfilmung oder Theateraufzeichnung zu „lesen“? Erörtern Sie diese Frage.</p>',
  loesung: `<h4>Einleitung</h4><ul><li>Hinführung: Hörbücher, Streaming und Theater-Livestreams sind heute leicht zugänglich; viele kennen Werke zuerst als Film.</li><li>Problemfrage und Begriffe: „Lesen“ als Erschließen eines Werks vs. Lesen des gedruckten Textes.</li></ul>
<h4>Contra (Sanduhr: stärkstes zuerst)</h4><ul><li>Eine Verfilmung ist schon eine <strong>Interpretation</strong> (Kürzungen, Besetzung, Schauplätze) – man lernt die Deutung anderer, nicht das Werk.</li><li>Im Abitur muss man mit dem <strong>Text</strong> arbeiten: zitieren, Sprache und Erzählweise analysieren (z. B. Erzählerkommentare im ${w('bahnwaerter-thiel', '„Bahnwärter Thiel“')}).</li><li>Konzentriertes Lesen schwieriger Texte ist eine Fähigkeit, die man trainieren muss.</li></ul>
<h4>Pro (schwächstes zuerst, stärkstes zuletzt)</h4><ul><li>Hörbücher erleichtern Menschen mit Leseschwierigkeiten den Zugang (Teilhabe).</li><li>Sie können Motivation wecken und Lust auf das Buch machen.</li><li><strong>Dramen sind für die Bühne geschrieben</strong>: Erst die Aufführung zeigt Tempo, Komik und Pausen (z. B. ${w('der-zerbrochne-krug', '„Der zerbrochne Krug“')}, ${w('dreigroschenoper', '„Die Dreigroschenoper“')} mit Songs).</li></ul>
<h4>Synthese</h4><ul><li><strong>Ergänzen ja, ersetzen nein</strong>: Hörbuch und Aufführung als Zugang und Vergleich, die Textarbeit bleibt Grundlage.</li><li>Besonders sinnvoll: Inszenierungen vergleichen und als Deutungen erkennen.</li></ul>`
})}` },

    { titel: 'Textgebundene Erörterung', html: `<p>Typische Aufgabe: <em>„Analysieren Sie den Text. Erörtern Sie anschließend die Position des Verfassers.“</em> Es sind zwei Teile – beide zählen.</p>
<h4>Teil 1: Analyse</h4>
<ul><li><strong>Einleitung:</strong> Autor/in, Titel, Textsorte (Kommentar, Essay, Rede …), Quelle, Datum, Thema.</li><li><strong>Kernthese</strong> in eigenen Worten.</li><li><strong>Argumentationsgang</strong> Abschnitt für Abschnitt, mit Zeilen- oder Absatzangaben – in indirekter Rede (Konjunktiv I): „Der Autor behauptet, Klassiker seien …“</li><li><strong>Argumenttypen</strong> und ihre Qualität (belegt? verallgemeinernd? Scheinargument?)</li><li><strong>Sprachliche Mittel</strong> und ihre Funktion (Wortwahl, Stilmittel, Satzbau, Ton)</li><li><strong>Intention</strong> und Adressaten</li></ul>
<h4>Teil 2: Erörterung</h4>
<ul><li>Position beziehen: zustimmen, widersprechen – oder (oft am überzeugendsten) <strong>differenzieren</strong>.</li><li>Die Argumente des Textes aufgreifen und prüfen; fehlende Aspekte ergänzen.</li><li>Eigene Argumente mit Beispielen; Schluss mit klarem Urteil.</li></ul>
${uebung({
  titel: '„Schluss mit dem Pflichtprogramm!“',
  art: 'Textgebundene Erörterung',
  aufgabe: '<ol><li>Analysieren Sie den Kommentar im Hinblick auf Argumentation und sprachliche Gestaltung.</li><li>Erörtern Sie die Position des Verfassers.</li></ol>',
  material: `<div class="textbox"><p class="textbox__title">Schluss mit dem Pflichtprogramm! (Übungstext)</p>
<p>[1] Jedes Jahr dasselbe Ritual: Tausende Jugendliche quälen sich durch Texte, die vor zweihundert Jahren geschrieben wurden, und lernen Zitate auswendig, die sie nicht verstehen. Wer so lesen muss, liest danach nie wieder freiwillig.</p>
<p>[2] Studien zeigen seit Jahren, dass die Lesemotivation in der Oberstufe sinkt. Kein Wunder: Ein Prinz, der seine Stiefmutter liebt, oder ein Dorfrichter, der über einen kaputten Krug verhandelt, haben mit dem Leben von Siebzehnjährigen nichts zu tun.</p>
<p>[3] Natürlich heißt es dann, Klassiker seien „zeitlos“. Doch das sagen immer die, die selbst mit diesen Büchern groß geworden sind.</p>
<p>[4] Die Schule sollte endlich Bücher auswählen, die von unserer Gegenwart erzählen. Nur wer gern liest, bleibt Leser. Und darum geht es doch.</p></div>${fiktiv}`,
  loesung: `<h4>Analyse</h4><ul><li><strong>These:</strong> Pflichtlektüren aus früheren Jahrhunderten sollten durch Gegenwartsliteratur ersetzt werden, weil sie die Lesefreude zerstören.</li><li><strong>Abs. 1:</strong> Einstieg mit Übertreibung („Ritual“, „Tausende … quälen sich“) und einer pauschalen Folgerung („nie wieder“) – Kausalargument, aber unbelegt.</li><li><strong>Abs. 2:</strong> scheinbares Faktenargument („Studien zeigen“) ohne Quelle; die Beispiele verkürzen die Werke (${w('don-karlos', '„Don Karlos“')} ist auch ein Freiheitsdrama, ${w('der-zerbrochne-krug', 'der „Krug“')} eine Satire auf Machtmissbrauch).</li><li><strong>Abs. 3:</strong> Gegenargument wird nicht widerlegt, sondern die Gegner werden abgewertet – Angriff auf die Person.</li><li><strong>Abs. 4:</strong> Forderung und Appell; Sentenz („Nur wer gern liest, bleibt Leser.“) als einprägsamer Schluss.</li><li><strong>Sprache:</strong> Ausruf im Titel, umgangssprachlich-lockerer Ton („Kein Wunder“, „kaputten Krug“), ${s('hyperbel', 'Hyperbeln')}, ${s('ironie', 'ironische')} Distanz zu „zeitlos“.</li><li><strong>Intention:</strong> provozieren und zur Diskussion anregen; Adressaten: Leserschaft einer Zeitung, Schulöffentlichkeit.</li></ul>
<h4>Erörterung (differenzierte Position)</h4><ul><li>Zustimmen: Motivation ist wichtig; Textauswahl sollte auch Gegenwartsliteratur enthalten (vgl. ${w('heimsuchung', '„Heimsuchung“')}).</li><li>Widersprechen: Klassiker verhandeln Grundfragen (Macht, Freiheit, Schuld), die heute aktuell sind; die Behauptung „nichts zu tun“ ist nicht belegt.</li><li>Ergänzen: Nicht die Texte, sondern die Art des Unterrichts entscheidet über Lesefreude (Aufführungen, Gegenwartsbezüge, Vergleich mit Gegenwartstexten).</li><li>Urteil: Mischung statt Entweder-oder.</li></ul>`
})}` },

    { titel: 'Literarische Erörterung', html: `<p>Hier erörterst du eine These oder Frage zu einem <strong>literarischen Werk</strong> – als eigene Aufgabe oder als Zusatzauftrag einer Interpretation („Erörtern Sie, ob …“, „Setzen Sie sich mit der These auseinander, dass …“). Der Unterschied zur allgemeinen Erörterung: Deine Belege sind <strong>Textstellen</strong>, Figurenverhalten und Werkzusammenhänge, nicht Alltagsbeispiele.</p>
<ul><li><strong>Einleitung:</strong> Werk kurz vorstellen, These oder Frage erklären und auf den Punkt bringen.</li><li><strong>Hauptteil:</strong> dialektisch (Sanduhr oder Pingpong), jedes Argument mit Szene/Zitat belegen.</li><li><strong>Schluss:</strong> begründetes Urteil, gern mit Bezug auf Epoche oder Absicht des Autors.</li></ul>
<p>Weitere Beispiele in der App: ${w('don-karlos', '„Posa – Held oder Manipulator?“ (Don Karlos)')}, die Vergleichsaufgabe zu Patriarch und Großinquisitor bei ${w('nathan', 'Nathan der Weise')}.</p>
${uebung({
  titel: '„Woyzeck ist ein Mörder – schuld sind aber die anderen.“',
  art: 'Literarische Erörterung',
  aufgabe: `<p>Erörtern Sie diese These zu Georg Büchners ${w('woyzeck', '„Woyzeck“')}.</p>`,
  loesung: `<h4>Einleitung</h4><ul><li>Büchner, „Woyzeck“ (Fragment, 1836/37), Vorbild: der Fall des historischen Johann Christian Woyzeck und das Gutachten von Clarus.</li><li>Frage: Ist Woyzeck für den Mord an Marie verantwortlich, oder ist er Opfer der Verhältnisse?</li></ul>
<h4>Argumente für die These</h4><ul><li>Armut und Ausbeutung: Woyzeck muss für ein paar Groschen am Experiment des Doktors teilnehmen (Erbsendiät) – körperliche und seelische Zerrüttung.</li><li>Demütigung durch Hauptmann (Moralpredigt, „Wir arme Leut“) und Tambourmajor (Prügel).</li><li>Wahn: Stimmen, Halluzinationen – fraglich, ob er frei entscheidet.</li><li>Büchners Zeitkritik: Die Gesellschaft macht den Menschen zum Mittel.</li></ul>
<h4>Argumente gegen die These</h4><ul><li>Woyzeck plant die Tat: Er kauft ein Messer, verschenkt seine Habseligkeiten.</li><li>Marie ist selbst Opfer (Armut, Abhängigkeit) – die Gewalt trifft die Schwächste.</li><li>Andere Figuren in gleicher Lage (Andres) morden nicht.</li></ul>
<h4>Synthese</h4><ul><li>Das Drama spricht Woyzeck nicht frei, macht aber die Mitschuld der Gesellschaft sichtbar; es fragt nach Verantwortung statt nach einfacher Schuld.</li><li>Gegenwartsbezug möglich: Diskussion über verminderte Schuldfähigkeit.</li></ul>`
})}` },

    { titel: 'Materialgestütztes Argumentieren', html: `<p>Du bekommst eine <strong>Schreibsituation</strong> (Anlass, Medium, Adressaten), eine <strong>Textsorte</strong> und ein <strong>Dossier</strong> aus Materialien (M1, M2 …). Daraus schreibst du einen eigenständigen, adressatenbezogenen Text, in dem du eine Position vertrittst.</p>
<h4>Vorgehen</h4>
<ol><li><strong>Aufgabe zerlegen:</strong> Wer schreibt für wen, wo, mit welchem Ziel, in welcher Textsorte?</li><li><strong>Materialien auswerten:</strong> Tabelle mit Pro, Contra und Fakten, jeweils mit Kürzel (M2).</li><li><strong>Position festlegen</strong> und Argumente gewichten.</li><li><strong>Gliedern</strong>, dann schreiben: Materialien einbauen statt nacherzählen; Belege kennzeichnen („wie eine Umfrage an unserer Schule zeigt (M1)“); eigenes Wissen ergänzen.</li><li><strong>Textsortenmerkmale</strong> beachten und überarbeiten.</li></ol>
<div class="table-wrap"><table class="table"><thead><tr><th>Textsorte</th><th>Merkmale</th></tr></thead><tbody>
<tr><td>Kommentar</td><td>prägnante Überschrift, Einstieg mit Anlass, klare Meinung, zugespitzte Argumente, pointierter Schluss</td></tr>
<tr><td>Leserbrief</td><td>Bezug auf einen Artikel (Titel, Datum), Anrede, eigene Position, sachlicher, aber persönlicher Ton</td></tr>
<tr><td>Rede / Debattenbeitrag</td><td>Anrede des Publikums, Wir-Bezug, Hörerführung (Wiederholungen, Fragen), Appell am Schluss</td></tr>
<tr><td>Essay</td><td>abwägend, persönlich, gedanklich offen; darf Umwege gehen und Fragen stehen lassen</td></tr>
</tbody></table></div>
${uebung({
  titel: 'Ein Theaterprojekt für die Oberstufe?',
  art: 'Materialgestütztes Argumentieren',
  aufgabe: '<p>Das Schulforum entscheidet, ob die Oberstufe künftig jedes Jahr ein Theaterprojekt zu einer Abi-Lektüre durchführt, beginnend mit Kleists „Der zerbrochne Krug“. Verfassen Sie für die Schülerzeitung einen <strong>Kommentar</strong>, in dem Sie zu diesem Vorschlag Stellung nehmen. Nutzen Sie die Materialien.</p>',
  material: `<div class="textbox"><p class="textbox__title">M1 – Umfrage unter 200 Schülerinnen und Schülern der Q11/Q12</p><ul><li>„Ich würde mitmachen (Spiel, Technik, Bühnenbild)“: 41 %</li><li>„Ich würde mir die Aufführung ansehen“: 78 %</li><li>„Ich fürchte zu viel zusätzlichen Zeitaufwand“: 52 %</li></ul></div>
<div class="textbox"><p class="textbox__title">M2 – Stimmen aus der Schulgemeinschaft</p><p>Eine Deutschlehrerin: „Wer eine Rolle spricht, versteht den Text plötzlich von innen.“<br>Ein Schüler der Q12: „Neben Klausuren und Seminararbeit bleibt kaum Zeit.“<br>Die Schulleitung: „Die Aula ist frei, aber für Kostüme und Technik gibt es kein festes Budget.“</p></div>
<div class="textbox"><p class="textbox__title">M3 – Fakten zum Stück</p><ul><li>„Der zerbrochne Krug“ ist für die Abiturprüfungen 2026–2028 eine ländergemeinsame Lektüre.</li><li>Das Lustspiel spielt an einem Ort (Gerichtsstube) und hat nur einen Akt mit 13 Auftritten – es braucht wenig Bühnenbild.</li><li>Die Uraufführung 1808 in Weimar fiel durch; heute gehört das Stück zu den meistgespielten deutschen Komödien.</li></ul></div>${fiktiv}`,
  loesung: `<h4>Situation erfassen</h4><ul><li>Textsorte Kommentar, Medium Schülerzeitung, Adressaten: Mitschülerinnen und Mitschüler, Lehrkräfte, Eltern – Ziel: Meinungsbildung vor der Entscheidung.</li></ul>
<h4>Mögliche Gliederung (Position: dafür, mit Bedingungen)</h4><ul><li><strong>Überschrift</strong> mit Pfiff, z. B. „Ein Krug, der uns zusammenbringt“.</li><li><strong>Einstieg:</strong> Anlass (Entscheidung im Schulforum), Bezug auf die Lektüre.</li><li><strong>Gegenargumente aufgreifen und entkräften:</strong> Zeitaufwand (M1: 52 %, M2) → Projekt auf freiwilliger Basis, verschiedene Rollen mit unterschiedlichem Aufwand; Kosten (M2) → kleines Bühnenbild reicht (M3: ein Ort, ein Akt), Einnahmen durch Eintritt.</li><li><strong>Eigene Argumente steigernd:</strong> großes Interesse (M1: 78 % Publikum, 41 % Mitwirkung); Prüfungsnutzen, weil die Lektüre im Abitur vorausgesetzt wird (M3); tieferes Textverständnis durch Spielen (M2); Dramen sind für die Bühne geschrieben.</li><li><strong>Schluss:</strong> klare Empfehlung mit Bedingungen und Appell an das Schulforum.</li></ul>
<h4>Bewertungskriterien</h4><ul><li>Materialien sinnvoll ausgewählt, verknüpft und gekennzeichnet – nicht bloß aufgezählt.</li><li>Eigene Position durchgehend erkennbar, Gegenpositionen fair aufgegriffen.</li><li>Adressatengerechter, lebendiger, aber sachlich begründender Stil.</li></ul>`
})}` },

    { titel: 'Materialgestütztes Informieren', html: `<p>Ziel ist ein <strong>informierender Text</strong> für ein bestimmtes Publikum – z. B. ein Beitrag für ein Programmheft, eine Broschüre, eine Website, ein Lexikonartikel oder ein Vortrag. Du wählst aus den Materialien das Passende aus, ordnest es und formulierst es verständlich. Deine Meinung steht <strong>nicht</strong> im Mittelpunkt.</p>
<h4>Worauf es ankommt</h4>
<ul><li><strong>Adressaten:</strong> Was wissen sie schon, was nicht? Fachbegriffe kurz erklären.</li><li><strong>Auswahl:</strong> nicht alles übernehmen – nur, was zum Schreibziel passt.</li><li><strong>Struktur:</strong> Überschrift, Einstieg, der neugierig macht, sinnvolle Abschnitte (ggf. Zwischenüberschriften), runder Schluss.</li><li><strong>Eigenständig formulieren:</strong> nicht abschreiben; Zahlen und Fakten korrekt übernehmen.</li><li><strong>Sprache:</strong> sachlich, klar, anschaulich; Präsens; keine Wertungen ohne Grundlage.</li></ul>
${uebung({
  titel: 'Programmheft: „Der zerbrochne Krug“',
  art: 'Materialgestütztes Informieren',
  aufgabe: `<p>Ihre Theatergruppe führt Kleists ${w('der-zerbrochne-krug', '„Der zerbrochne Krug“')} auf. Verfassen Sie für das Programmheft einen Beitrag, der das Publikum (Eltern, Lehrkräfte, jüngere Schülerinnen und Schüler) über das Stück informiert. Nutzen Sie die Materialien.</p>`,
  material: `<div class="textbox"><p class="textbox__title">M1 – Entstehung</p><p>Um 1802 verabredete Kleist in der Schweiz mit Heinrich Zschokke und Ludwig Wieland einen Wettstreit: Jeder sollte einen französischen Kupferstich literarisch gestalten. Darauf sind ein Richter, ein Schreiber, eine Frau mit einem zerbrochenen Krug und ein junges Paar zu sehen.</p></div>
<div class="textbox"><p class="textbox__title">M2 – Uraufführung</p><p>Uraufführung am 2. März 1808 am Hoftheater Weimar unter der Leitung Goethes. Goethe teilte den Einakter in drei Akte; die Aufführung wurde ein Misserfolg. Gedruckt erschien das Lustspiel 1811.</p></div>
<div class="textbox"><p class="textbox__title">M3 – Worum es geht</p><p>In der Gerichtsstube des Dorfes Huisum bei Utrecht soll Dorfrichter Adam klären, wer in der Nacht bei Eve war und den Krug ihrer Mutter Marthe zerbrochen hat. Der Gerichtsrat Walter ist zur Kontrolle angereist. Nach und nach wird klar: Der Täter ist der Richter selbst.</p></div>
<div class="textbox"><p class="textbox__title">M4 – Fachbegriff</p><p>Analytisches Drama: Das entscheidende Ereignis liegt vor Beginn der Handlung; das Stück deckt es Schritt für Schritt auf. Kleist verweist selbst auf Sophokles’ „König Ödipus“.</p></div>
<div class="textbox"><p class="textbox__title">M5 – Heute</p><p>„Der zerbrochne Krug“ gehört zu den meistgespielten deutschen Lustspielen und ist für die Abiturprüfungen 2026–2028 eine ländergemeinsame Lektüre.</p></div>
<p class="small muted">Die Materialien fassen belegte Fakten zusammen (siehe Werkseite); sie sind für die Übung selbst formuliert.</p>`,
  loesung: `<h4>Schreibplan</h4><ul><li><strong>Überschrift/Teaser:</strong> z. B. „Ein Richter auf der Anklagebank“ – Neugier wecken, Kernidee andeuten.</li><li><strong>Einstieg:</strong> die Ausgangssituation in der Gerichtsstube (M3) oder die Frage „Wer hat den Krug zerbrochen?“</li><li><strong>Inhalt ohne Ende zu verraten?</strong> Im Programmheft darf man andeuten, dass der Richter der Täter ist – das weiß das Publikum ohnehin früh; die Komik entsteht aus Adams Ausreden (M3, M4).</li><li><strong>Entstehung</strong> (M1) und <strong>Uraufführung</strong> (M2) knapp und anschaulich: Wettstreit um ein Bild, Misserfolg in Weimar.</li><li><strong>Fachbegriff erklären</strong>: analytisches Drama, Vergleich mit „König Ödipus“ (M4).</li><li><strong>Schluss:</strong> Aktualität (Machtmissbrauch, Wahrheit vor Gericht) und Bedeutung heute (M5).</li></ul>
<h4>Bewertungskriterien</h4><ul><li>Adressatengerecht: verständlich für Zuschauer ohne Vorwissen.</li><li>Materialien ausgewählt, sinnvoll verknüpft, eigenständig formuliert, Fakten korrekt.</li><li>Klare Gliederung, informierender, sachlicher Stil mit anschaulichen Elementen.</li></ul>
<h4>Typische Fehler</h4><ul><li>Materialien der Reihe nach abarbeiten statt eine eigene Struktur zu bauen.</li><li>Eigene Meinung oder Interpretation in den Vordergrund stellen.</li><li>Abschreiben ganzer Sätze; Fakten verfälschen (Daten, Namen).</li></ul>`
})}` },

    { titel: 'Sachtexte und Reden analysieren', html: `<p>Pragmatische Texte (Reden, Kommentare, Essays, Interviews) analysierst du mit Blick auf <strong>Kommunikationssituation, Argumentation, Sprache und Wirkungsabsicht</strong>. Das passt besonders zum Themenfeld „Sprache in politisch-gesellschaftlichen Verwendungszusammenhängen“.</p>
<h4>Kommunikationssituation</h4>
<ul><li>Wer spricht zu wem, wann, wo, aus welchem Anlass, in welchem Medium?</li><li>Funktion (nach Karl Bühler): <strong>Darstellung</strong> (Sachinformation), <strong>Ausdruck</strong> (Haltung des Sprechers), <strong>Appell</strong> (Wirkung auf die Hörer).</li></ul>
<h4>Aufbau einer Rede (klassische Rhetorik)</h4>
<ul><li><strong>Einleitung</strong> (exordium): Anrede, Kontakt zum Publikum, Wohlwollen gewinnen</li><li><strong>Darlegung</strong> (narratio): Sachverhalt, Ausgangslage</li><li><strong>Argumentation</strong> (argumentatio): Begründungen, Widerlegung der Gegner</li><li><strong>Schluss</strong> (peroratio): Zusammenfassung und Appell</li></ul>
<h4>Sprachliche Strategien</h4>
<ul><li><strong>Wir-Bezug</strong> und Anrede: Gemeinschaft stiften, Gegner ausgrenzen</li><li><strong>Hochwertwörter</strong> (Freiheit, Zukunft, Verantwortung) und <strong>Stigmawörter</strong> (abwertende Begriffe für die Gegenseite)</li><li>${s('euphemismus', 'Euphemismen')} verschleiern, Schlagwörter vereinfachen</li><li>Wiederholung und Steigerung: ${s('anapher', 'Anapher')}, ${s('parallelismus', 'Parallelismus')}, ${s('klimax', 'Klimax')}; Dreierfiguren</li><li>${s('rhetorische-frage', 'Rhetorische Fragen')}, ${s('antithese', 'Antithesen')} (Schwarz-Weiß), ${s('metapher', 'Metaphern')} (z. B. aus Krieg, Natur, Medizin)</li></ul>
<h4>Sprache und Macht in deinen Lektüren</h4>
<ul><li>${w('don-karlos', 'Don Karlos')} III,10: Posa wirbt mit Schmeichelei und Pathos beim König für Gedankenfreiheit.</li><li>${w('der-zerbrochne-krug', 'Der zerbrochne Krug')}: Adam nutzt seine Amtssprache zum Lügen und Einschüchtern.</li><li>${w('woyzeck', 'Woyzeck')}: Hauptmann und Doktor beherrschen Woyzeck auch sprachlich (Moralphrasen, Fachjargon).</li><li>${w('nathan', 'Nathan der Weise')}: Nathan antwortet auf eine Machtfrage mit einer Parabel.</li></ul>
${uebung({
  titel: 'Redeauszug: „Jetzt oder nie“',
  art: 'Analysieren eines pragmatischen Textes',
  aufgabe: '<p>Analysieren Sie den Redeauszug im Hinblick auf die sprachlichen Mittel und ihre beabsichtigte Wirkung.</p>',
  material: `<div class="textbox"><p class="textbox__title">Rede einer Bürgermeisterin zur Eröffnung einer Bürgerversammlung (Übungstext, Auszug)</p><p>Liebe Mitbürgerinnen und Mitbürger, wir alle spüren es: Unsere Stadt steht an einem Wendepunkt. Wollen wir zusehen, wie unsere Innenstadt verödet? Wollen wir zusehen, wie unsere Kinder wegziehen? Nein! Wir packen an – gemeinsam, entschlossen, mutig. Wer jetzt zögert, verspielt die Zukunft. Wer jetzt handelt, gewinnt sie. Der neue Marktplatz ist kein Luxus, er ist das Herz, das unsere Stadt wieder schlagen lässt.</p></div>${fiktiv}`,
  loesung: `<ul><li><strong>Anrede und Wir-Bezug</strong> („Liebe Mitbürgerinnen und Mitbürger“, „wir alle“, „unsere Stadt“): Gemeinschaft, Nähe, Vereinnahmung des Publikums.</li><li><strong>Rhetorische Fragen</strong> mit ${s('anapher', 'Anapher')} und ${s('parallelismus', 'Parallelismus')} („Wollen wir zusehen …?“): Das Publikum soll innerlich mit Nein antworten; die Rednerin gibt die Antwort selbst („Nein!“).</li><li><strong>Dreierfigur</strong> mit Steigerung („gemeinsam, entschlossen, mutig“): Tatkraft, Aufbruchsstimmung.</li><li><strong>Antithese</strong> („Wer jetzt zögert … / Wer jetzt handelt …“): Schwarz-Weiß-Malerei, Zögernde werden als Verlierer abgestempelt.</li><li><strong>Metaphern</strong> („Wendepunkt“, „Herz, das unsere Stadt wieder schlagen lässt“) und Hochwertwort „Zukunft“: Emotionalisierung statt Begründung.</li><li><strong>Fazit:</strong> appellative Rede, die Zustimmung durch Gefühl und Gruppendruck erzeugt; Sachargumente (Kosten, Nutzen) fehlen im Auszug.</li></ul>`
})}` },

    { titel: 'Checkliste für alle Formen', html: `<ul class="checklist">
<li>Operatoren markiert? (analysieren, erörtern, verfassen …)</li>
<li>Schreibsituation geklärt? (Adressat, Medium, Textsorte, Umfang)</li>
<li>Bei Erörterungen: Problemfrage klar, Argumente gewichtet, eigene Position am Ende begründet?</li>
<li>Jedes Argument mit Begründung und Beleg (Textstelle, Material, Beispiel)?</li>
<li>Materialien verknüpft und gekennzeichnet – nicht nur aufgezählt?</li>
<li>Bei Analysen: Konjunktiv I für die Wiedergabe von Positionen, Zeilen- bzw. Absatzangaben?</li>
<li>Einleitung und Schluss vorhanden, Schluss ohne neue Argumente?</li>
<li>Zeit für Überarbeitung eingeplant (Rechtschreibung, Zeichensetzung, Tempus)?</li>
</ul>` }
  ],
  quellen: [
    { titel: 'Handreichung Deutschabitur ab 2026 (PDF)', url: 'https://www.deutschabitur.bayern.de/fileadmin/user_upload/deutschabitur/Handreichung_Deutschabitur_ab_2026.pdf' },
    { titel: 'ISB: Aufgabenbeispiele Deutschabitur (Stand Mai 2025, PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Faecher/Deutsch/Abitur/2011_Aufgabenbeispiele_Deutschabitur_Stand-Mai-2025.pdf' },
    { titel: 'ISB: Checkliste Abitur Deutsch (PDF)', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Faecher/Deutsch/Abitur/1609_Checkliste_Abitur_Deutsch_Abiturienten.pdf' },
    { titel: 'KMK: Bildungsstandards im Fach Deutsch für die Allgemeine Hochschulreife (Beschluss vom 18.10.2012) – Übersichtsseite', url: 'https://www.kmk.org/downloads-dokumente/beschluesse-und-veroeffentlichungen/bildung-/-schule/qualitaetssicherung-in-schulen.html' },
    { titel: 'IQB: Gemeinsame Abituraufgabenpools der Länder', url: 'https://www.iqb.hu-berlin.de/abitur/' }
  ]
};
