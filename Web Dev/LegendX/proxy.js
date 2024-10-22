// Funzione per leggere il contenuto del file .key
// async function canddofor() {
//     try {
//         const response = await fetch('uyiftseouiyesfuoipyesuyfesuoiyfygtudrpi9espieusp0eiysefyosefyoiu.key');
//         const text = await response.text();
//         return text;
//     } catch (error) {
//         console.error('Errore nella lettura del file:', error);
//     }
// }
// // Assegnare il contenuto del file a una variabile
// canddofor().then(text => {
//     vpnBlockcheck = text;
// });
// ----------------------------------

var vpnBlockcheck;
fetch('uyiftseouiyesfuoipyesuyfesuoiyfygtudrpi9espieusp0eiysefyosefyoiu.key')
  .then(response => response.text())
  .then(text => {
    vpnBlockcheck = text;
    console.log(vpnBlockcheck);
  })
  .catch(error => console.error('Error fetching file:', error));



// let vpnBlockcheck = "0db31de22a2e4fc6a9db90758ade4416";
// controllo proxy e vpn
    async function detectVPN() {

        const ipResponse = await fetch('https://ifconfig.me/all.json');
        const ipData = await ipResponse.json();
        const ip_address = ipData.ip_addr;

        const url = `https://vpnapi.io/api/${ip_address}?key=${vpnBlockcheck}`;
        const response = await fetch(url);
        const data = await response.json();
        const vpnStatus = data.security.vpn;
        const proxyStatus = data.security.proxy;

        if(vpnStatus || proxyStatus) {
            console.log('vpn on');
            console.log(`IP Address: ${ip_address}`);
            console.log(`VPN status: ${vpnStatus}`);
            console.log(`PROXY status: ${proxyStatus}`);
            
            block = true;
        } else {
            
            block = false;
        }
    }
detectVPN();

