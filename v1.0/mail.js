
// confirm("Attenzione! questa pagina utilizza la tua posizione per compilare il form per questioni di sicurezza e evitare spam. Se non vuoi che venga utilizzata la tua posizione, chiudi questa pagina e contatta il proprietario del sito. Per sapere di più, leggi la privacy policy di questo sito.");

// creato con EmailJS
document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    var luogo = await getLocationString();  
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