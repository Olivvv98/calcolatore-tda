/* =====================================================
   LISTINO TDA – unica fonte dei prezzi del calcolatore.
   Per cambiare un prezzo modifica il numero e salva (Commit changes).
   Aggiorna anche la data in 'versione'.
   ===================================================== */
const LISTINO = {
  versione: '21/10/2026',
  daConfermare: ['Prezzi a colpo per le quantità fuori taglio', 'Ingresso al campo di Sinnai'],
  tesseramento: 5,
  campi: [
    {id:'orroli', nome:'Orroli', ingresso:15},
    {id:'sinnai', nome:'Sinnai', ingresso:0},
    {id:'altro',  nome:'Altro campo', ingresso:null}
  ],
  pacchetti: [
    {id:'',      nome:'Nessun pacchetto', sigla:'', prezzo:0},
    {id:'A',     nome:'A', sigla:'A', prezzo:35},
    {id:'B',     nome:'B', sigla:'B', prezzo:60},
    {id:'C',     nome:'C', sigla:'C', prezzo:80},
    {id:'DELTA', nome:'Delta', sigla:'Delta', prezzo:50},
    {id:'ECHO',  nome:'Echo', sigla:'Echo', prezzo:85},
    {id:'LEZ',   nome:'Lezione privata', sigla:'Lezione', prezzo:25, orario:true},
    {id:'LINEA', nome:'Solo linea di tiro', sigla:'Solo linea di tiro', prezzo:0}
  ],
  calibri: [
    {id:'22',  nome:'.22',   tagli:{10:5,20:10,40:17},            colpo:0.5},
    {id:'9',   nome:'9x21',  tagli:{5:5,10:10,20:17},            colpo:1},
    {id:'223', nome:'.223',  tagli:{5:10,10:20,20:30,40:50},      colpo:2},
    {id:'762', nome:'7,62',  tagli:{5:5,10:20,20:30,40:50},      colpo:2},
    {id:'12',  nome:'12x70', tagli:{5:8,10:14},              colpo:1.5},
    {id:'308', nome:'.308',  tagli:{5:15,10:25,15:35,20:40}, colpo:3}
  ],
  scontiPercentuali: [5,10,15],
  metodi: ['Contanti','Bonifico'],
  // Elenco a tendina dell'istruttore (ordinato in automatico). Per aggiungerne uno per tutti, scrivilo qui.
  // Dall'app si può anche aggiungere un istruttore nuovo, ma resta solo su quel dispositivo.
  istruttori: [
    'Alessandro Cossu',
    'Alessandro De Filippi',
    'Teofilo Loi',
    'Stefano Mirabella',
    'Mauro Mostallino',
    'Simone Pellitteri',
    'Nicola Molino',
    'Antonio Olivieri'
  ]
};
