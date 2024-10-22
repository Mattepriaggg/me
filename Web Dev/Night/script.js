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

let hamburgerMenu = document.getElementById('hamburger_menu');
let menu = document.getElementById('menu');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('hamburger_menu_open');
        menu.classList.toggle('menu_open');
        menu.classList.toggle('menu_close');
    });


