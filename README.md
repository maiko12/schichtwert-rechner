# Schichtwert-Rechner

Ein bewusst kleines GitHub/Codex-Testprojekt mit Vanilla HTML, CSS, JavaScript, Node-Tests und GitHub Pages.

## Lokal testen

Node.js 22 oder neuer installieren. Im Projektordner `npm test` ausführen.
Für die Browseranzeige mit einem lokalen Webserver arbeiten (z.B. in VS Code mit Live Server), nicht `index.html` direkt als `file://` öffnen.

## Deployment

In GitHub unter Settings > Pages > Build and deployment > Source **GitHub Actions** wählen.
Der Workflow `.github/workflows/test-and-deploy.yml` testet Pull Requests und veröffentlicht nach einem erfolgreichen Push auf `main`.

## Sicherheit

GitHub Pages ist öffentlich. Keine personenbezogenen Schichtdaten oder Geheimnisse hochladen. Die App speichert keine Daten.

## Aufgaben für Codex

1. Ergänze eine Pausendauer in Minuten, die von der Schichtdauer abgezogen wird. Füge passende Tests hinzu.
2. Ermögliche eine CSV-Ausgabe der Berechnungen.

## Annahme

Endzeit vor oder gleich Startzeit bedeutet Folgetag; maximal 24 Stunden pro Schicht.
