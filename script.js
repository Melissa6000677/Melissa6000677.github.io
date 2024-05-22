let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}

function moveSlide(direction) {
    let slides = document.getElementsByClassName("slide");
    slideIndex += direction;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Función para mostrar la sección correspondiente según la ubicación actual
window.addEventListener('hashchange', function() {
    var hash = window.location.hash;
    var sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
        if ('#' + section.id === hash) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    // Mostrar u ocultar el banner dependiendo de la sección
    var sliderContainer = document.querySelector('.slider-container');
    if (hash === '#pagina-principal') {
        sliderContainer.classList.add('active');
    } else {
        sliderContainer.classList.remove('active');
    }
});

window.onload = function() {
    var sections = document.querySelectorAll('.section');

    // Ocultar todas las secciones al cargar la página
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Función para mostrar la sección correspondiente al hacer clic en un enlace del menú
    function showSection(event) {
        var clickedLinkId = event.target.getAttribute('href'); // Obtener el href del enlace clicado
        var clickedSection = document.querySelector(clickedLinkId); // Obtener la sección correspondiente al href

        // Ocultar todas las secciones
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Mostrar la sección correspondiente
        clickedSection.style.display = 'block';
    }

    // Agregar evento click a todos los enlaces del menú
    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', showSection);
    });
};


const catalog = document.querySelector('.catalog');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

const moveCatalog = (direction) => {
    const catalogWidth = catalog.clientWidth;
    const numItems = catalog.children.length;
    const itemWidth = catalogWidth / numItems;
    const maxIndex = numItems; 
    if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'next' && currentIndex < maxIndex) {
        currentIndex++;
    }

    const offset = -currentIndex * itemWidth;
    catalog.style.transform = `translateX(${offset}px)`;
};

prevBtn.addEventListener('click', () => moveCatalog('prev'));
nextBtn.addEventListener('click', () => moveCatalog('next'));

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    // Aquí podrías agregar código para enviar los datos del formulario a través de AJAX si lo prefieres

    // Muestra el mensaje de confirmación y limpia el formulario
    document.getElementById('mensaje_confirmacion').style.display = 'block';
    document.querySelector('form').reset();
   });

function moverDerecha() {
    var imagen = document.getElementById("imagen");
    imagen.style.transform = "translateX(100%)"; /* Mueve la imagen hasta el borde derecho de su contenedor */
}

function resetPosition() {
    var imagen = document.getElementById("imagen");
    imagen.style.transform = "translateX(0)"; /* Resetea la posición de la imagen */
}
const logoImg = document.querySelector('.logo-img');
const textOverlay = document.querySelector('.text-overlay');

logoImg.addEventListener('mouseenter', () => {
    textOverlay.style.opacity = '0'; // Oculta el texto al pasar el mouse sobre la imagen
});

logoImg.addEventListener('mouseleave', () => {
    textOverlay.style.opacity = '1'; // Muestra el texto al retirar el mouse de la imagen
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    // Aquí podrías agregar código para enviar los datos del formulario a través de AJAX si lo prefieres

    // Muestra el mensaje de confirmación y limpia el formulario
    document.getElementById('mensaje_confirmacion').style.display = 'block';
    document.querySelector('form').reset();
   });

document.getElementById("scroll-to-top-button").addEventListener("click", function() {
    const scrollDuration = 500; // Duración total del desplazamiento en milisegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Cálculo del valor de desplazamiento en cada iteración
    const scrollInterval = setInterval(() => {
        if (window.scrollY === 0) {
            clearInterval(scrollInterval);
        }
        window.scrollBy(0, scrollStep); // Desplazamiento suave hacia arriba
    }, 20); // Intervalo reducido para una transición más suave
});

function showCover() {
    var firstCover = document.getElementById('first-cover');
    var secondCover = document.getElementById('second-cover');
    firstCover.style.opacity = '0'; // Oculta la primera imagen
    secondCover.style.opacity = '1'; // Muestra la segunda imagen
}

function hideCover() {
    var firstCover = document.getElementById('first-cover');
    var secondCover = document.getElementById('second-cover');
    firstCover.style.opacity = '1'; // Muestra la primera imagen
    secondCover.style.opacity = '0'; // Oculta la segunda imagen
}
