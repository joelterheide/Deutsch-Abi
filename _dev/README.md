# Deutsch-Abi – Entwicklung

Die Lern-App (`/deutsch-abi/`) ist eine statische Seite ohne Build-Schritt.
GitHub Pages veröffentlicht den Ordner unverändert; Ordner mit `_` am Anfang
(wie dieser) lässt Jekyll weg.

## Aufbau

| Datei | Aufgabe |
| --- | --- |
| `index.html`, `style.css`, `app.js` | Oberfläche, Hash-Router (`#/werk/faust/inhalt` …), Suche, Quiz, Live-Quelle |
| `data/werke/*.js` | ein Werk pro Datei, alle im gleichen Schema (Vorlage: `faust.js`), gesammelt in `index.js` |
| `data/epochen.js` | Epochen für Zeitstrahl und Epochenseiten (Merkmale, Textformen, Gedichte) |
| `data/stilmittel.js` | Stilmittel-Glossar; `verwandt` verhindert mehrdeutige Quizfragen |
| `data/theorie.js` | Theorie- und Methodenseiten (Erzähl-, Dramentheorie, Lyrik, Interpretieren, Abitur Bayern) |
| `data/abiformen.js` | Seite „Weitere Abi-Formen“ (Erörterung, materialgestütztes Argumentieren/Informieren, Redeanalyse) mit Übungen |
| `data/referate.js`, `data/motive.js`, `data/quellen.js` | Referatsthemen, Motivvergleiche, Quellenliste |
| `data/handouts.js` | geprüfte Inhalte aus den Referats-Handouts (nur Klartext, keine Namen von Schülerinnen und Schülern) |

Texte in den Datendateien dürfen einfaches HTML enthalten (`<strong>`, Links auf `#/…`).
Inhalte aus dem Netz (Wikipedia-Abruf) werden immer escaped.

## Prüfen

```sh
node deutsch-abi/_dev/check.mjs
```

Das Skript prüft Pflichtfelder, doppelte IDs, Überlappungen im Zeitstrahl und
alle internen Links (`#/werk/…`, `#/epoche/…`, `#/stilmittel/…`).
Für einen Blick im Browser im Repo-Wurzelverzeichnis `python3 -m http.server`
starten und <http://localhost:8000/deutsch-abi/> öffnen.

## Neues Werk hinzufügen

1. `data/werke/faust.js` kopieren, Felder ausfüllen (Epoche muss in `epochen.js` existieren).
2. In `data/werke/index.js` importieren und ins Array aufnehmen.
3. `node deutsch-abi/_dev/check.mjs` laufen lassen.
