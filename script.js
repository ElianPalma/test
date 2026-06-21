// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración del observador
    const observerOptions = {
        root: null, // Usa el viewport como contenedor
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    // Lógica de intersección
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase que dispara la transición CSS
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez animado para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecciona todos los elementos con la clase fade-in
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    // Aplica el observador con un retraso secuencial para crear un efecto de cascada
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            scrollObserver.observe(element);
        }, index * 200); 
    });
});