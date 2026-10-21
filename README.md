# Calcolatore TDA

Pagina web per gli istruttori di Tactical Defence Academy: calcola gli importi dal listino e prepara il messaggio per il registro attività.

## File

| File | A cosa serve |
|---|---|
| `index.html` | La pagina del calcolatore |
| `listino.js` | **Il listino prezzi.** È l’unico file da modificare quando cambiano i prezzi |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Icona e nome quando la pagina viene aggiunta alla schermata Home |

## Come aggiornare un prezzo

1. Apri `listino.js` su GitHub e clicca sull’icona della matita.
2. Cambia il numero (per esempio `prezzo:85` → `prezzo:90`) e aggiorna la data in `versione`.
3. Clicca **Commit changes**.
4. Dopo qualche minuto la pagina online usa il nuovo listino.

Nel listino si usano il punto per i decimali (`0.5`) e la virgola per separare le voci: non cancellarle.

## Dati

La pagina non invia dati a nessun server. La giornata in corso resta salvata solo nel browser del dispositivo finché non si preme “Nuova giornata”.
