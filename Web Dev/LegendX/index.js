// document.addEventListener('keydown', function(event) {
//     if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
//         event.preventDefault();
//     }
// });
// document.addEventListener('contextmenu', event => event.preventDefault());


// dichiarazione di tutiti i bottoni
    var Lavori = document.getElementById('Lavori');
    var Home = document.getElementById('Home');
    var Contattaci = document.getElementById('Contattaci');
    var Candidature = document.getElementById('Candidature');


var cliccato = Home; // tiene conto dell' ultimo cliccato
var stringhe;
var bodyCont = document.getElementById('cont');

// default home
HomeDo();


function publish (stringhe) {
    bodyCont.innerHTML = stringhe;
}

// Quando clicchi home
function HomeDo() { console.log('Home');  
    cliccato.classList.remove("bg_color");
    cliccato = Home;
    cliccato.classList.add("bg_color");
    
    // cambio contenuto
        stringhe = "<p> LegendX è un gruppo di giovani talenti specializzati nello sviluppo web, nella creazione di bot per Discord e nella realizzazione di plugin per Minecraft. Siamo qui per trasformare le tue idee, anche le più piccole, in realtà concrete e funzionali. Che tu abbia bisogno di un sito web personalizzato, di un bot per gestire la tua community su Discord, o di un plugin unico per il tuo server Minecraft, il team di LegendX è pronto a offrirti soluzioni su misura per ogni tua esigenza. Con noi, la tua visione diventa Leggenda. </p>";
    publish(stringhe);
}
// Quando clicchi lavori
function LavoriDo() { console.log('Lavori'); 
    cliccato.classList.remove("bg_color");
    cliccato = Lavori;
    cliccato.classList.add("bg_color"); 

    // cambio contenuto
        stringhe = "";
    publish(stringhe);
}
// Quando clicchi contattaci
function ContattaciDo() { console.log('Contattaci'); 
    cliccato.classList.remove("bg_color");
    cliccato = Contattaci;
    cliccato.classList.add("bg_color");   

    // cambio contenuto 
        stringhe = " <div id=\"discord\" ><a href=\"https://discord.gg/VaQxwhug\" style=\"width: 100%;\"><img id=\"dsIMg\" src=\"assets/img/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png\"></a></div> ";
    
    publish(stringhe);
}



var block = false;
let domande = "" ;


// Quando clicchi candidature
function CandidatureDo() { 
    console.log('Candidature'); 
    cliccato.classList.remove("bg_color");
    cliccato = Candidature;
    cliccato.classList.add("bg_color");  
    
    detectVPN(); // bool vpn
    console.log("VPN per h1: "+block);

    if (block) { // se hai vpn
        console.log('Error');
        const stringhe = "<h1 style=\"color: red;\">Con VPN attiva non è possibile fare la candidatura </h1>" + "<p> in caso di errore contattaci nella sezione dedicata nel sito";
        publish(stringhe);
        return;
    }
    // cambio contenuto 
stringhe =  "<div class=\"center\" style=\"gap: 10px;\">"
            +
            "<button id=\"StaffCand\" class=\"C_button\" onclick=\"firstCond()\"> Staff </button>" 
            + 
            "<button id=\"WDevCand\" class=\"C_button\" onclick=\"secCond()\"> Web Dev </button>"
            +
            "<button id=\"WDesCand\"  class=\"C_button \" onclick=\"secCond()\"> Web Designer </button>"
            +
            "<button id=\"JavaCand\"  class=\"C_button \" onclick=\"secCond()\"> Java Dev </button>"
            +
            "<button id=\"PDevCand\"  class=\"C_button\" onclick=\"secCond()\"> Phython Dev </button>"
            +
            "</div>"

            + "<domande>" +
             domande 
            + "</domande>" 
            ;
            // il cambio di classi si trova in script.js

if (domande != ''){

    stringhe += "<button onclick=\"inviaWebhook()\">Invia Candidatura</button>";
}

            
    publish(stringhe); // scrivi a schermo
    // firstCond();
}

// ------ SCELTA DEI MODULI - candidature
let allButton = document.getElementsByClassName('C_button');; // che bottone hai cliccato
let counterDomande; // tiene conto di quante domande ci sono per poi dirlo a webhook



let domandeStock = "<div id=\"Candidature\">" +
"<input type=\"text\" id=\"Nome\" placeholder=\"Inserisci il tuo nome *\">" +
"<input type=\"text\" id=\"Utente\" placeholder=\"Inserisci il tuo nickname discord *\">";


    async function firstCond() {        
        counterDomande = 2;
        
        buttonClick = document.getElementById('StaffCand');; // che bottone hai cliccato        
            
            domande = domandeStock +
            "<input type=\"text\" id=\"R1\" class=\"Risposta\" placeholder=\"cos' è il negro *\">" 
            +
            "<input type=\"text\" id=\"R2\" class=\"Risposta\" placeholder=\"cos' è il brut *\">"
            ;

            changeTipo("staff", counterDomande) // manda il tipo di form in file webhook.js
            CandidatureDo(); // scrivi a schermo
    }
    
    async function secCond() {    
        counterDomande = 3;
        buttonClick = document.getElementById('WDevCand');


        
        domande = "" + domandeStock +
        "<p id=\"D1\">Quali tool usi per programmare siti web *</p>" +
        "<input type=\"text\" id=\"R1\" class=\"Risposta\" placeholder=\"tool\">"
        +
        "<p id=\"D1\">Quali siti web usi per aiutarti nella programmazione? </p>" +
        "<input type=\"text\" id=\"R2\" class=\"Risposta\" placeholder=\"siti web\">"
        +
        "<p id=\"D1\">Quali linguaggi di programmazione / sviluppo web conosci? *</p>" +
        "<input type=\"text\" id=\"R3\" class=\"Risposta\" placeholder=\"linguaggi di programmazione / sviluppo web\">"
        ;

        buttonClick.after = 

        changeTipo("Web Dev", counterDomande) // manda il tipo di form in file webhook.js
        CandidatureDo();
    }


