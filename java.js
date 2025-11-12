document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.getElementById('contacto').querySelector('form');
    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        let esValido = true;
        let mensajeError = "";

        if (nombre === "") {
            esValido = false;
            mensajeError += "El campo Nombre es obligatorio.\n";
        }

        if (email === "" || !email.includes('@')) {
            esValido = false;
            mensajeError += "Introduce un Email válido.\n";
        }

        if (mensaje.length < 10) {
            esValido = false;
            mensajeError += "El Mensaje debe tener al menos 10 caracteres.\n";
        }

        if (esValido) {
            alert("✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
            formularioContacto.reset();
        } else {
            alert("❌ Error al enviar el formulario:\n" + mensajeError);
        }
    });
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        
        if (slides[index]) { 
             slides[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);
    showSlide(currentSlide);

});