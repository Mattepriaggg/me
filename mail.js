
window.onload = function() {
    alarm("Attenzione! questa pagina utilizza la tua posizione per compilare il form per questioni di sicurezza e evitare spam. Se non vuoi che venga utilizzata la tua posizione, chiudi questa pagina e contatta direttamente il dj per la richiesta.");
    
}


// creato con EmailJS
document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    var luogo = await getLocationString();  

    if(luogo == "Posizione non disponibile" || luogo == "Geolocalizzazione non supportata") {
        alert("Non è stato possibile ottenere la tua posizione. Assicurati di aver concesso i permessi di geolocalizzazione al sito o rivolgiti direttamente al DJ per la richiesta.");
        return;
    }

    console.log("Luogo rilevato:", luogo);
    inviaEmail(luogo); 
});


function inviaEmail(luogo) {
    var nome = document.getElementById('nome').value;
    var canzone = document.getElementById('canzone').value;
    var dove = document.getElementById('dove').value;
    var reply = document.getElementById('reply').value || "mix.pria@gmail.com";

    var parametri = {
        nome: nome,
        canzone: canzone,
        dove: dove + " " + luogo,
        reply: reply,
    };

    var conferma = confirm("Sei sicuro di voler inviare i dati? " +
        "\nNome: " + nome + 
        ",\nCanzone: " + canzone + 
        ",\nDove: " + dove + 
        ",\nLuogo: " + luogo);

    if (!conferma) {
        alert("Invio annullato.");
        return;
    }

    emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
        .then(function(response) {
            alert("Mail inviata con successo!");
        }, function(error) {
            alert("Errore durante l’invio: " + JSON.stringify(error));
        });
}


// function inviaEmail() {
//     console.log("Invio email...");
//     var nome = document.getElementById('nome').value;
//     var canzone = document.getElementById('canzone').value;
//     var dove = document.getElementById('dove').value;
//     var reply = document.getElementById('reply').value;

//     if(reply == "") reply = "mix.pria@gmail.com";

//     var parametri = {
//         nome: nome,
//         canzone: canzone,
//         dove: dove,
//         reply: reply + getLocationAndSubmit()
//     };

//     conferma = confirm("Sei sicuro di voler inviare i dati? " + "\nNome: " + nome + ",\nCanzone: " + canzone + ",\nDove: " + dove);

//     if(!conferma) {
//         alert("Invio annullato.");
//         return;
//     }

//     emailjs.send("service_azwqfrc", "template_9vczhb4", parametri)
//         .then(function(response) {
//             alert("Mail inviata con successo!");
//             console.log('SUCCESS!', response.status, response.text);
//         }, function(error) {
//             alert("Errore durante l’invio: " + JSON.stringify(error));
//             console.log('FAILED...', error);
//     });

// }


async function getLocationString() {
    let city = "";
    let country = "";

    if (navigator.geolocation) {
        try {
            const pos = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            const data = await response.json();

            city = data.address.city || data.address.town || data.address.village || '';
            country = data.address.country || '';

            return `${city}, ${country}`;

        } catch (error) {
            console.error("Errore durante la geolocalizzazione:", error);
            return "Posizione non disponibile";
        }
    } else {
        return "Geolocalizzazione non supportata";
    }
}



// geolocalizzazione 
// async function getLocationAndSubmit() {
//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async function(position) {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;

//         // Inserisci le coordinate
//         document.getElementById('latitude').value = lat;
//         document.getElementById('longitude').value = lon;

//         // Chiamata a Nominatim (OpenStreetMap) per il reverse geocoding
//         try {
//         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
//         const data = await response.json();

//         const city = data.address.city || data.address.town || data.address.village || '';
//         const country = data.address.country || '';

//         // Inserisci i dati nel form
//         document.getElementById('city').value = city;
//         document.getElementById('country').value = country;

//         alert(`Posizione trovata: ${city}, ${country}`);

//         // Invia il form
//         document.getElementById('locationForm').submit();

//         } catch (error) {
//         alert("Errore durante il recupero del nome del luogo.");
//         }

//     }, function(error) {
//         alert("Permesso negato o errore nel recupero della posizione.");
//     });
//     } else {
//     alert("Geolocalizzazione non supportata dal browser.");
//     }

//     return city + ", " + country;
// }