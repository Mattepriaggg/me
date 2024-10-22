let tipo;
let coun; // quante domande
let color = 11111; // default color
                    /* Rosso: 16711680
                        Verde: 65280
                        Blu: 255
                        Giallo: 16776960
                        Arancione: 16753920
                        Viola: 8388736
                        Aqua: 1752220
                        Grigio: 9807270
                        Nero: 0
                        Bianco: 16777215*/


function changeTipo(tipoIn, counn) { // prende il tipo e il numero delle domande della candidatura da index.js
    tipo = tipoIn;
    coun = counn;
}



const url = fileContent = "https://discord.com/api/webhooks/1275779413442822174/5TzjzipyLhjEgLImfj7HEwJ4oA7DW0DnO4oGbPBwKZGTcDEKNZzCqLuMsP44q2s_5ar-";

async function webhook(nome, user_uid, app_type, answers, color) {
    const data = {
        embeds: [
            {
                title: `**Nuova Candidatura *${app_type}*.**`,
                description: `Utente:` + " " + ` **_${user_uid}_**` + "  " 
                + `
                Nome:` + " " + ` **_${nome}_**`,

                fields: Object.entries(answers).map(([q, a]) => ({ name: q, value: a })),
                color: color
            }
        ]
    };

    try {
        const response = await axios.post(url, data);
        if (response.status !== 204) {
            console.log(`Errore nell'Invio, Codice: ${response.status}`);
            console.log(response.data);  // Aggiungi questa riga per vedere il messaggio di errore
        }
    } catch (error) {
        console.error('Errore:', error);
    }
    
}

async function inviaWebhook() {

    let Nome = document.getElementById('Nome');
    let Utente = document.getElementById('Utente');
    
    let nome = document.getElementById('Nome').value;
    let IDUser = document.getElementById('Utente').value;

    
    var risposte = {
        // uniscono le domande dal ciclo for
    };
    var o, dn, rn;
    var domanda, risposta;
    for (let i = 0; i < coun; i++) {
        o = i+1;
        dn = 'D'+o;
        rn = 'R'+o;
        domanda = document.getElementById(dn);
        risposta = document.getElementById(rn);

        risposte["Domanda: " + o] = risposta.value; // aggiungi tutte le domande e risposte
    }



    if (IDUser != '' && nome != ''){

        webhook(nome, IDUser, tipo, risposte, color); // invia webhook


        location.reload();
        alert('Candidatura inviata!');

        Utente.style.border = '1px solid green';
    } else {
        if (IDUser == '') 
            Utente.style.border = '1px solid red';
        else
            Utente.style.border = '1px solid green';

        if (nome == '') 
            Nome.style.border = '1px solid red';
        else
            Nome.style.border = '1px solid green';

    }   


}