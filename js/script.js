// chiedi all'utente il nome

let nome = prompt("Scrivi il tuo nome");

// chiedi all'utente il cognome

let cognome = prompt("Scrivi il tuo cognome")

// chiedi all'utente il suo colore preferito

let colore = prompt("Scrivi il tuo colore preferito")

// password 

const password = nome + cognome + colore + Math.floor(Math.random () * 99 + 1) ;
console.log(password);

// stampa password sul browser

document.getElementById("dati-utente").innerHTML = "La tua password è: " + password;
