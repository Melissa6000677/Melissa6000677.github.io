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
    var subsections = document.querySelectorAll('.subsection');

    // Ocultar todas las subsecciones al cargar la página
    subsections.forEach(function(subsection) {
        subsection.style.display = 'none';
    });

    // Mostrar las subsecciones correspondientes cuando cambie el hash
    window.addEventListener('hashchange', function() {
        var hash = window.location.hash;
        var currentSection = document.querySelector(hash);
        var currentSubsections = currentSection.querySelectorAll('.subsection');

        // Ocultar todas las subsecciones
        subsections.forEach(function(subsection) {
            subsection.style.display = 'none';
        });

        // Mostrar las subsecciones correspondientes a la sección actual
        currentSubsections.forEach(function(subsection) {
            subsection.style.display = 'block';
        });
    });

    // Define los contenidos en español e inglés
const contentES = {
    'language-button': 'Español',
    'pagina-principal': 'Página principal',
    'quienes-somos': 'Quiénes somos',
    'juegos': 'Juegos',
    'trabaja-con-nosotros': 'Trabaja con nosotros',
    'novedades': 'Novedades'
};

const contentEN = {
    'language-button': 'English',
    'pagina-principal': 'Home',
    'quienes-somos': 'About Us',
    'juegos': 'Games',
    'trabaja-con-nosotros': 'Join Us',
    'novedades': 'News'
};

// Función para cambiar el idioma de la página
function changeLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es'; // Alternar entre español e inglés

    // Obtener el contenido según el nuevo idioma
    const content = newLanguage === 'es' ? contentES : contentEN;

    // Actualizar el contenido de los elementos HTML
    Object.entries(content).forEach(([id, text]) => {
        document.getElementById(id).textContent = text;
    });

    // Cambiar el idioma en el atributo lang del HTML
    document.documentElement.lang = newLanguage;
}

// Evento click para cambiar el idioma al hacer clic en el botón de idioma
document.getElementById('language-button').addEventListener('click', changeLanguage);

};
