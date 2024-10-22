console.log('HitFinger log');



// open and close menu
document.addEventListener('DOMContentLoaded', function() {
    var x = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');

    x.addEventListener('click', function() {
        x.classList.toggle('hamburger-menu-open'); // Aggiunge o rimuove la classe hamburger-menu-open al clic
    });
    x.addEventListener('click', function() {
        menu.classList.toggle('hamburger-menu-open'); // Aggiunge o rimuove la classe hamburger-menu-open al clic
    });
});



// STAFF --------------------------------------------------
    // caricamento
    fetch('https://raw.githubusercontent.com/Legendcraftstudios/Site/main/Data_staff.json')
    .then(response => response.json())
    .then(data => {
        // Manipola il DOM per visualizzare i dati JSON
        var jsonList = document.getElementById('jsonList');
        // Rimuovi l'elemento di caricamento
        var loadingElement = document.getElementById('loading');
        loadingElement.parentNode.removeChild(loadingElement);
        data.forEach(item => {
        var listItem = document.createElement('li');
        listItem.textContent = item.Nickname;
        jsonList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Errore nel caricamento del file JSON:', error);
    });


    // metti le card
    const url = 'https://script.google.com/macros/s/AKfycbyMkjX40bwmiNRMwaoL4Y71Wae8__ELuU8ugW2Ilwb1OebPFLQ9LEGAS-1DnhFc5Ap7/exec';

    // funzione per creare le targhette
    function createBadges(data) {
        const container = document.getElementById('badges-container');
        data.forEach(item => {

            if(item.Visibile == 'no' || item.Visibile == 'NO' || item.Visibile == 'No' || item.Visibile == 'nO') return; 

            const badge = document.createElement('div');
                
                badge.className = 'badge'; // classe dell' etichetta

                // Nickname
                    var nickname = item.Nickname;
                    var nick_up = nickname.toUpperCase();
                    var new_nickname = nick_up[0] + nickname.slice(1);
                    
                    // console.log('nickname: ' + nickname);
                    // console.log('up: ' + nick_up);
                    // console.log('up: ' + new_nickname);
                    
                    // Ruolo
                    var ruolo = item.Ruolo;
                    var ruolo_up = ruolo.toUpperCase();
                    var new_ruolo = ruolo_up[0] + ruolo.slice(1);
                    
                    // console.log('nickname: ' + ruolo);
                    // console.log('up: ' + ruolo_up);
                    // console.log('up: ' + new_ruolo);
                    

            badge.innerHTML = `<strong></strong> ${new_nickname} <br> <strong></strong> ${new_ruolo}`;
            container.appendChild(badge);
        });
    }

    // Recupera i dati JSON e crea le targhette
    fetch(url)
        .then(response => response.json())
        .then(data => createBadges(data))
        .catch(error => console.error('Errore nel recupero dei dati:', error)
    );

// -------------------------------------------------



// CREATO DA -------------------------------------------------
    // inserisci il link da google sheets creato da priamix
    document.addEventListener('DOMContentLoaded', function() {
        let indirizzo = document.getElementById('ref_priamixCopy');
        // URL API di Google Sheets
        const apiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=JiJFfW3oXfNLLzkoTxymTujpTRBegs2TFm1uMV85iAmIUraRoIcvRWzNY217K6dXOoRoUsLiDhsIyv30vhFbKkvdgsdpvB1im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPRnDGE0_GJ_Lh7L2qNonHRaoZqAkMmAIUuTeoGkXZjekOz_3VUVXIzZsOkOqY_q4EmjqVin44L7-Ga74LdY8TjWqQlcapPVVNz9Jw9Md8uu&lib=MWvKr22n0E0WarSzrpnmixcV0aEdPLK-8';

        // Fetch dati dall'API
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(data); // logga l'intera risposta del json

                // assicurati che 'data' contenga un array con almeno un oggetto
                if (data && data.length > 0 && data[0].indirizzi) {
                    const indirizzo = data[0].indirizzi; // estrai il valore di 'indirizzi' dal primo oggetto
                    const name = data[0].nome; // estrai il valore di 'indirizzi' dal primo oggetto
                    let element = document.getElementById('ref_priamixCopy');
                    
                    element.href = indirizzo;
                    console.log(name + ', '+ indirizzo);

                    let afterText = element;
                    afterText.textContent = name;
                    afterText.style.display = 'inline-block'; // Assicurati che sia visibile e inline
                    element.appendChild(afterText);
                } else {
                    console.error('La risposta non contiene dati validi');
                }
            })
            .catch(error => {
                console.error('Errore nel recupero dei dati:', error);
            });
    });
// --------------------------------------------------------
