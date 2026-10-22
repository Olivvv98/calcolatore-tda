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

## Istruttori

L’istruttore si sceglie da un elenco a tendina, ordinato in automatico. Per aggiungerne uno **per tutti** scrivi il nome in `listino.js`, nella lista `istruttori`.

Dall’app si può anche scegliere “＋ Aggiungi un nuovo istruttore…”: il nome resta solo su quel dispositivo (e si può togliere dall’elenco con “Rimuovi questo istruttore”).

## Pagamenti

Per ogni partecipante, la sezione Pagamento è in due passaggi:

1. **Chi paga?** Il partecipante stesso oppure un altro partecipante della giornata (per esempio un genitore che paga per un figlio).
2. **Come paga?** Contanti, Bonifico oppure Contanti + bonifico. In quest’ultimo caso si indicano i contanti e il resto va in automatico a bonifico.

Il pulsante in basso e il riepilogo mostrano i contanti da consegnare e i bonifici incassati.

## Dati

La pagina non invia dati a nessun server. La giornata in corso resta salvata solo nel browser del dispositivo finché non si preme “Nuova giornata”.
