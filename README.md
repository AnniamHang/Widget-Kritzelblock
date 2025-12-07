# Widget: Kritzelblock für Notion

Dieses kleine Widget zeigt ein Notizzettel-Icon. Beim Anklicken öffnet sich eine Unterseite (note.html), in der du schnell Gedanken festhalten kannst. Die Notizen werden lokal im Browser (localStorage) gespeichert.

Installation & Nutzung

1. Hosting
   - Am einfachsten: aktiviere GitHub Pages in diesem Repo (Settings → Pages) und wähle den Branch `main` als Quelle. Nach wenigen Minuten ist die Seite verfügbar unter `https://<dein-github-name>.github.io/Widget-Kritzelblock/`.

2. In Notion einbinden
   - In Notion: `/embed` → URL einfügen: `https://<dein-github-name>.github.io/Widget-Kritzelblock/index.html`
   - Das Widget erscheint als eingebettete Seite. Beim Klick auf den Notizzettel öffnet sich die Unterseite innerhalb des Embeds.

3. Hinweise
   - Die Notizen werden lokal im Browser des Benutzers gespeichert (localStorage). Es gibt keine Server-seitige Speicherung.
   - Wenn du möchtest, kann ich optional eine Version mit Synchronisation (z. B. über einen Backend-Dienst) erstellen, damit Notizen zwischen Geräten synchronisiert werden.

Dateien
- index.html — Startseite mit Icon
- note.html — Die Unterseite zum Schreiben
- style.css — Styling
- script.js — Autosave und Aktionen
