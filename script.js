

// Cursor Follow
const line = document.getElementById('line');
const hoverTexts = document.querySelectorAll('.hover-curosr');

// finchè...
hoverTexts.forEach(text => {
    text.addEventListener('mouseenter', (e) => {
        line.style.display = 'block';
        line.style.top = `${e.target.getBoundingClientRect().bottom + window.scrollY}px`;
    });

    // dimensione della linea in base a shift+alt+rotellina
    window.addEventListener('wheel', (event) => {
        if (event.altKey && event.shiftKey) {
            event.preventDefault(); // Evita lo scorrimento della pagina se si usa la rotellina
            const line = document.querySelector('.line');
            if (event.deltaY < 0) {
                line.style.width = `${line.offsetWidth + 2}px`;
            } else {
                line.style.width = `${line.offsetWidth - 2}px`;
            }
        }
    });

    // allineamneto linea
    text.addEventListener('mousemove', (e) => {
        var cursorX = e.clientX;
        
        
        w_line = line.offsetWidth;
        // const w_line = 50; // Larghezza totale della linea
        line.style.width = w_line+`px`;

        
        line.style.left = `${cursorX - w_line/2+5}px`; // allineare il cursore al centro
        var left = line.style.left;


        // console.log("w_line = " + w_line);
        // console.log("left = " + left);
    });

    text.addEventListener('mouseleave', () => {
        line.style.display = 'none';
    });


});
