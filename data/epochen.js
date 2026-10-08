// Epochen der deutschsprachigen Literatur. Zeiträume sind Orientierungswerte.
// row: Zeile im Zeitstrahl (damit sich Balken nicht überlappen); hue: Farbton der Epoche.
const ws = (q) => `https://de.wikisource.org/w/index.php?search=${encodeURIComponent(q)}`;
const wp = (title) => `https://de.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

export const epochen = [
  {
    id: 'barock', name: 'Barock', kurz: 'Barock', zeitraum: 'ca. 1600–1720', von: 1600, bis: 1720, row: 0, hue: 35,
    kurzbeschreibung: 'Literatur im Schatten des Dreißigjährigen Krieges: Vergänglichkeit, Tod und Jenseits – in streng geregelter, prunkvoller Form.',
    hintergrund: '<p>Der <strong>Dreißigjährige Krieg</strong> (1618–1648) verwüstet weite Teile Deutschlands; Pest und Hunger kommen hinzu. Gleichzeitig entfalten die Fürsten an ihren Höfen absolutistische Pracht nach dem Vorbild von Versailles. Die Konfessionen stehen sich unversöhnlich gegenüber (Gegenreformation).</p>',
    weltbild: '<p>Die Welt erscheint als Ort des Leids und der Vergänglichkeit, das eigentliche Ziel ist das Jenseits. Das Denken ist <strong>antithetisch</strong>: Diesseits – Jenseits, Leben – Tod, Schein – Sein. Daraus folgen die Leitbegriffe <em>Vanitas</em> (alles ist eitel, d. h. nichtig), <em>Memento mori</em> (bedenke, dass du sterben musst) und – als Gegenpol – <em>Carpe diem</em> (nutze den Tag). Die Welt gilt als Theater (<em>theatrum mundi</em>), in dem jeder eine Rolle spielt.</p>',
    merkmale: [
      '<strong>Vanitas, Memento mori, Carpe diem</strong> als Leitmotive',
      '<strong>Antithetik</strong> in Inhalt und Form (z. B. Alexandriner mit Zäsur)',
      'Strenge <strong>Regelpoetik</strong>: Martin Opitz, „Buch von der Deutschen Poeterey“ (1624) – Wortakzent und Versakzent sollen übereinstimmen',
      'Gelehrte, rhetorisch kunstvolle Dichtung mit Bilderhäufung (später als „Schwulst“ kritisiert), Emblematik',
      'Sprachgesellschaften (z. B. Fruchtbringende Gesellschaft, 1617) pflegen das Deutsche als Literatursprache',
      '<strong>Ständeklausel</strong>: Tragödie nur für hohe Stände, Komödie für niedere'
    ],
    textformen: ['Sonett', 'Trauerspiel', 'Schelmenroman', 'Epigramm', 'Kirchenlied'],
    dominant: 'lyrik',
    gattungen: {
      lyrik: '<strong>Sonett</strong> aus zwei Quartetten und zwei Terzetten, meist im <strong>Alexandriner</strong> (sechshebiger Jambus mit Zäsur nach der dritten Hebung) – die Zweiteilung des Verses passt zum antithetischen Denken. Daneben Kirchenlieder (Paul Gerhardt) und Epigramme.',
      drama: 'Barockes <strong>Trauerspiel</strong> (Märtyrerdrama, Gryphius, Lohenstein): Standhaftigkeit im Leid; Komödien als Verlachkomödien.',
      epik: '<strong>Schelmenroman</strong>: Grimmelshausens „Simplicissimus“ (1668) erzählt den Krieg aus der Sicht eines naiven Ich-Erzählers.'
    },
    autoren: [
      { name: 'Andreas Gryphius', werke: '„Es ist alles eitel“ (1637), „Tränen des Vaterlandes / Anno 1636“, Trauerspiel „Catharina von Georgien“' },
      { name: 'Martin Opitz', werke: '„Buch von der Deutschen Poeterey“ (1624)' },
      { name: 'H. J. Ch. von Grimmelshausen', werke: '„Der abenteuerliche Simplicissimus Teutsch“ (1668)' },
      { name: 'Christian Hofmann von Hofmannswaldau', werke: '„Vergänglichkeit der Schönheit“, galante Lyrik' },
      { name: 'Angelus Silesius', werke: '„Cherubinischer Wandersmann“ (Epigramme)' },
      { name: 'Paul Gerhardt', werke: 'Kirchenlieder, z. B. „Geh aus, mein Herz, und suche Freud“' }
    ],
    gedichte: [
      { titel: 'Es ist alles eitel', autor: 'Andreas Gryphius', jahr: '1637/1643', auszug: 'Du siehst, wohin du siehst, nur Eitelkeit auf Erden.\nWas dieser heute baut, reißt jener morgen ein;\nWo jetzund Städte stehn, wird eine Wiese sein,\nAuf der ein Schäferskind wird spielen mit den Herden.', hinweis: 'Sonett im Alexandriner; Antithesen („heute baut – morgen ein“) zeigen die Vergänglichkeit alles Irdischen (Vanitas). (Modernisierte Schreibung.)', url: ws('Es ist alles eitel Gryphius') },
      { titel: 'Tränen des Vaterlandes / Anno 1636', autor: 'Andreas Gryphius', jahr: '1636/1643', auszug: 'Wir sind doch nunmehr ganz, ja mehr denn ganz verheeret!\nDer frechen Völker Schar, die rasende Posaun,\nDas vom Blut fette Schwert, die donnernde Karthaun\nHat aller Schweiß und Fleiß und Vorrat aufgezehret.', hinweis: 'Kriegsklage; Akkumulation und Klimax; Schluss: Schlimmer als Tod und Pest sei der Verlust des „Seelenschatzes“ (Glaubensverlust).', url: ws('Tränen des Vaterlandes Gryphius') },
      { titel: 'Vergänglichkeit der Schönheit', autor: 'Christian Hofmann von Hofmannswaldau', jahr: 'ersch. 1695', auszug: 'Es wird der bleiche Tod mit seiner kalten Hand\nDir endlich mit der Zeit um deine Brüste streichen,', hinweis: 'Memento mori und Carpe diem verbunden: Die Schönheit vergeht – nur das Herz („aus Diamant“) bleibt.', url: ws('Vergänglichkeit der Schönheit Hofmannswaldau') }
    ],
    wiki: 'Literatur des Barock',
    quellen: [{ titel: 'Wikipedia: Literatur des Barock', url: wp('Literatur des Barock') }, { titel: 'Wikisource: Gedichte von Andreas Gryphius', url: ws('Andreas Gryphius') }]
  },
  {
    id: 'aufklaerung', name: 'Aufklärung (und Empfindsamkeit)', kurz: 'Aufklärung', zeitraum: 'ca. 1720–1800', von: 1720, bis: 1800, row: 0, hue: 200,
    kurzbeschreibung: 'Die Vernunft wird zum Maßstab: Literatur soll belehren, zu Toleranz erziehen und das Bürgertum stärken. Parallel entdeckt die Empfindsamkeit das Gefühl.',
    hintergrund: '<p>Im <strong>aufgeklärten Absolutismus</strong> (z. B. Friedrich II. von Preußen, 1740–1786) gewinnt das <strong>Bürgertum</strong> an Selbstbewusstsein. Naturwissenschaften (Newton) und Philosophie (Leibniz, Wolff, später Kant) verbreiten das Vertrauen in die Vernunft. Zeitschriften, Lesegesellschaften und ein wachsender Buchmarkt schaffen eine literarische Öffentlichkeit. Die Epoche mündet in die Französische Revolution (1789).</p>',
    weltbild: '<p>Kant (1784): „Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.“ – „Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen!“ Der Mensch gilt als vernünftig und erziehbar; Vorurteile, Aberglaube und Willkür sollen überwunden werden. Leitwerte: <strong>Vernunft, Toleranz, Tugend, Fortschritt</strong>. Die <strong>Empfindsamkeit</strong> (ca. 1740–1790, beeinflusst vom Pietismus) ergänzt das um Innerlichkeit, Freundschaft und Gefühl.</p>',
    merkmale: [
      'Literatur soll <strong>nützen und erfreuen</strong> (prodesse et delectare, nach Horaz) – Belehrung steht im Vordergrund',
      'Lehrhafte Gattungen: <strong>Fabel</strong>, Lehrgedicht, Parabel (Ringparabel in „Nathan der Weise“), Epigramm',
      '<strong>Bürgerliches Trauerspiel</strong> (Lessing): Bürger als tragische Helden – Bruch mit der Ständeklausel',
      'Lessings <strong>Mitleidstheorie</strong> (Hamburgische Dramaturgie, 1767–1769) gegen Gottscheds starre Regelpoetik nach französischem Vorbild',
      '<strong>Toleranz</strong> und Kritik an Adelswillkür („Emilia Galotti“)',
      'Klare, verständliche, argumentierende Sprache',
      '<strong>Empfindsamkeit</strong>: Gefühlskult, Briefkultur, Naturerleben (Klopstock, Gellert, Sophie von La Roche)'
    ],
    textformen: ['Fabel', 'Bürgerliches Trauerspiel', 'Ideendrama', 'Lehrgedicht', 'Briefroman (Empfindsamkeit)', 'Ode'],
    dominant: 'drama',
    gattungen: {
      drama: '<strong>Bürgerliches Trauerspiel</strong> („Miß Sara Sampson“ 1755, „Emilia Galotti“ 1772), Ideendrama („Nathan der Weise“ 1779), Komödie („Minna von Barnhelm“ 1767).',
      epik: 'Fabeln (Lessing in Prosa, Gellert in Versen), Moralische Wochenschriften, Bildungs- und Briefroman (Wieland „Geschichte des Agathon“, La Roche „Geschichte des Fräuleins von Sternheim“ 1771).',
      lyrik: 'Lehrgedicht, Fabel in Versen, Epigramm; in der Empfindsamkeit Oden und Hymnen (Klopstock) und schlichte Lieder (Claudius).'
    },
    autoren: [
      { name: 'Gotthold Ephraim Lessing', werke: '„Minna von Barnhelm“ (1767), „Emilia Galotti“ (1772), „Nathan der Weise“ (1779), Fabeln, „Hamburgische Dramaturgie“' },
      { name: 'Immanuel Kant', werke: '„Beantwortung der Frage: Was ist Aufklärung?“ (1784)' },
      { name: 'Johann Christoph Gottsched', werke: '„Versuch einer Critischen Dichtkunst“ (1730)' },
      { name: 'Christian Fürchtegott Gellert', werke: 'Fabeln und Erzählungen' },
      { name: 'Friedrich Gottlieb Klopstock', werke: '„Der Messias“, Oden (Empfindsamkeit)' },
      { name: 'Matthias Claudius', werke: '„Abendlied“ (1779)' },
      { name: 'Sophie von La Roche', werke: '„Geschichte des Fräuleins von Sternheim“ (1771)' }
    ],
    gedichte: [
      { titel: 'Abendlied', autor: 'Matthias Claudius', jahr: '1779', auszug: 'Der Mond ist aufgegangen,\nDie goldnen Sternlein prangen\nAm Himmel hell und klar;\nDer Wald steht schwarz und schweiget,\nUnd aus den Wiesen steiget\nDer weiße Nebel wunderbar.', hinweis: 'Empfindsame Naturbetrachtung, schlichte Liedform; später mahnt das Gedicht zur Bescheidenheit der Vernunft („Wir stolze Menschenkinder …“).', url: ws('Abendlied Claudius') },
      { titel: 'Der Tanzbär', autor: 'Christian Fürchtegott Gellert', jahr: '1746', auszug: 'Ein Bär, der lange Zeit sein Brot ertanzen müssen,\nEntrann und wählte sich den ersten Aufenthalt.', hinweis: 'Fabel: Tiere stehen für Menschen; Handlung und Moral zeigen, wie man mit Neid auf überlegene Fähigkeiten umgeht – typisch lehrhaft.', url: ws('Der Tanzbär Gellert') }
    ],
    abgrenzung: '<p><strong>Aufklärung und Sturm und Drang</strong> sind keine einfachen Gegensätze: Der Sturm und Drang radikalisiert die Kritik an Fürstenwillkür und Standesgrenzen, setzt aber statt der Vernunft das Gefühl und das Genie in den Mittelpunkt.</p>',
    wiki: 'Aufklärung',
    quellen: [{ titel: 'Wikipedia: Aufklärung', url: wp('Aufklärung') }, { titel: 'Wikipedia: Empfindsamkeit', url: wp('Empfindsamkeit') }, { titel: 'Kant, „Was ist Aufklärung?“ (Wikisource-Suche)', url: ws('Beantwortung der Frage: Was ist Aufklärung') }]
  },
  {
    id: 'sturm-und-drang', name: 'Sturm und Drang', kurz: 'S. u. D.', zeitraum: 'ca. 1765–1785', von: 1765, bis: 1785, row: 2, hue: 355,
    kurzbeschreibung: 'Die „Geniezeit“: Junge Autoren rebellieren gegen Regeln, Fürstenwillkür und kalte Vernunft und feiern Gefühl, Natur und das schöpferische Genie.',
    hintergrund: '<p>Benannt nach Friedrich Maximilian Klingers Drama „Sturm und Drang“ (1776). Eine junge Generation (meist um die 25) lehnt sich gegen die Ständegesellschaft, absolutistische Willkür und eine als einseitig empfundene Aufklärung auf. Wichtig: die Begegnung Goethes mit Herder in Straßburg (1770/71), Rousseaus Zivilisationskritik und die Begeisterung für Shakespeare.</p>',
    weltbild: '<p>Im Zentrum steht das <strong>Genie</strong>: der schöpferische Mensch, der sich seine eigenen Regeln gibt (Prometheus). <strong>Gefühl und Leidenschaft</strong> („Herz“) zählen mehr als Verstand. Die <strong>Natur</strong> ist lebendig und göttlich (Pantheismus). Freiheit des Individuums und Rebellion gegen Autoritäten – Vater, Fürst, sogar Gott.</p>',
    merkmale: [
      '<strong>Geniekult</strong> und Titanismus (Prometheus)',
      '<strong>Gefühl, Leidenschaft, Herz</strong> statt kühler Vernunft',
      '<strong>Natur</strong> als beseeltes Gegenüber und Spiegel der Seele',
      'Rebellion gegen Ständegesellschaft, Tyrannei und Konventionen; <strong>Freiheit</strong>',
      'Ablehnung starrer Regeln: <strong>offene Dramenform</strong> nach dem Vorbild Shakespeares',
      'Themen: Standesgrenzen, Vater-Sohn-Konflikt, <strong>Kindsmord</strong>',
      'Sprache: Ausrufe, Ellipsen, Kraftausdrücke, Umgangssprache, Gedankenstriche',
      '<strong>Erlebnislyrik</strong>, Hymnen in freien Rhythmen, Volkslied (Herder)'
    ],
    textformen: ['Drama (offene Form)', 'Briefroman', 'Erlebnislyrik', 'Hymne', 'Ballade'],
    dominant: 'drama',
    gattungen: {
      drama: 'Offene Form, viele Schauplätze, Prosa: „Götz von Berlichingen“ (1773), „Die Räuber“ (1781), „Kabale und Liebe“ (1784), Lenz „Die Soldaten“ (1776), H. L. Wagner „Die Kindermörderin“ (1776).',
      epik: '<strong>Briefroman</strong>: „Die Leiden des jungen Werthers“ (1774) – radikal subjektive Innensicht.',
      lyrik: '<strong>Erlebnislyrik</strong> („Willkommen und Abschied“, „Mailied“), Hymnen in freien Rhythmen („Prometheus“, „Ganymed“), Ballade (Bürger, „Lenore“, 1773).'
    },
    autoren: [
      { name: 'Johann Wolfgang Goethe', werke: '„Götz von Berlichingen“ (1773), „Die Leiden des jungen Werthers“ (1774), „Prometheus“, „Mailied“, „Willkommen und Abschied“, Urfaust' },
      { name: 'Friedrich Schiller', werke: '„Die Räuber“ (1781), „Kabale und Liebe“ (1784)' },
      { name: 'Johann Gottfried Herder', werke: '„Abhandlung über den Ursprung der Sprache“ (1772), Volksliedsammlung (1778/79)' },
      { name: 'Jakob Michael Reinhold Lenz', werke: '„Der Hofmeister“ (1774), „Die Soldaten“ (1776)' },
      { name: 'Friedrich Maximilian Klinger', werke: '„Sturm und Drang“ (1776)' },
      { name: 'Gottfried August Bürger', werke: '„Lenore“ (1773)' }
    ],
    gedichte: [
      { titel: 'Prometheus', autor: 'Johann Wolfgang Goethe', jahr: '1774', auszug: 'Bedecke deinen Himmel, Zeus,\nMit Wolkendunst\nUnd übe, dem Knaben gleich,\nDer Disteln köpft,\nAn Eichen dich und Bergeshöhn;', hinweis: 'Hymne in freien Rhythmen; der Titan rebelliert gegen die Götter und schafft Menschen „nach meinem Bilde“ – Inbegriff des Geniekults.', url: ws('Prometheus Goethe') },
      { titel: 'Willkommen und Abschied', autor: 'Johann Wolfgang Goethe', jahr: '1771 (Fassung 1789)', auszug: 'Es schlug mein Herz, geschwind zu Pferde!\nEs war getan fast eh gedacht.\nDer Abend wiegte schon die Erde,\nUnd an den Bergen hing die Nacht;', hinweis: 'Erlebnislyrik: Natur wird personifiziert und spiegelt die Leidenschaft des lyrischen Ichs.', url: ws('Willkommen und Abschied') },
      { titel: 'Mailied', autor: 'Johann Wolfgang Goethe', jahr: '1771', auszug: 'Wie herrlich leuchtet\nMir die Natur!\nWie glänzt die Sonne!\nWie lacht die Flur!', hinweis: 'Ausrufe, kurze Verse: Natur- und Liebeserleben verschmelzen.', url: ws('Mailied Goethe') }
    ],
    wiki: 'Sturm und Drang',
    quellen: [{ titel: 'Wikipedia: Sturm und Drang', url: wp('Sturm und Drang') }]
  },
  {
    id: 'klassik', name: 'Weimarer Klassik', kurz: 'Klassik', zeitraum: 'ca. 1786–1805 (im weiteren Sinn bis 1832)', von: 1786, bis: 1832, row: 2, hue: 220,
    kurzbeschreibung: 'Goethe und Schiller in Weimar: Harmonie, Humanität und Maß nach dem Vorbild der Antike – Kunst soll den Menschen veredeln.',
    hintergrund: '<p>Beginn mit Goethes <strong>Italienreise</strong> (1786–1788), Höhepunkt in der Zusammenarbeit von <strong>Goethe und Schiller</strong> (1794–1805, Schillers Tod). Weimar unter Herzog Carl August wird zum kulturellen Zentrum. Die <strong>Französische Revolution</strong> (1789) und vor allem die Schreckensherrschaft (1793/94) erschüttern die Klassiker: Sie lehnen den gewaltsamen Umsturz ab und setzen auf die Veränderung des Menschen durch Bildung und Kunst.</p>',
    weltbild: '<p>Ideal ist der harmonische Mensch, in dem <strong>Pflicht und Neigung, Vernunft und Gefühl</strong> im Einklang sind („schöne Seele“, Schiller, „Über Anmut und Würde“, 1793). <strong>Humanität</strong> heißt: das Gute im Menschen entfalten („Edel sei der Mensch, / Hilfreich und gut!“). Vorbild ist die Antike (Winckelmann 1755: „edle Einfalt und stille Größe“). Kunst soll zur Freiheit erziehen (Schiller, „Über die ästhetische Erziehung des Menschen“, 1795). Wo der Mensch im Leid seine moralische Freiheit bewahrt, zeigt sich das <strong>Erhabene</strong>.</p>',
    merkmale: [
      '<strong>Humanitätsideal</strong>, Toleranz, sittliche Läuterung',
      '<strong>Harmonie und Maß</strong>: Ausgleich von Gefühl und Vernunft, Pflicht und Neigung',
      'Orientierung an der <strong>Antike</strong> (Stoffe, Formen wie Distichon, Hexameter, Ode, Elegie)',
      'Typisierung und Allgemeingültigkeit statt Individualismus; <strong>Sentenzen</strong>',
      '<strong>Geschlossenes Drama</strong>: fünf Akte, Blankvers, wenige Figuren, symmetrischer Aufbau',
      '<strong>Ideendrama und Geschichtsdrama</strong>: Geschichte als Material für Ideen (Freiheit, Schuld, Würde)',
      '<strong>Balladenjahr</strong> 1797; Xenien (Spottdistichen); Bildungsroman',
      'Gehobene, ausgewogene, bildhafte Sprache'
    ],
    textformen: ['Drama (Blankvers)', 'Ballade', 'Ideenlyrik', 'Bildungsroman', 'Elegie, Distichon'],
    dominant: 'drama',
    gattungen: {
      drama: '<strong>Geschlossene Form in Blankversen</strong>: „Iphigenie auf Tauris“ (1787), „Torquato Tasso“ (1790), „Wallenstein“ (1799), „Maria Stuart“ (1800), „Wilhelm Tell“ (1804). „Faust I“ (1808) sprengt diese Form.',
      epik: '<strong>Bildungsroman</strong> „Wilhelm Meisters Lehrjahre“ (1795/96); Roman „Die Wahlverwandtschaften“ (1809); Novellen.',
      lyrik: '<strong>Balladen</strong> („Der Zauberlehrling“, „Der Handschuh“, „Die Bürgschaft“), Ideenlyrik („Das Göttliche“), antike Formen („Römische Elegien“, „Nänie“).'
    },
    sprache: '<p>Klassische Texte sind klar gebaut, rhythmisch ausgewogen und nutzen Sentenzen – kurze, allgemeingültige Sätze. In Schillers Dramen findest du typischerweise <strong>Blankvers</strong>, Stichomythien in Streitgesprächen und große Monologe, in denen Figuren um eine Entscheidung ringen.</p>',
    autoren: [
      { name: 'Johann Wolfgang von Goethe', werke: '„Iphigenie auf Tauris“ (1787), „Torquato Tasso“ (1790), „Wilhelm Meisters Lehrjahre“ (1795/96), „Faust I“ (1808), „Die Wahlverwandtschaften“ (1809), Balladen' },
      { name: 'Friedrich Schiller', werke: '„Don Karlos“ (1787), „Wallenstein“ (1799), „Maria Stuart“ (1800), „Die Jungfrau von Orleans“ (1801), „Wilhelm Tell“ (1804); Balladen; „Über Anmut und Würde“, „Über die ästhetische Erziehung des Menschen“' },
      { name: 'Christoph Martin Wieland', werke: '„Oberon“ (1780)' },
      { name: 'Johann Gottfried Herder', werke: '„Briefe zu Beförderung der Humanität“ (1793–1797)' }
    ],
    gedichte: [
      { titel: 'Das Göttliche', autor: 'Johann Wolfgang Goethe', jahr: '1783', auszug: 'Edel sei der Mensch,\nHilfreich und gut!\nDenn das allein\nUnterscheidet ihn\nVon allen Wesen,\nDie wir kennen.', hinweis: 'Programmgedicht der Humanität; Imperative und Sentenzen. Vergleiche mit „Prometheus“: aus Rebellion wird Einordnung in eine sittliche Ordnung.', url: ws('Das Göttliche Goethe') },
      { titel: 'Wandrers Nachtlied (Ein Gleiches)', autor: 'Johann Wolfgang Goethe', jahr: '1780', auszug: 'Über allen Gipfeln\nIst Ruh,\nIn allen Wipfeln\nSpürest du\nKaum einen Hauch;\nDie Vögelein schweigen im Walde.\nWarte nur, balde\nRuhest du auch.', hinweis: 'Stufenweise Beruhigung vom Unbelebten über Pflanzen und Tiere zum Menschen; Ruhe als Vorschein des Todes.', url: ws('Wandrers Nachtlied Ein Gleiches') },
      { titel: 'Nänie', autor: 'Friedrich Schiller', jahr: '1800', auszug: 'Auch das Schöne muß sterben! Das Menschen und Götter bezwinget,\nNicht die eherne Brust rührt es des stygischen Zeus.', hinweis: 'Klagelied in Distichen (Hexameter + Pentameter); antike Mythen; Trost: „Auch ein Klaglied zu sein im Mund der Geliebten, ist herrlich“.', url: ws('Nänie Schiller') }
    ],
    abgrenzung: `<p>Für das Themenfeld <strong>„Literatur um 1800“</strong> ist der Vergleich der drei Strömungen zentral:</p>
