const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorALL('.nav-links li');

    //Toggle Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //Animates Links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s'; 
    });
}

navSlide();