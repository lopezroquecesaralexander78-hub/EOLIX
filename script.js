// 🔥 ESPERAR A QUE TODO CARGUE
document.addEventListener("DOMContentLoaded", () => {

    // 🔥 EVITA QUE EL NAVEGADOR RECUERDE EL SCROLL
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 🔥 SIEMPRE INICIAR ARRIBA
    window.scrollTo(0, 0);

    // 🔥 NAVBAR INTELIGENTE
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // 🔻 Bajando → ocultar
            navbar.style.top = "-120px";
        } else {
            // 🔺 Subiendo → mostrar
            navbar.style.top = "0";
        }

        lastScroll = currentScroll;
    });

});