<div class="table-wrap"><table class="table"><thead><tr><th></th><th>Sturm und Drang</th><th>Klassik</th><th>Romantik</th></tr></thead><tbody>
<tr><td><strong>Leitwert</strong></td><td>Gefühl, Genie, Freiheit</td><td>Harmonie, Humanität, Maß</td><td>Sehnsucht, Unendlichkeit, Poesie</td></tr>
<tr><td><strong>Mensch</strong></td><td>rebellisches Individuum</td><td>sittlich gereifte „schöne Seele“</td><td>zerrissenes, suchendes Ich; Abgründe des Inneren</td></tr>
<tr><td><strong>Natur</strong></td><td>beseelt, göttlich, Spiegel der Leidenschaft</td><td>geordnet, Teil eines harmonischen Ganzen</td><td>geheimnisvoll, Ort der Sehnsucht, Nacht, Traum</td></tr>
<tr><td><strong>Vorbild</strong></td><td>Shakespeare, Volkslied</td><td>Antike</td><td>Mittelalter, Märchen, Volkslied</td></tr>
<tr><td><strong>Form</strong></td><td>offen, regelsprengend</td><td>geschlossen, streng</td><td>Fragment, Gattungsmischung, romantische Ironie</td></tr>
<tr><td><strong>Beispiele</strong></td><td>„Prometheus“, „Die Räuber“</td><td>„Iphigenie“, „Maria Stuart“</td><td>„Der Sandmann“, „Mondnacht“</td></tr>
</tbody></table></div>
<p><strong>Kleist</strong> (z. B. „Der zerbrochne Krug“) lässt sich keiner der beiden Weimarer bzw. romantischen Gruppen zuordnen: Er nutzt klassische Formen, zeigt aber eine Welt, in der Wahrheit und Ordnung brüchig sind.</p>`,
    wiki: 'Weimarer Klassik',
    quellen: [{ titel: 'Wikipedia: Weimarer Klassik', url: wp('Weimarer Klassik') }, { titel: 'Klassik Stiftung Weimar', url: 'https://www.klassik-stiftung.de/' }]
  },
  {
    id: 'romantik', name: 'Romantik', kurz: 'Romantik', zeitraum: 'ca. 1795–1835', von: 1795, bis: 1835, row: 1, hue: 275,
    kurzbeschreibung: 'Sehnsucht nach dem Unendlichen, Nacht, Traum und Märchen – aber auch Wahnsinn, Doppelgänger und das Unheimliche.',
    hintergrund: '<p>Die Romantik entsteht in einer Zeit der Umbrüche: Französische Revolution, napoleonische Kriege, Ende des Heiligen Römischen Reiches (1806), Befreiungskriege (1813–1815) und Restauration nach dem Wiener Kongress (1815). Man unterscheidet <strong>Frühromantik</strong> (Jena, ca. 1795–1804: Brüder Schlegel, Novalis, Tieck; Zeitschrift „Athenäum“ 1798–1800), <strong>Hochromantik</strong> (Heidelberg, ca. 1805–1815: Brentano, Arnim, Brüder Grimm) und <strong>Spätromantik</strong> (u. a. Berlin, ca. 1815–1835: E.T.A. Hoffmann, Eichendorff, Chamisso).</p>',
    weltbild: '<p>Gegen eine rein rationale, nützliche Welt („Philister“) setzen die Romantiker die <strong>Poetisierung</strong> des Lebens. Novalis: „Die Welt muß romantisiert werden.“ Friedrich Schlegel fordert eine <strong>„progressive Universalpoesie“</strong> (Athenäum-Fragment 116): Gattungen, Kunst und Leben sollen verschmelzen; das Werk bleibt unabschließbar. Zentral sind <strong>Sehnsucht</strong> (Symbol: die blaue Blume), das Unbewusste, Traum und Nacht. Die „schwarze“ Romantik zeigt die dunklen Seiten: Wahnsinn, Doppelgänger, Automaten, das Unheimliche.</p>',
    merkmale: [
      '<strong>Sehnsucht</strong> und Fernweh, Unendlichkeit; Symbol der <strong>blauen Blume</strong> (Novalis)',
      '<strong>Nacht, Mond, Traum</strong>, Dämmerung; das Unbewusste',
      '<strong>Natur</strong> als beseelter Raum und Spiegel der Seele; Wandern',
      'Hinwendung zu <strong>Mittelalter, Volkslied und Märchen</strong> (Grimm, „Des Knaben Wunderhorn“)',
      '<strong>Kunstmärchen</strong>, Fragment, Mischung der Gattungen',
      '<strong>Romantische Ironie</strong>: Der Autor durchbricht die Illusion und zeigt das Gemachte des Textes',
      '<strong>Schwarze Romantik</strong>: Wahnsinn, Doppelgänger, Automaten, Schauer (E.T.A. Hoffmann)',
      'Künstlerproblematik: Künstler gegen Bürger/Philister',
      'Musikalische Sprache, Synästhesie, Volksliedstrophe'
    ],
    textformen: ['Kunstmärchen', 'Erzählung/Novelle', 'Roman(fragment)', 'Lied/Volksliedstrophe', 'Fragment/Aphorismus'],
    dominant: ['lyrik', 'epik'],
    gattungen: {
      epik: '<strong>Kunstmärchen</strong> und Erzählungen: Tieck „Der blonde Eckbert“ (1797), Hoffmann „Der goldne Topf“ (1814), „Der Sandmann“ (1816), Eichendorff „Aus dem Leben eines Taugenichts“ (1826); Roman: Novalis „Heinrich von Ofterdingen“ (Fragment, 1802).',
      lyrik: '<strong>Lieder</strong> in Volksliedstrophen (Eichendorff, Brentano), Sammlungen wie „Des Knaben Wunderhorn“ (1805–1808); Novalis „Hymnen an die Nacht“ (1800).',
      drama: 'Weniger prägend: Tiecks Literaturkomödien („Der gestiefelte Kater“, 1797) mit romantischer Ironie.'
    },
    autoren: [
      { name: 'Novalis (Friedrich von Hardenberg)', werke: '„Hymnen an die Nacht“ (1800), „Heinrich von Ofterdingen“ (1802)' },
      { name: 'Friedrich Schlegel', werke: 'Athenäum-Fragmente (1798), „Lucinde“ (1799)' },
      { name: 'Ludwig Tieck', werke: '„Der blonde Eckbert“ (1797), „Der gestiefelte Kater“ (1797)' },
      { name: 'Clemens Brentano / Achim von Arnim', werke: '„Des Knaben Wunderhorn“ (1805–1808)' },
      { name: 'Jacob und Wilhelm Grimm', werke: '„Kinder- und Hausmärchen“ (1812/1815)' },
      { name: 'E.T.A. Hoffmann', werke: '„Der goldne Topf“ (1814), „Die Elixiere des Teufels“ (1815/16), „Der Sandmann“ (1816)' },
      { name: 'Joseph von Eichendorff', werke: '„Aus dem Leben eines Taugenichts“ (1826), „Mondnacht“, „Sehnsucht“' },
      { name: 'Adelbert von Chamisso', werke: '„Peter Schlemihls wundersame Geschichte“ (1814)' }
    ],
    gedichte: [
      { titel: 'Mondnacht', autor: 'Joseph von Eichendorff', jahr: '1837', auszug: 'Es war, als hätt der Himmel\nDie Erde still geküßt,\nDaß sie im Blütenschimmer\nVon ihm nun träumen müßt.\n\nDie Luft ging durch die Felder,\nDie Ähren wogten sacht,\nEs rauschten leis die Wälder,\nSo sternklar war die Nacht.\n\nUnd meine Seele spannte\nWeit ihre Flügel aus,\nFlog durch die stillen Lande,\nAls flöge sie nach Haus.', hinweis: 'Konjunktiv („als hätt“, „als flöge“) zeigt: Die Einheit von Himmel und Erde ist Sehnsucht, nicht Wirklichkeit. Volksliedstrophe, Kreuzreim.', url: ws('Mondnacht Eichendorff') },
      { titel: 'Wünschelrute', autor: 'Joseph von Eichendorff', jahr: '1835', auszug: 'Schläft ein Lied in allen Dingen,\nDie da träumen fort und fort,\nUnd die Welt hebt an zu singen,\nTriffst du nur das Zauberwort.', hinweis: 'Poetologisches Programm in vier Versen: Der Dichter erweckt die „Poesie der Welt“.', url: ws('Wünschelrute Eichendorff') },
      { titel: 'Wenn nicht mehr Zahlen und Figuren', autor: 'Novalis', jahr: 'um 1800', auszug: 'Wenn nicht mehr Zahlen und Figuren\nSind Schlüssel aller Kreaturen,\nWenn die, so singen oder küssen,\nMehr als die Tiefgelehrten wissen,', hinweis: 'Kritik an rein rationaler Welterklärung; Poesie und Liebe als Weg zur Wahrheit. Ideal zum Vergleich mit Fausts Monolog.', url: ws('Wenn nicht mehr Zahlen und Figuren') },
      { titel: 'Der Spinnerin Nachtlied', autor: 'Clemens Brentano', jahr: '1802', auszug: 'Es sang vor langen Jahren\nWohl auch die Nachtigall,\nDas war wohl süßer Schall,\nDa wir zusammen waren.', hinweis: 'Klangkunst: Reimwörter kehren variiert wieder und erzeugen das Kreisen der Spinnerin und ihrer Erinnerung.', url: ws('Der Spinnerin Nachtlied') }
    ],
    abgrenzung: '<p>Romantische Motive leben weiter: im Symbolismus und Expressionismus, in Film und Popkultur (Doppelgänger, künstliche Menschen, KI). Das bayerische Themenfeld 2027–2029 fragt ausdrücklich auch nach der Aufnahme romantischer Motive in Texten des 20. und 21. Jahrhunderts.</p>',
    wiki: 'Romantik',
    quellen: [{ titel: 'Wikipedia: Romantik', url: wp('Romantik') }, { titel: 'Wikisource: Joseph von Eichendorff', url: ws('Joseph von Eichendorff') }]
  },
  {
    id: 'biedermeier', name: 'Biedermeier', kurz: 'Biedermeier', zeitraum: 'ca. 1815–1848', von: 1815, bis: 1848, row: 0, hue: 90,
    kurzbeschreibung: 'Rückzug ins Private nach der politischen Enttäuschung: Idylle, Heimat, genaue Naturbeobachtung – und leise Melancholie.',
    hintergrund: '<p>Nach dem <strong>Wiener Kongress</strong> (1815) setzt Metternich die Restauration durch; die <strong>Karlsbader Beschlüsse</strong> (1819) bringen Zensur und Verfolgung liberaler „Demagogen“. Viele Bürger ziehen sich ins Private zurück. Der Name ist eine spätere, spöttische Bezeichnung nach der Witzfigur „Gottlieb Biedermaier“ in den „Fliegenden Blättern“ (ab 1855).</p>',
    weltbild: '<p>Bescheidenheit, Ordnung, Familie, Frömmigkeit und Pflicht; Zufriedenheit im Kleinen. Dahinter steht oft Resignation und <strong>Weltschmerz</strong>. Adalbert Stifter formuliert das „sanfte Gesetz“: Das Große zeige sich im Unscheinbaren (Vorrede zu „Bunte Steine“, 1853).</p>',
    merkmale: [
      '<strong>Idylle</strong>, Häuslichkeit, Heimat, Geselligkeit',
      'Genaue <strong>Naturbeobachtung</strong> und Liebe zum Detail',
      '<strong>Entsagung</strong>, Maß, Pflichtbewusstsein, Frömmigkeit',
      'Melancholie und Vergänglichkeitsbewusstsein unter der Oberfläche',
      'Unpolitische, konservative Grundhaltung',
      'Novelle, Erzählung, Dorfgeschichte; Lied und Ballade; Wiener Volksstück'
    ],
    textformen: ['Novelle/Erzählung', 'Lied', 'Ballade', 'Volksstück (Wien)', 'Dorfgeschichte'],
    dominant: ['epik', 'lyrik'],
    gattungen: {
      epik: 'Novellen und Erzählungen: Droste-Hülshoff „Die Judenbuche“ (1842), Stifter „Bunte Steine“ (1853), Grillparzer „Der arme Spielmann“ (1847), Gotthelf „Die schwarze Spinne“ (1842).',
      lyrik: 'Natur- und Stimmungslyrik: Mörike, Droste-Hülshoff, Lenau.',
      drama: 'Wiener Volkstheater (Raimund, Nestroy „Der Talisman“ 1840), Grillparzers Dramen.'
    },
    autoren: [
      { name: 'Eduard Mörike', werke: '„Er ist’s“ (1829), „Um Mitternacht“, „Mozart auf der Reise nach Prag“ (1855)' },
      { name: 'Annette von Droste-Hülshoff', werke: '„Die Judenbuche“ (1842), „Der Knabe im Moor“ (1842)' },
      { name: 'Adalbert Stifter', werke: '„Bunte Steine“ (1853), „Der Nachsommer“ (1857)' },
      { name: 'Franz Grillparzer', werke: '„Der arme Spielmann“ (1847)' },
      { name: 'Jeremias Gotthelf', werke: '„Die schwarze Spinne“ (1842)' },
      { name: 'Johann Nestroy', werke: '„Der Talisman“ (1840)' }
    ],
    gedichte: [
      { titel: 'Er ist’s', autor: 'Eduard Mörike', jahr: '1829', auszug: 'Frühling läßt sein blaues Band\nWieder flattern durch die Lüfte;\nSüße, wohlbekannte Düfte\nStreifen ahnungsvoll das Land.', hinweis: 'Personifikation des Frühlings, Synästhesie (Farbe, Duft, Klang); idyllisches Naturerleben.', url: ws('Er ist’s Mörike') },
      { titel: 'Der Knabe im Moor', autor: 'Annette von Droste-Hülshoff', jahr: '1842', auszug: 'O schaurig ist’s übers Moor zu gehn,\nWenn es wimmelt vom Heiderauche,\nSich wie Phantome die Dünste drehn\nUnd die Ranke häkelt am Strauche,', hinweis: 'Ballade: Natur wird unheimlich belebt; Angst eines Kindes; Rahmenvers „O schaurig ist’s …“.', url: ws('Der Knabe im Moor') }
    ],
    wiki: 'Biedermeier',
    quellen: [{ titel: 'Wikipedia: Biedermeier', url: wp('Biedermeier') }]
  },
  {
    id: 'vormaerz', name: 'Vormärz und Junges Deutschland', kurz: 'Vormärz', zeitraum: 'ca. 1830–1848', von: 1830, bis: 1848, row: 3, hue: 335,
    kurzbeschreibung: 'Literatur wird politisch: Kampf gegen Zensur und Fürstenherrschaft, für Freiheit, Einheit und soziale Gerechtigkeit – bis zur Revolution im März 1848.',
    hintergrund: '<p>Die Pariser <strong>Julirevolution</strong> (1830) ermutigt die Opposition; beim <strong>Hambacher Fest</strong> (1832) fordern Tausende Freiheit und Einheit. 1835 verbietet der Bundestag die Schriften des <strong>„Jungen Deutschland“</strong> (u. a. Heine, Gutzkow). Pauperismus und beginnende Industrialisierung verschärfen die soziale Not (<strong>Weberaufstand</strong> in Schlesien 1844). Die Epoche endet mit der <strong>Märzrevolution 1848</strong>.</p>',
    weltbild: '<p>Literatur soll eingreifen (<strong>Tendenzliteratur</strong>). Die „Kunstperiode“ der Klassik und Romantik (Heine) gilt als überholt. Materialistische Philosophie (Feuerbach) und Sozialismus (Marx/Engels, „Manifest der Kommunistischen Partei“, 1848) prägen das Denken. Büchners Satz aus dem „Hessischen Landboten“ (1834): „Friede den Hütten! Krieg den Palästen!“</p>',
    merkmale: [
      '<strong>Politisierung</strong>: Freiheit, Pressefreiheit, nationale Einheit, soziale Frage',
      '<strong>Zeitkritik, Satire und Ironie</strong>, oft gegen Zensur verschlüsselt',
      'Journalistische und operative Formen: <strong>Flugschrift</strong>, Reisebericht, Brief, Feuilleton',
      '<strong>Politische Lyrik</strong> und Lieder zum Mitsingen',
      'Abrechnung mit der Romantik (Heines Stimmungsbrüche)',
      'Realistische Darstellung der Unterschichten (Büchner) – Vorgriff auf Realismus und Naturalismus'
    ],
    textformen: ['Flugschrift', 'politisches Gedicht/Lied', 'Versepos', 'Reisebild/Feuilleton', 'Drama (offene Form)'],
    dominant: 'lyrik',
    gattungen: {
      lyrik: '<strong>Politische Lyrik</strong>: Heine „Die schlesischen Weber“ (1844), Herwegh „Gedichte eines Lebendigen“ (1841), Hoffmann von Fallersleben; Versepos „Deutschland. Ein Wintermärchen“ (1844).',
      drama: 'Büchner: „Dantons Tod“ (1835), „Leonce und Lena“ (1836), „Woyzeck“ (Fragment) – offene Form, Szenenfolge.',
      epik: 'Büchners „Lenz“ (1835/1839), Gutzkows „Wally, die Zweiflerin“ (1835), Reisebilder und Briefe (Heine, Börne).'
    },
    autoren: [
      { name: 'Heinrich Heine', werke: '„Buch der Lieder“ (1827), „Deutschland. Ein Wintermärchen“ (1844), „Die schlesischen Weber“ (1844)' },
      { name: 'Georg Büchner', werke: '„Der Hessische Landbote“ (1834), „Dantons Tod“ (1835), „Lenz“, „Leonce und Lena“ (1836), „Woyzeck“ (1836/37)' },
      { name: 'Georg Herwegh', werke: '„Gedichte eines Lebendigen“ (1841)' },
      { name: 'Hoffmann von Fallersleben', werke: '„Unpolitische Lieder“, „Das Lied der Deutschen“ (1841)' },
      { name: 'Ferdinand Freiligrath, Georg Weerth', werke: 'politische Gedichte' },
      { name: 'Friedrich Hebbel', werke: '„Maria Magdalena“ (1844) – bürgerliches Trauerspiel an der Schwelle zum Realismus' }
    ],
    gedichte: [
      { titel: 'Die schlesischen Weber', autor: 'Heinrich Heine', jahr: '1844', auszug: 'Im düstern Auge keine Träne,\nSie sitzen am Webstuhl und fletschen die Zähne:\nDeutschland, wir weben dein Leichentuch,\nWir weben hinein den dreifachen Fluch –\nWir weben, wir weben!', hinweis: 'Dreifacher Fluch gegen Gott, König und „falsches Vaterland“; Refrain wie ein Webrhythmus. Vgl. Hauptmanns „Die Weber“ (Referatsthema).', url: ws('Die schlesischen Weber Heine') },
      { titel: 'Nachtgedanken', autor: 'Heinrich Heine', jahr: '1844', auszug: 'Denk ich an Deutschland in der Nacht,\nDann bin ich um den Schlaf gebracht,\nIch kann nicht mehr die Augen schließen,\nUnd meine heißen Tränen fließen.', hinweis: 'Exil-Gedicht: Sehnsucht nach der Mutter und Kritik am Vaterland, Stimmungsbruch am Schluss.', url: ws('Nachtgedanken Heine') }
    ],
    wiki: 'Vormärz',
    quellen: [{ titel: 'Wikipedia: Vormärz', url: wp('Vormärz') }, { titel: 'Wikipedia: Junges Deutschland', url: wp('Junges Deutschland (Literatur)') }]
  },
  {
    id: 'realismus', name: 'Poetischer (Bürgerlicher) Realismus', kurz: 'Realismus', zeitraum: 'ca. 1848–1890', von: 1848, bis: 1890, row: 1, hue: 165,
    kurzbeschreibung: 'Die bürgerliche Wirklichkeit wird genau erzählt – aber „verklärt“: Das Hässliche bleibt ausgeblendet, Humor versöhnt.',
    hintergrund: '<p>Nach dem <strong>Scheitern der Revolution 1848/49</strong> wendet sich das Bürgertum von der Politik ab und der Wirtschaft zu. Industrialisierung, Eisenbahn, Naturwissenschaften und Technik verändern das Leben; 1871 wird das <strong>Deutsche Kaiserreich</strong> gegründet (Gründerzeit). Gesellschaftliche Konventionen – Ehe, Stand, Ehre – bestimmen das Leben.</p>',
    weltbild: '<p>Die Wirklichkeit soll dargestellt werden, aber nicht als bloßes Abbild, sondern <strong>poetisch verklärt</strong>: Das Wesentliche und Allgemeine im Besonderen zeigen (Begriff „poetischer Realismus“ nach Otto Ludwig). <strong>Humor</strong> (Keller, Raabe) und Ironie (Fontane) schaffen Distanz und Versöhnung. Grundhaltung: Skepsis, Resignation, Entsagung.</p>',
    merkmale: [
      'Darstellung der <strong>bürgerlichen Lebenswelt</strong> und ihrer Konflikte (Ehe, Stand, Konvention, Ehre)',
      '<strong>Verklärung</strong>: Elend und Hässliches werden ausgespart oder gemildert',
      '<strong>Humor</strong>, Ironie und Erzählerdistanz',
      'Psychologisch genaue Figurenzeichnung; Dialoge (Fontane: „Plauderton“)',
      '<strong>Symbole, Dingsymbole, Leitmotive</strong> und Vorausdeutungen',
      '<strong>Rahmenerzählung</strong> (Storm, Meyer) – Subjektivität des Erzählens wird bewusst',
      'Regionalität: Nordfriesland (Storm), Mark Brandenburg (Fontane), Schweiz (Keller)'
    ],
    textformen: ['Novelle', 'Gesellschaftsroman', 'Bildungsroman', 'Ballade', 'Dinggedicht'],
    dominant: 'epik',
    gattungen: {
      epik: '<strong>Novelle</strong> als Leitgattung (Storm nennt sie „die Schwester des Dramas“) und <strong>Gesellschaftsroman</strong> (Fontane).',
      drama: 'Weniger prägend; Hebbel; Gustav Freytags „Die Technik des Dramas“ (1863) mit dem Pyramidenmodell.',
      lyrik: 'Stimmungs- und Heimatlyrik (Storm), Balladen (Fontane), <strong>Dinggedicht</strong> (C. F. Meyer).'
    },
    autoren: [
      { name: 'Theodor Fontane', werke: '„Irrungen, Wirrungen“ (1888), „Effi Briest“ (1894/95), „Der Stechlin“ (1898), Balladen' },
      { name: 'Theodor Storm', werke: '„Immensee“ (1849), „Der Schimmelreiter“ (1888), „Die Stadt“' },
      { name: 'Gottfried Keller', werke: '„Romeo und Julia auf dem Dorfe“ (1856), „Der grüne Heinrich“' },
      { name: 'Wilhelm Raabe', werke: '„Der Hungerpastor“ (1864), „Stopfkuchen“ (1891)' },
      { name: 'Conrad Ferdinand Meyer', werke: '„Der römische Brunnen“, Novellen' },
      { name: 'Marie von Ebner-Eschenbach', werke: '„Krambambuli“ (1883)' }
    ],
    gedichte: [
      { titel: 'Die Stadt', autor: 'Theodor Storm', jahr: '1852', auszug: 'Am grauen Strand, am grauen Meer\nUnd seitab liegt die Stadt;\nDer Nebel drückt die Dächer schwer,\nUnd durch die Stille braust das Meer\nEintönig um die Stadt.', hinweis: 'Graue, eintönige Heimat – und doch: „Der Jugend Zauber für und für / Ruht lächelnd doch auf dir“. Verklärung im Kleinen.', url: ws('Die Stadt Storm') },
      { titel: 'Der römische Brunnen', autor: 'Conrad Ferdinand Meyer', jahr: '1882', auszug: 'Aufsteigt der Strahl und fallend gießt\nEr voll der Marmorschale Rund,\nDie, sich verschleiernd, überfließt\nIn einer zweiten Schale Grund;', hinweis: 'Dinggedicht: Ein Gegenstand wird genau beschrieben und wird zum Symbol („Und jede nimmt und gibt zugleich / Und strömt und ruht“).', url: ws('Der römische Brunnen Meyer') },
      { titel: 'Herr von Ribbeck auf Ribbeck im Havelland', autor: 'Theodor Fontane', jahr: '1889', auszug: 'Herr von Ribbeck auf Ribbeck im Havelland,\nEin Birnbaum in seinem Garten stand,', hinweis: 'Ballade mit Humor; Gegensatz von großzügigem altem und geizigem jungem Ribbeck.', url: ws('Herr von Ribbeck auf Ribbeck im Havelland') }
    ],
    abgrenzung: '<p><strong>Realismus vs. Naturalismus:</strong> Beide wollen Wirklichkeit zeigen. Der Realismus „verklärt“ und wählt aus, der Naturalismus will die Wirklichkeit möglichst ungeschönt und vollständig abbilden – gerade auch Elend, Krankheit und Triebe. Hauptmanns „Bahnwärter Thiel“ steht genau an dieser Schwelle.</p>',
    wiki: 'Realismus (Literatur)',
    quellen: [{ titel: 'Wikipedia: Realismus (Literatur)', url: wp('Realismus (Literatur)') }]
  },
  {
    id: 'naturalismus', name: 'Naturalismus', kurz: 'Naturalism.', zeitraum: 'ca. 1880–1900', von: 1880, bis: 1900, row: 0, hue: 25,
    kurzbeschreibung: 'Literatur als Experiment: Der Mensch ist durch Vererbung und Milieu bestimmt – gezeigt wird die ungeschönte Wirklichkeit der Unterschichten.',
    hintergrund: '<p><strong>Hochindustrialisierung</strong> und rasantes Wachstum der Großstädte (Berlin), Elend der Arbeiter in Mietskasernen, „soziale Frage“, Sozialistengesetze (1878–1890). Naturwissenschaften prägen das Denken: <strong>Darwin</strong> (Evolution, 1859), Positivismus, <strong>Hippolyte Taines Milieutheorie</strong> (race, milieu, moment). Vorbilder: Émile Zola, Henrik Ibsen, Leo Tolstoi. Zentren: München (Zeitschrift „Die Gesellschaft“, 1885) und Berlin (Theaterverein <strong>„Freie Bühne“</strong>, 1889).</p>',
    weltbild: '<p><strong>Determinismus</strong>: Der Mensch ist nicht frei, sondern durch Vererbung, Umwelt (Milieu) und Zeitumstände bestimmt. Literatur soll wie ein wissenschaftliches Experiment Wirklichkeit untersuchen. Arno Holz’ Formel: <strong>„Kunst = Natur – x“</strong> – x sind die unvermeidlichen Darstellungsmittel, die möglichst klein werden sollen.</p>',
    merkmale: [
      'Möglichst exakte, <strong>ungeschönte Wirklichkeitswiedergabe</strong> („Wahrheit statt Schönheit“)',
      '<strong>Determinismus</strong>: Vererbung und Milieu bestimmen die Figuren',
      'Themen: Armut, Alkoholismus, Krankheit, Prostitution, Gewalt, Großstadt, Arbeitswelt',
      '<strong>Sekundenstil</strong>: zeitdeckendes Erzählen mit Pausen, Geräuschen, Satzabbrüchen (Holz/Schlaf, „Papa Hamlet“ 1889)',
      '<strong>Dialekt</strong>, Soziolekt, Umgangssprache',
      'Ausführliche, fast epische <strong>Regieanweisungen</strong>; Milieuschilderung',
      'Kein Held, oft <strong>Kollektiv</strong> („Die Weber“); offene, tragische Schlüsse'
    ],
    textformen: ['soziales Drama', 'Novelle/Studie/Skizze', 'Großstadtlyrik'],
    dominant: 'drama',
    gattungen: {
      drama: '<strong>Soziales Drama</strong>: Hauptmann „Vor Sonnenaufgang“ (1889), „Die Weber“ (1892), „Der Biberpelz“ (1893); Holz/Schlaf „Die Familie Selicke“ (1890); Halbe „Jugend“ (1893).',
      epik: 'Kurze Prosa, Skizzen, Studien: Hauptmann „Bahnwärter Thiel“ (1888, „novellistische Studie“), Holz/Schlaf „Papa Hamlet“ (1889).',
      lyrik: 'Weniger bedeutend: Großstadt- und Soziallyrik, Arno Holz („Buch der Zeit“ 1886, „Phantasus“ mit Mittelachsenlyrik).'
    },
    autoren: [
      { name: 'Gerhart Hauptmann', werke: '„Bahnwärter Thiel“ (1888), „Vor Sonnenaufgang“ (1889), „Die Weber“ (1892), „Der Biberpelz“ (1893)' },
      { name: 'Arno Holz / Johannes Schlaf', werke: '„Papa Hamlet“ (1889), „Die Familie Selicke“ (1890)' },
      { name: 'Arno Holz', werke: '„Die Kunst. Ihr Wesen und ihre Gesetze“ (1891), „Phantasus“' },
      { name: 'Max Halbe', werke: '„Jugend“ (1893)' },
      { name: 'Hermann Sudermann', werke: '„Die Ehre“ (1889)' },
      { name: 'Wilhelm Bölsche', werke: '„Die naturwissenschaftlichen Grundlagen der Poesie“ (1887)' }
    ],
    gedichte: [
      { titel: 'Ihr Dach stieß fast bis an die Sterne', autor: 'Arno Holz', jahr: '1886 („Buch der Zeit“)', auszug: 'Ihr Dach stieß fast bis an die Sterne,\nvom Hof her stampfte die Fabrik,\nes war die richtige Mietskaserne\nmit Flur- und Leierkastenmusik.', hinweis: 'Großstadtmilieu: Mietskaserne, Fabriklärm; ein armer Dichter unter dem Dach. Typisch naturalistische Stoffe, aber noch in traditioneller Strophenform.', url: ws('Arno Holz Buch der Zeit') }
    ],
    abgrenzung: '<p>Gegen den Naturalismus entstehen schon um 1890 <strong>Gegenströmungen</strong> (Impressionismus, Symbolismus, Neuromantik), die Innenwelt, Schönheit und Stimmung betonen – siehe <a href="#/epoche/jahrhundertwende">Jahrhundertwende</a>.</p>',
    wiki: 'Naturalismus (Literatur)',
    quellen: [{ titel: 'Wikipedia: Naturalismus (Literatur)', url: wp('Naturalismus (Literatur)') }]
  },
  {
    id: 'jahrhundertwende', name: 'Jahrhundertwende und frühe Moderne', kurz: 'Jh.-Wende', zeitraum: 'ca. 1890–1920', von: 1890, bis: 1920, row: 2, hue: 305,
    kurzbeschreibung: 'Fin de siècle: Ich-Krise, Sprachkrise und Kult der Schönheit – Impressionismus, Symbolismus und Décadence als Gegenbewegungen zum Naturalismus.',
    hintergrund: '<p>Im wilhelminischen Kaiserreich stehen Fortschrittsglaube (Elektrizität, Auto, Großstadt) und Krisengefühl (<strong>Fin de siècle</strong>) nebeneinander. Prägende Denker: <strong>Nietzsche</strong> („Gott ist tot“; Apollinisches und Dionysisches in „Die Geburt der Tragödie“, 1872), <strong>Freud</strong> („Die Traumdeutung“, 1899/1900: das Unbewusste), Ernst Mach („Das Ich ist unrettbar“). In Wien entsteht die <strong>Wiener Moderne</strong> (Schnitzler, Hofmannsthal). Der Erste Weltkrieg beendet die Epoche.</p>',
    weltbild: '<p>Die Gewissheit eines festen Ichs und einer verlässlichen Sprache zerbricht: Hofmannsthals „Ein Brief“ (Chandos-Brief, 1902) beschreibt, wie einem die Worte „im Munde wie modrige Pilze“ zerfallen (<strong>Sprachkrise</strong>). Gegen den Naturalismus setzen viele Autoren auf Innenwelt, Stimmung, Schönheit und Form: <strong>l’art pour l’art</strong> (Kunst um der Kunst willen). <strong>Décadence</strong>: Faszination für Verfall, Krankheit, Tod und verfeinerte Sinnlichkeit.</p>',
    merkmale: [
      '<strong>Stilpluralismus</strong>: Impressionismus, Symbolismus, Ästhetizismus, Décadence, Neuromantik, Jugendstil, Heimatkunst',
      '<strong>Ich-Krise</strong> und <strong>Sprachkrise</strong>',
      'Innenwelt und Psychologie: <strong>innerer Monolog</strong> (Schnitzler, „Lieutenant Gustl“ 1900)',
      '<strong>Eros und Tod</strong>, Verfall, Krankheit; Venedig als Stadt des Untergangs',
      '<strong>Künstlerproblematik</strong>: Künstler gegen Bürger (Thomas Mann)',
      'Rückgriff auf Mythos (Nietzsche: <strong>apollinisch – dionysisch</strong>)',
      'Lyrik: Klang, Symbol, <strong>Dinggedicht</strong> (Rilke), Formstrenge (George)'
    ],
    textformen: ['Novelle/Erzählung', 'Roman', 'symbolistische Lyrik', 'Dinggedicht', 'Einakter/lyrisches Drama'],
    dominant: ['epik', 'lyrik'],
    gattungen: {
      epik: '<strong>Novellen</strong> und Romane mit psychologischer Tiefe: Thomas Mann („Tonio Kröger“ 1903, „Der Tod in Venedig“ 1912), Schnitzler („Lieutenant Gustl“ 1900), Rilke („Malte Laurids Brigge“ 1910).',
      lyrik: 'Symbolismus und Impressionismus: Stefan George, Rilke („Neue Gedichte“ 1907/08), Hofmannsthal.',
      drama: 'Lyrische Dramen und Einakter (Hofmannsthal), Gesellschaftsstücke (Schnitzler „Reigen“), Wedekind „Frühlings Erwachen“ (1891).'
    },
    autoren: [
      { name: 'Thomas Mann', werke: '„Buddenbrooks“ (1901), „Tonio Kröger“ (1903), „Der Tod in Venedig“ (1912)' },
      { name: 'Rainer Maria Rilke', werke: '„Der Panther“ (1902/03), „Herbsttag“ (1902), „Neue Gedichte“ (1907/08), „Die Aufzeichnungen des Malte Laurids Brigge“ (1910)' },
      { name: 'Hugo von Hofmannsthal', werke: '„Ballade des äußeren Lebens“ (1896), „Ein Brief“ (1902), „Jedermann“ (1911)' },
      { name: 'Arthur Schnitzler', werke: '„Lieutenant Gustl“ (1900), „Fräulein Else“ (1924)' },
      { name: 'Stefan George', werke: '„Das Jahr der Seele“ (1897)' },
      { name: 'Heinrich Mann', werke: '„Professor Unrat“ (1905), „Der Untertan“ (1914/18)' }
    ],
    gedichte: [
      { titel: 'Der Panther', autor: 'Rainer Maria Rilke', jahr: '1902/03', auszug: 'Sein Blick ist vom Vorübergehn der Stäbe\nso müd geworden, daß er nichts mehr hält.\nIhm ist, als ob es tausend Stäbe gäbe\nund hinter tausend Stäben keine Welt.', hinweis: 'Dinggedicht: genaue Beobachtung eines Tieres im Pariser Jardin des Plantes wird zum Symbol für Gefangenschaft und Wahrnehmungsverlust.', url: ws('Der Panther Rilke') },
      { titel: 'Herbsttag', autor: 'Rainer Maria Rilke', jahr: '1902', auszug: 'Herr: es ist Zeit. Der Sommer war sehr groß.\nLeg deinen Schatten auf die Sonnenuhren,\nund auf den Fluren laß die Winde los.', hinweis: 'Gebetsform, Vergänglichkeit, Einsamkeit („Wer jetzt kein Haus hat, baut sich keines mehr“).', url: ws('Herbsttag Rilke') },
      { titel: 'Komm in den totgesagten park und schau', autor: 'Stefan George', jahr: '1897', auszug: 'Komm in den totgesagten park und schau:\nDer schimmer ferner lächelnder gestade ·\nDer reinen wolken unverhofftes blau\nErhellt die weiher und die bunten pfade.', hinweis: 'Symbolismus/Ästhetizismus: Kleinschreibung, eigene Zeichensetzung, erlesene Farben – Kunst als Gegenwelt.', url: ws('Komm in den totgesagten park') }
    ],
    wiki: 'Fin de siècle',
    quellen: [{ titel: 'Wikipedia: Fin de siècle', url: wp('Fin de siècle') }, { titel: 'Wikipedia: Wiener Moderne', url: wp('Wiener Moderne') }]
  },
  {
    id: 'expressionismus', name: 'Expressionismus', kurz: 'Expr.', zeitraum: 'ca. 1910–1925', von: 1910, bis: 1925, row: 0, hue: 48,
    kurzbeschreibung: 'Schrei statt Abbild: Großstadt, Krieg und Weltende in kühnen Bildern – Ich-Zerfall und die Hoffnung auf einen „neuen Menschen“.',
    hintergrund: '<p>Großstädte wachsen zu Metropolen, Technik und Masse prägen das Leben. Eine junge Generation lehnt sich gegen die wilhelminischen „Väter“ auf. Der <strong>Erste Weltkrieg</strong> (1914–1918) mit seinen Materialschlachten wird zuerst von manchen als Erneuerung ersehnt, dann zum Trauma. Zeitschriften: <strong>„Der Sturm“</strong> (1910), <strong>„Die Aktion“</strong> (1911); Anthologie <strong>„Menschheitsdämmerung“</strong> (1919/20). Nähe zur Malerei („Die Brücke“, „Der Blaue Reiter“).</p>',
    weltbild: '<p>Kunst soll das Innere ausdrücken (lat. <em>expressio</em>), nicht die Oberfläche abbilden. Gefühl von <strong>Weltende</strong>, Bedrohung und <strong>Ich-Dissoziation</strong>; zugleich pathetischer Aufbruch und Sehnsucht nach einem „neuen Menschen“. Zivilisations- und Kriegskritik.</p>',
    merkmale: [
      'Themen: <strong>Großstadt</strong> (dämonisiert), <strong>Krieg</strong>, <strong>Weltende</strong>, Wahnsinn, Krankheit, Tod, Verfall',
      '<strong>Ästhetik des Hässlichen</strong> (Benn, „Morgue“ 1912)',
      '<strong>Reihungsstil / Simultanstil</strong>: unverbundene Bilder nebeneinander (van Hoddis, „Weltende“)',
      'Kühne <strong>Metaphern</strong>, Chiffren, <strong>Personifikationen</strong>, Farbsymbolik, Neologismen',
      'Zerbrochene Syntax, Ellipsen, Ausrufe, Pathos („O Mensch!“)',
      'Oft Spannung zwischen <strong>strenger Form</strong> (Sonett) und chaotischem Inhalt',
      'Stationen- und Verkündigungsdrama'
    ],
    textformen: ['Lyrik', 'Stationendrama', 'kurze Prosa'],
    dominant: 'lyrik',
    gattungen: {
      lyrik: 'Die prägende Gattung: Heym, van Hoddis, Trakl, Benn, Lasker-Schüler, Lichtenstein, Stadler, Stramm.',
      drama: 'Stationen- und Verkündigungsdrama: Georg Kaiser „Die Bürger von Calais“ (1914), Ernst Toller „Die Wandlung“ (1919).',
      epik: 'Kurzprosa; Franz Kafka („Die Verwandlung“ 1915) schreibt zeitgleich, lässt sich aber keiner Richtung eindeutig zuordnen.'
    },
    autoren: [
      { name: 'Georg Heym', werke: '„Der Gott der Stadt“ (1910), „Der Krieg“ (1911)' },
      { name: 'Jakob van Hoddis', werke: '„Weltende“ (1911)' },
      { name: 'Georg Trakl', werke: '„Grodek“ (1914), „Verfall“' },
      { name: 'Gottfried Benn', werke: '„Morgue und andere Gedichte“ (1912)' },
      { name: 'Else Lasker-Schüler', werke: '„Weltende“ (1905), Liebesgedichte' },
      { name: 'Alfred Lichtenstein / Ernst Stadler / August Stramm', werke: '„Die Dämmerung“ (1911) / „Fahrt über die Kölner Rheinbrücke bei Nacht“ (1913) / „Patrouille“ (1915)' }
    ],
    gedichte: [
      { titel: 'Weltende', autor: 'Jakob van Hoddis', jahr: '1911', auszug: 'Dem Bürger fliegt vom spitzen Kopf der Hut,\nIn allen Lüften hallt es wie Geschrei.\nDachdecker stürzen ab und gehn entzwei\nUnd an den Küsten – liest man – steigt die Flut.', hinweis: 'Reihungsstil: Katastrophen und Banalitäten stehen gleichrangig nebeneinander („Die meisten Menschen haben einen Schnupfen“) – groteske Weltuntergangsstimmung.', url: ws('Weltende van Hoddis') },
      { titel: 'Der Gott der Stadt', autor: 'Georg Heym', jahr: '1910', auszug: 'Auf einem Häuserblocke sitzt er breit.\nDie Winde lagern schwarz um seine Stirn.\nEr schaut voll Wut, wo fern in Einsamkeit\nDie letzten Häuser in das Land verirrn.', hinweis: 'Die Großstadt als zorniger Götze (Baal); Farbsymbolik schwarz/rot; strenger Bau (Kreuzreim, Jambus) gegen apokalyptischen Inhalt.', url: ws('Der Gott der Stadt Heym') },
      { titel: 'Grodek', autor: 'Georg Trakl', jahr: '1914', auszug: 'Am Abend tönen die herbstlichen Wälder\nVon tödlichen Waffen, die goldnen Ebenen\nUnd blauen Seen, darüber die Sonne\nDüstrer hinrollt;', hinweis: 'Kriegserfahrung in Chiffren und Farben; Trakl starb kurz darauf (1914).', url: ws('Grodek Trakl') }
    ],
    abgrenzung: '<p><strong>Expressionismus vs. Neue Sachlichkeit:</strong> Aus dem Pathos und dem Schrei wird in den 1920er-Jahren nüchterne Beobachtung und Ironie.</p>',
    wiki: 'Expressionismus (Literatur)',
    quellen: [{ titel: 'Wikipedia: Expressionismus (Literatur)', url: wp('Expressionismus (Literatur)') }]
  },
  {
    id: 'weimarer-republik', name: 'Weimarer Republik und Neue Sachlichkeit', kurz: 'Weimarer Rep.', zeitraum: '1918–1933', von: 1918, bis: 1933, row: 1, hue: 190,
    kurzbeschreibung: 'Nüchtern, ironisch, gesellschaftskritisch: Großstadt, Angestellte und Arbeitslosigkeit – und Brechts episches Theater.',
    hintergrund: '<p>Nach Kriegsende und <strong>Novemberrevolution</strong> entsteht die erste deutsche Demokratie. Versailler Vertrag (1919), Hyperinflation (1923), die „Goldenen Zwanziger“ (1924–1929) mit Kino, Radio, Kabarett und Revue, dann die <strong>Weltwirtschaftskrise</strong> (1929) mit Massenarbeitslosigkeit und politischer Radikalisierung bis zur Machtübertragung an Hitler am 30. Januar 1933.</p>',
    weltbild: '<p>Nach dem Pathos des Expressionismus: <strong>Sachlichkeit</strong>, Nüchternheit, Desillusionierung. Literatur soll gebraucht werden, aufklären, unterhalten, Gesellschaft analysieren. Neue Lebenswelten: Angestellte, „neue Frau“, Großstadtverkehr, Medien.</p>',
    merkmale: [
      '<strong>Nüchterner, beobachtender Stil</strong>, Ironie, Distanz',
      'Themen: Großstadt, Angestelltenwelt, Arbeitslosigkeit, Inflation, Krieg und seine Folgen',
      '<strong>Reportage, Dokument, Montage</strong> (Döblin, „Berlin Alexanderplatz“ 1929)',
      '<strong>Gebrauchslyrik</strong>, Chanson, Kabarett (Kästner, Tucholsky)',
      '<strong>Zeitroman</strong> und Großstadtroman',
      '<strong>Episches Theater</strong> (Brecht, Piscator), Volksstück (Horváth, Fleißer)'
    ],
    textformen: ['Zeitroman', 'Reportage', 'Gebrauchslyrik/Song', 'episches Theater', 'Volksstück'],
    dominant: ['epik', 'drama'],
    gattungen: {
      drama: '<strong>Episches Theater</strong>: Brecht/Weill „Die Dreigroschenoper“ (1928); Volksstücke von Horváth („Geschichten aus dem Wiener Wald“, 1931).',
      epik: '<strong>Zeit- und Großstadtromane</strong>: Döblin „Berlin Alexanderplatz“ (1929), Kästner „Fabian“ (1931), Keun „Das kunstseidene Mädchen“ (1932), Fallada „Kleiner Mann – was nun?“ (1932), Remarque „Im Westen nichts Neues“ (1928/29).',
      lyrik: '<strong>Gebrauchslyrik</strong> und Songs: Kästner („Herz auf Taille“ 1928), Tucholsky, Brecht („Hauspostille“ 1927).'
    },
    autoren: [
      { name: 'Bertolt Brecht', werke: '„Trommeln in der Nacht“ (1922), „Hauspostille“ (1927), „Die Dreigroschenoper“ (1928)' },
      { name: 'Alfred Döblin', werke: '„Berlin Alexanderplatz“ (1929)' },
      { name: 'Erich Kästner', werke: '„Herz auf Taille“ (1928), „Emil und die Detektive“ (1929), „Fabian“ (1931)' },
      { name: 'Irmgard Keun', werke: '„Das kunstseidene Mädchen“ (1932)' },
      { name: 'Hans Fallada', werke: '„Kleiner Mann – was nun?“ (1932)' },
      { name: 'Kurt Tucholsky', werke: '„Augen in der Großstadt“ (1930), Satiren in der „Weltbühne“' },
      { name: 'Erich Maria Remarque', werke: '„Im Westen nichts Neues“ (1928/29)' },
      { name: 'Ödön von Horváth', werke: '„Geschichten aus dem Wiener Wald“ (1931)' }
    ],
    gedichte: [
      { titel: 'Augen in der Großstadt', autor: 'Kurt Tucholsky', jahr: '1930', auszug: 'Wenn du zur Arbeit gehst\nam frühen Morgen,\nwenn du am Bahnhof stehst\nmit deinen Sorgen:', hinweis: 'Flüchtige Begegnungen in der Masse („Vorbei, verweht, nie wieder“); Du-Anrede, Refrain – Gebrauchslyrik.', url: ws('Augen in der Großstadt') },
      { titel: 'Sachliche Romanze', autor: 'Erich Kästner', jahr: '1928/29', auszug: 'Als sie einander acht Jahre kannten\n(und man darf sagen: sie kannten sich gut),', hinweis: 'Das Ende einer Liebe wird betont nüchtern erzählt – die Gefühle zeigen sich gerade im Verschwiegenen. (Kurzzitat, Text urheberrechtlich geschützt.)', url: '' },
      { titel: 'Erinnerung an die Marie A.', autor: 'Bertolt Brecht', jahr: '1920', auszug: 'An jenem Tag im blauen Mond September\nStill unter einem jungen Pflaumenbaum', hinweis: 'Die Geliebte ist vergessen, nur eine Wolke bleibt in Erinnerung – Spiel mit der romantischen Liebeslyrik. (Kurzzitat.)', url: '' }
    ],
    wiki: 'Neue Sachlichkeit (Literatur)',
    quellen: [{ titel: 'Wikipedia: Neue Sachlichkeit (Literatur)', url: wp('Neue Sachlichkeit (Literatur)') }, { titel: 'Wikipedia: Literatur der Weimarer Republik', url: 'https://de.wikipedia.org/w/index.php?search=Literatur+der+Weimarer+Republik' }]
  },
  {
    id: 'exil', name: 'Exilliteratur', kurz: 'Exil', zeitraum: '1933–1945', von: 1933, bis: 1945, row: 0, hue: 250,
    kurzbeschreibung: 'Vertrieben, verboten, verbrannt: Über 2000 Schriftstellerinnen und Schriftsteller schreiben im Exil gegen den Nationalsozialismus.',
    hintergrund: '<p>Nach der Machtübernahme der NSDAP (1933) folgen Gleichschaltung, die <strong>Bücherverbrennung am 10. Mai 1933</strong> und die Verfolgung jüdischer und politisch missliebiger Autorinnen und Autoren. Viele fliehen nach Prag, Paris, Amsterdam, Moskau, Skandinavien, in die USA oder nach Mexiko. Zweiter Weltkrieg (1939–1945), Holocaust. In Deutschland bleibende, verdeckt kritische Autoren werden der <strong>„Inneren Emigration“</strong> zugerechnet.</p>',
    weltbild: '<p>Kampf gegen den Faschismus und Aufklärung über das NS-Regime; Erfahrung von Heimatverlust, Sprachverlust und Armut; Frage nach der Verantwortung der Intellektuellen. Die deutsche Sprache wird zur „tragbaren Heimat“.</p>',
    merkmale: [
      'Themen: <strong>Flucht, Heimatverlust</strong>, Exilalltag, Widerstand, Analyse des Faschismus',
      '<strong>Historische Romane</strong> mit Gegenwartsbezug (H. Mann, Feuchtwanger)',
      '<strong>Parabelstücke</strong> und episches Theater (Brecht)',
      'Klagende und appellierende Lyrik; Tarnformen in der Inneren Emigration',
      'Exilverlage (z. B. Querido, Amsterdam) und Exilzeitschriften'
    ],
    textformen: ['Exil- und Zeitroman', 'historischer Roman', 'Parabelstück', 'Gedicht', 'Novelle'],
    dominant: 'epik',
    gattungen: {
      epik: 'Seghers „Das siebte Kreuz“ (1942), Klaus Mann „Mephisto“ (1936), Zweig „Schachnovelle“ (1942), Horváth „Jugend ohne Gott“ (1937), Feuchtwanger „Die Geschwister Oppermann“ (1933).',
      drama: 'Brecht: „Leben des Galilei“ (1938/39), „Mutter Courage und ihre Kinder“ (1939, UA 1941 Zürich), „Der gute Mensch von Sezuan“.',
      lyrik: 'Brecht „Svendborger Gedichte“ (1939), Mascha Kaléko, Nelly Sachs, Else Lasker-Schüler.'
    },
    autoren: [
      { name: 'Bertolt Brecht', werke: '„Svendborger Gedichte“ (1939), „Leben des Galilei“, „Mutter Courage und ihre Kinder“' },
      { name: 'Anna Seghers', werke: '„Das siebte Kreuz“ (1942), „Transit“' },
      { name: 'Klaus Mann', werke: '„Mephisto“ (1936)' },
      { name: 'Thomas Mann', werke: '„Lotte in Weimar“ (1939), „Doktor Faustus“ (1947)' },
      { name: 'Stefan Zweig', werke: '„Schachnovelle“ (1942), „Die Welt von Gestern“ (1942)' },
      { name: 'Mascha Kaléko / Nelly Sachs', werke: 'Exillyrik; Sachs: „In den Wohnungen des Todes“ (1947)' }
    ],
    gedichte: [
      { titel: 'An die Nachgeborenen', autor: 'Bertolt Brecht', jahr: '1939', auszug: 'Wirklich, ich lebe in finsteren Zeiten!', hinweis: 'Rechenschaft eines Exilierten: Selbst ein „Gespräch über Bäume“ wird zum Verbrechen, weil es über Untaten schweigt. (Kurzzitat.)', url: '' },
      { titel: 'Emigranten-Monolog', autor: 'Mascha Kaléko', jahr: '1945', auszug: 'Ich hatte einst ein schönes Vaterland –\nso sang schon der Flüchtling Heine.', hinweis: 'Intertextueller Bezug zu Heine; Heimatverlust mit leiser Ironie. (Kurzzitat.)', url: '' }
    ],
    wiki: 'Exilliteratur',
    quellen: [{ titel: 'Wikipedia: Exilliteratur', url: wp('Exilliteratur') }]
  },
  {
    id: 'nachkrieg', name: 'Nachkriegsliteratur', kurz: 'Nachkrieg', zeitraum: 'ca. 1945–1967', von: 1945, bis: 1967, row: 1, hue: 130,
    kurzbeschreibung: 'Trümmer, Heimkehr, Schuld: ein Neuanfang mit karger Sprache – Kurzgeschichte, Gruppe 47 und die Frage nach der Vergangenheit.',
    hintergrund: '<p>Kriegsende am 8. Mai 1945, zerstörte Städte, Flucht und Vertreibung, Besatzungszonen, Entnazifizierung. 1949 Gründung von BRD und DDR. Im Westen Wirtschaftswunder und Westbindung, Kalter Krieg, 1961 Mauerbau. Die <strong>Gruppe 47</strong> (1947–1967, Hans Werner Richter) prägt die westdeutsche Literatur. In den 1960ern beginnt die Auseinandersetzung mit den NS-Verbrechen (Frankfurter Auschwitz-Prozesse 1963–1965).</p>',
    weltbild: '<p>Misstrauen gegen große Worte, die der Nationalsozialismus missbraucht hat: <strong>„Kahlschlag“</strong> (Wolfgang Weyrauch, 1949) – Neubeginn mit einfacher, genauer Sprache. Heinrich Böll: „Bekenntnis zur Trümmerliteratur“ (1952). Adorno: Nach Auschwitz ein Gedicht zu schreiben, sei barbarisch – ein Satz, der die Lyrik herausforderte.</p>',
    merkmale: [
      '<strong>Trümmer- und Kahlschlagliteratur</strong>: Bestandsaufnahme, reduzierte Sprache',
      'Themen: Krieg, Heimkehr, Hunger, Schuld, Verdrängung',
      '<strong>Kurzgeschichte</strong> nach amerikanischem Vorbild: unvermittelter Anfang, offener Schluss, Alltagsausschnitt, Wendepunkt',
      'Hörspiel als neues Medium (Eich, Borchert)',
      'Hermetische Lyrik (Celan), Naturlyrik',
      'Parabel und Groteske im Drama (Frisch, Dürrenmatt); später Vergangenheitsbewältigung (Grass, Böll, Weiss)'
    ],
    textformen: ['Kurzgeschichte', 'Hörspiel', 'Gedicht', 'Roman', 'Parabeldrama/Groteske'],
    dominant: 'epik',
    gattungen: {
      epik: '<strong>Kurzgeschichte</strong> (Borchert „Das Brot“ 1946, Böll „Wanderer, kommst du nach Spa…“ 1950); Romane: Grass „Die Blechtrommel“ (1959), Frisch „Homo faber“ (1957).',
      drama: 'Borchert „Draußen vor der Tür“ (1947); Dürrenmatt „Der Besuch der alten Dame“ (1956), „Die Physiker“ (1962); Frisch „Andorra“ (1961).',
      lyrik: 'Eich „Inventur“, Celan „Todesfuge“ (1948), Bachmann „Die gestundete Zeit“ (1953).'
    },
    autoren: [
      { name: 'Wolfgang Borchert', werke: '„Draußen vor der Tür“ (1947), „Das Brot“, „Nachts schlafen die Ratten doch“' },
      { name: 'Heinrich Böll', werke: '„Wanderer, kommst du nach Spa…“ (1950), „Ansichten eines Clowns“ (1963)' },
      { name: 'Günter Eich', werke: '„Inventur“ (1945/48), Hörspiel „Träume“ (1951)' },
      { name: 'Paul Celan', werke: '„Todesfuge“ (1948)' },
      { name: 'Ingeborg Bachmann', werke: '„Die gestundete Zeit“ (1953)' },
      { name: 'Max Frisch / Friedrich Dürrenmatt', werke: '„Homo faber“, „Andorra“ / „Der Besuch der alten Dame“, „Die Physiker“' },
      { name: 'Günter Grass', werke: '„Die Blechtrommel“ (1959)' }
    ],
    gedichte: [
      { titel: 'Inventur', autor: 'Günter Eich', jahr: '1945/48', auszug: 'Dies ist meine Mütze,\ndies ist mein Mantel,', hinweis: 'Kahlschlag: ein Kriegsgefangener zählt seine wenigen Dinge auf – Anapher, schlichte Sprache, Bestandsaufnahme nach dem Zusammenbruch. (Kurzzitat.)', url: '' },
      { titel: 'Todesfuge', autor: 'Paul Celan', jahr: '1948', auszug: 'Schwarze Milch der Frühe wir trinken sie abends', hinweis: 'Gedicht über die Vernichtungslager: Oxymoron, musikalische Fugenform, Leitmotive („der Tod ist ein Meister aus Deutschland“). (Kurzzitat.)', url: '' },
      { titel: 'Die gestundete Zeit', autor: 'Ingeborg Bachmann', jahr: '1953', auszug: 'Es kommen härtere Tage.\nDie auf Widerruf gestundete Zeit\nwird sichtbar am Horizont.', hinweis: 'Warnung vor Verdrängung und Bedrohung in der Wirtschaftswunderzeit; Metapher aus der Geldsprache. (Kurzzitat.)', url: '' }
    ],
    wiki: 'Trümmerliteratur',
    quellen: [{ titel: 'Wikipedia: Trümmerliteratur', url: wp('Trümmerliteratur') }, { titel: 'Wikipedia: Gruppe 47', url: wp('Gruppe 47') }]
  },
  {
    id: 'ddr', name: 'Literatur der DDR', kurz: 'DDR', zeitraum: '1949–1990', von: 1949, bis: 1990, row: 0, hue: 225,
    kurzbeschreibung: 'Zwischen Parteiauftrag und Eigensinn: vom sozialistischen Realismus zu subjektiver, verdeckt kritischer Literatur – bis zum Mauerfall.',
    hintergrund: '<p>Gründung der DDR am 7. Oktober 1949; SED-Diktatur, Zensur (Druckgenehmigungsverfahren) und Stasi. Volksaufstand am <strong>17. Juni 1953</strong>, <strong>Mauerbau 1961</strong>. „Bitterfelder Weg“ (1959): „Greif zur Feder, Kumpel!“. Nach dem 11. Plenum (1965) Verbote, unter Honecker ab 1971 kurze Lockerung. Die <strong>Ausbürgerung Wolf Biermanns</strong> (1976) führt zu Protesten und zur Ausreise vieler Autorinnen und Autoren. Mauerfall am 9. November 1989, Wiedervereinigung am 3. Oktober 1990.</p>',
    weltbild: '<p>Offizielles Programm: <strong>sozialistischer Realismus</strong> – parteilich, volksverbunden, mit positivem Helden, der den Aufbau des Sozialismus zeigt; antifaschistischer Gründungsmythos. Viele Autorinnen und Autoren (z. B. aus dem Exil zurückgekehrte Kommunisten) glaubten an dieses Ideal – und gerieten in Konflikt mit der Wirklichkeit. Später: Subjektivität, Zweifel, verdeckte Kritik („Sklavensprache“, Mythen, Parabeln).</p>',
    merkmale: [
      '<strong>Aufbau- und Produktionsliteratur</strong>, „Ankunftsliteratur“ (Reimann, „Ankunft im Alltag“ 1961)',
      'Konflikt <strong>Individuum – Kollektiv</strong>; Thema der Teilung („Der geteilte Himmel“ 1963)',
      'Zunehmend <strong>subjektive</strong> und kritische Texte (Christa Wolf)',
      '<strong>Verdeckte Kritik</strong>: Anspielung, Mythos, Parabel; Liedermacher (Biermann)',
      'Lyrikwelle der 1960er (Volker Braun, Sarah Kirsch, Günter Kunert)',
      'Jugendsprache und Intertextualität (Plenzdorf, „Die neuen Leiden des jungen W.“ 1972)'
    ],
    textformen: ['Roman', 'Erzählung', 'politische Lyrik/Lied', 'Drama (Heiner Müller)'],
    dominant: 'epik',
    gattungen: {
      epik: 'Christa Wolf „Der geteilte Himmel“ (1963), „Nachdenken über Christa T.“ (1968), „Kassandra“ (1983); Jurek Becker „Jakob der Lügner“ (1969); Brigitte Reimann „Franziska Linkerhand“ (1974).',
      lyrik: 'Biermann („Ermutigung“), Volker Braun, Sarah Kirsch, Reiner Kunze; Brecht „Buckower Elegien“ (1953).',
      drama: 'Brecht am Berliner Ensemble; Heiner Müller („Die Hamletmaschine“ 1977); Plenzdorf (Bühnenfassung).'
    },
    autoren: [
      { name: 'Christa Wolf', werke: '„Der geteilte Himmel“ (1963), „Kindheitsmuster“ (1976), „Kassandra“ (1983), „Was bleibt“ (1990)' },
      { name: 'Ulrich Plenzdorf', werke: '„Die neuen Leiden des jungen W.“ (1972/73)' },
      { name: 'Wolf Biermann', werke: 'Lieder, „Ermutigung“' },
      { name: 'Volker Braun', werke: '„Hinze-Kunze-Roman“ (1985), „Das Eigentum“ (1990)' },
      { name: 'Reiner Kunze', werke: '„Die wunderbaren Jahre“ (1976)' },
      { name: 'Heiner Müller', werke: '„Die Hamletmaschine“ (1977)' },
      { name: 'Hedda Zinner', werke: 'Schriftstellerin, nach dem sowjetischen Exil in der DDR; Großmutter Jenny Erpenbecks und Vorbild der „Schriftstellerin“ in „Heimsuchung“' }
    ],
    gedichte: [
      { titel: 'Die Lösung', autor: 'Bertolt Brecht', jahr: '1953', auszug: 'Wäre es da\nNicht doch einfacher, die Regierung\nLöste das Volk auf und\nWählte ein anderes?', hinweis: 'Reaktion auf den 17. Juni 1953: bittere Ironie gegenüber der Partei, die dem Volk Vertrauensverlust vorwirft. (Kurzzitat.)', url: '' },
      { titel: 'Ermutigung', autor: 'Wolf Biermann', jahr: '1966/68', auszug: 'Du, laß dich nicht verhärten\nin dieser harten Zeit.', hinweis: 'Lied für verfolgte Freunde (zuerst Peter Huchel gewidmet); Wortspiel hart/verhärten. (Kurzzitat.)', url: '' }
    ],
    wiki: 'Literatur der DDR',
    quellen: [{ titel: 'Wikipedia: Literatur der DDR', url: wp('Literatur der DDR') }]
  },
  {
    id: 'literatur-1968', name: 'Politisierung und Neue Subjektivität', kurz: '1968 ff.', zeitraum: 'ca. 1967–1989 (BRD, Österreich, Schweiz)', von: 1967, bis: 1989, row: 1, hue: 15,
    kurzbeschreibung: 'Erst politisch, dokumentarisch und experimentell, dann wieder persönlich: von Dokumentartheater und konkreter Poesie zur Neuen Subjektivität.',
    hintergrund: '<p>Studentenbewegung und APO (1968), Protest gegen den Vietnamkrieg und die Notstandsgesetze, später RAF-Terror (Deutscher Herbst 1977), Ölkrise, Umwelt- und Friedensbewegung. 1968 erklärt das „Kursbuch“ provokant den „Tod der Literatur“ – gemeint ist eine unpolitische Kunst.</p>',
    weltbild: '<p>Zuerst: Literatur als Mittel politischer Aufklärung und Veränderung. Ab den 1970er-Jahren Enttäuschung über die Politik und Hinwendung zum eigenen Erleben (<strong>Neue Subjektivität</strong>), zu Alltag, Biografie und Geschlechterrollen.</p>',
    merkmale: [
      '<strong>Dokumentarliteratur</strong>: Dokumentartheater (Weiss, Hochhuth), Reportage (Wallraff)',
      'Arbeiterliteratur (Gruppe 61, Werkkreis Literatur der Arbeitswelt)',
      '<strong>Politische Lyrik</strong> (Erich Fried)',
      '<strong>Konkrete Poesie</strong>: Sprache als Material, visuelle Anordnung (Gomringer, Jandl)',
      '<strong>Neue Subjektivität</strong>: Autobiografisches, Alltag, Innerlichkeit (Handke)',
      'Frauenliteratur und <strong>Väterliteratur</strong> (Auseinandersetzung mit der NS-Vergangenheit der Eltern)'
    ],
    textformen: ['Dokumentartheater', 'Reportage', 'politisches Gedicht', 'Konkrete Poesie', 'autobiografische Prosa'],
    dominant: ['drama', 'lyrik'],
    gattungen: {
      drama: 'Dokumentartheater: Peter Weiss „Die Ermittlung“ (1965), Rolf Hochhuth „Der Stellvertreter“ (1963); Handke „Publikumsbeschimpfung“ (1966).',
      lyrik: 'Erich Fried, Ernst Jandl, Eugen Gomringer („schweigen“), Rolf Dieter Brinkmann.',
      epik: 'Böll „Die verlorene Ehre der Katharina Blum“ (1974), Handke „Wunschloses Unglück“ (1972), Süskind „Das Parfum“ (1985), Ransmayr „Die letzte Welt“ (1988).'
    },
    autoren: [
      { name: 'Peter Weiss', werke: '„Die Ermittlung“ (1965)' },
      { name: 'Heinrich Böll', werke: '„Die verlorene Ehre der Katharina Blum“ (1974)' },
      { name: 'Günter Wallraff', werke: '„Ganz unten“ (1985)' },
      { name: 'Erich Fried', werke: '„und Vietnam und“ (1966), „Was es ist“ (1983)' },
      { name: 'Ernst Jandl / Eugen Gomringer', werke: '„lichtung“ (1966) / „schweigen“ (1954)' },
      { name: 'Peter Handke', werke: '„Publikumsbeschimpfung“ (1966), „Wunschloses Unglück“ (1972)' },
      { name: 'Patrick Süskind', werke: '„Das Parfum“ (1985)' }
    ],
    gedichte: [
      { titel: 'lichtung', autor: 'Ernst Jandl', jahr: '1966', auszug: 'manche meinen\nlechts und rinks', hinweis: 'Konkrete Poesie: Vertauschung von l und r macht die Verwechselbarkeit politischer Richtungen sichtbar. (Kurzzitat.)', url: '' },
      { titel: 'schweigen', autor: 'Eugen Gomringer', jahr: '1954', auszug: '', hinweis: 'Das Wort „schweigen“ wird vierzehnmal in einem Block angeordnet; in der Mitte bleibt eine Lücke – dort „ist“ das Schweigen. Konkrete Poesie zeigt, statt zu beschreiben.', url: '' }
    ],
    wiki: 'Neue Subjektivität',
    quellen: [{ titel: 'Wikipedia: Neue Subjektivität', url: wp('Neue Subjektivität') }, { titel: 'Wikipedia: Konkrete Poesie', url: wp('Konkrete Poesie') }]
  },
  {
    id: 'gegenwart', name: 'Gegenwartsliteratur (seit 1990)', kurz: 'Gegenwart', zeitraum: 'seit 1990', von: 1990, bis: 2030, row: 0, hue: 160,
    kurzbeschreibung: 'Vielstimmig: Wende- und Erinnerungsromane, Popliteratur, Migration und Herkunft, Autofiktion – ohne einheitlichen Epochenstil.',
    hintergrund: '<p><strong>Wiedervereinigung</strong> (1990) und Transformation im Osten: Arbeitsplätze, Biografien und Eigentumsverhältnisse ändern sich. Für Grundstücke gilt der Grundsatz <strong>„Rückgabe vor Entschädigung“</strong> (Vermögensgesetz 1990) – viele Familien in Ostdeutschland verlieren Häuser an Alteigentümer oder deren Erben. Dazu: Globalisierung, Digitalisierung, Migration, Klimakrise und eine lebendige Erinnerungskultur.</p>',
    weltbild: '<p>Keine Leitideologie, sondern <strong>Pluralität</strong>. Wichtige Fragen: Wie erzählt man Geschichte und Erinnerung? Was ist Heimat, Herkunft, Identität? Wem gehört was? Viele Texte verbinden Familiengeschichte mit Zeitgeschichte.</p>',
    merkmale: [
      '<strong>Wende- und Nachwenderoman</strong> (Brussig, Schulze, Tellkamp, Ruge, Seiler)',
      '<strong>Erinnerungs-, Familien- und Generationenromane</strong> (Timm, Erpenbeck „Heimsuchung“)',
      '<strong>Popliteratur</strong> der 1990er (Kracht „Faserland“, Stuckrad-Barre)',
      'Literatur der <strong>Migration und Herkunft</strong> (Özdamar, Zaimoglu, Stanišić)',
      '<strong>Autofiktion</strong>: Mischung aus Autobiografie und Fiktion',
      'Postmodernes Spiel mit Geschichte (Kehlmann „Die Vermessung der Welt“ 2005)',
      'Postdramatisches Theater (Jelinek), Poetry Slam'
    ],
    textformen: ['Roman', 'Erzählung', 'Lyrik', 'postdramatisches Theater', 'Poetry Slam'],
    dominant: 'epik',
    gattungen: {
      epik: '<strong>Roman</strong> als Leitgattung: Erpenbeck „Heimsuchung“ (2008), Tellkamp „Der Turm“ (2008), Ruge „In Zeiten des abnehmenden Lichts“ (2011), Herrndorf „Tschick“ (2010), Stanišić „Herkunft“ (2019).',
      lyrik: 'Durs Grünbein, Jan Wagner („Regentonnenvariationen“ 2014), Ulrike Draesner, Nora Gomringer; Poetry Slam.',
      drama: 'Postdramatisches Theater (Elfriede Jelinek, René Pollesch); Bühnenadaptionen von Romanen – auch „Heimsuchung“ wird gespielt.'
    },
    autoren: [
      { name: 'Jenny Erpenbeck', werke: '„Heimsuchung“ (2008), „Gehen, ging, gegangen“ (2015), „Kairos“ (2021; International Booker Prize 2024)' },
      { name: 'Thomas Brussig / Ingo Schulze', werke: '„Helden wie wir“ (1995) / „Simple Storys“ (1998)' },
      { name: 'Uwe Tellkamp / Eugen Ruge', werke: '„Der Turm“ (2008) / „In Zeiten des abnehmenden Lichts“ (2011)' },
      { name: 'Christian Kracht', werke: '„Faserland“ (1995)' },
      { name: 'Daniel Kehlmann', werke: '„Die Vermessung der Welt“ (2005)' },
      { name: 'Judith Hermann', werke: '„Sommerhaus, später“ (1998)' },
      { name: 'Wolfgang Herrndorf', werke: '„Tschick“ (2010)' },
      { name: 'Saša Stanišić', werke: '„Herkunft“ (2019)' }
    ],
    gedichte: [
      { titel: 'Das Eigentum', autor: 'Volker Braun', jahr: '1990', auszug: 'Da bin ich noch: mein Land geht in den Westen.\nKRIEG DEN HÜTTEN FRIEDE DEN PALÄSTEN.', hinweis: 'Wendegedicht: kehrt Büchners Parole aus dem „Hessischen Landboten“ um und fragt, was vom „Eigentum“ bleibt – passt hervorragend zu „Heimsuchung“ und „Woyzeck“. (Kurzzitat.)', url: '' },
      { titel: 'Regentonnenvariationen (Gedichtband)', autor: 'Jan Wagner', jahr: '2014', auszug: '', hinweis: 'Gegenwartslyrik, die Alltagsdinge (Giersch, Regentonne, Teebeutel) in genauen Bildern und traditionellen Formen neu sehen lässt; Preis der Leipziger Buchmesse 2015.', url: '' }
    ],
    abgrenzung: '<p>„Heimsuchung“ gehört zur <strong>Erinnerungsliteratur nach 1989</strong>: Ein Ort wird zum Gedächtnis eines ganzen Jahrhunderts, und die Eigentumsfragen nach der Wende sind Ausgangspunkt des Romans.</p>',
    wiki: 'Wendeliteratur',
    quellen: [{ titel: 'Wikipedia: Wendeliteratur', url: wp('Wendeliteratur') }, { titel: 'Wikipedia: Gegenwartsliteratur', url: wp('Gegenwartsliteratur') }]
  }
];
