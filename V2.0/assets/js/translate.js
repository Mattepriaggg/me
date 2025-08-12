
// COOKIE PER SALVARE LA TRADUZIONE DELLA PAGINA

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    it: {
        'hero.description': `sviluppatore web, designer web, produttore musicale`,

        'riguardo.p': `💻 Matteo è uno studente tecnico informatico di Piove di Sacco(PD) con una passione per la programmazione e il design di siti web.
        Ha iniziato a programmare all' età di 15 anni, appen ainiziati gli studi tecnici, e da allora ha continuato a migliorare le sue competenze e imparare nuove tecnologie.
        Nel corso degli anni>, ha lavorato su diversi progetti, sia personali che per aziende e artisti emergenti, creando siti web funzionali e accattivanti.
        Matteo è sempre alla ricerca di nuove sfide e opportunità per mighliorare le sue abilità in questo campo. 🚀
        🎧 Oltre alla programmazione, Matteo ha anche una passione per la muisica e la produzione musicale e produzione di tracce audio. Ha frequentato un corso musicale specializzato nello strumento Pianoforte, aumentando così le proprie capacità e competenze. 🎶`,

        competenze: `Competenze`,
        riguardo: `Riguardo`,
        contattami: `Contattami`,
    },
    en: {
        'hero.description': `web developer, web designer, music producer`,

        'riguardo.p': `💻 Matteo is an IT student from Piove di Sacco (PD) with a passion for web development and web design.
        He started programming at the age of 15 when he began his technical studies and has continued to improve his skills and learn new technologies.
        Over the years, he has worked on several projects, both personal and for companies and emerging artists, creating functional and appealing websites.
        Matthew is always looking for new challenges and opportunities to improve his abilities in this field. 🚀

        🎧 Besides programming, Matthew also has a passion for music and audio production. He has taken a music course focused on piano, increasing his skills and knowledge. 🎶`,
        
        competenze: `Skills`,
        riguardo: `About me`,
        contattami: `Contact me`,
    },
  };

  const languageSwitcher = document.getElementById("languageSwitcher");

  languageSwitcher.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    translatePage(selectedLang);
  });

  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
  }

  // Traduci all'avvio
  translatePage(languageSwitcher.value); // traduce con la lingua selezionata attuale
});

const languageSwitcher = document.getElementById("languageSwitcher");
console.log(languageSwitcher); // se è null, è quello il problema
