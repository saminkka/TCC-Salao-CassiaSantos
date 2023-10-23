const headerEl = document.querySelector('.header');
const navEl = document.querySelector('.nav');
const mobileEl = document.querySelector('.mobile');

// Adicione uma variável para rastrear o estado do menu
let isNavOpen = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        headerEl.classList.add('header-scrolled');
        navEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 20) {
        headerEl.classList.remove('header-scrolled');
        navEl.classList.remove('nav-scrolled');
    }
});

mobileEl.addEventListener('click', () => {
    // Alterne o estado do menu
    isNavOpen = !isNavOpen;

    if (isNavOpen) {
        navEl.classList.add("nav-open");
    } else {
        navEl.classList.remove("nav-open");
    }
});

// Feche o menu ao clicar em um link no menu
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navEl.classList.remove('nav-open');
        mobileEl.classList.remove('mobile-open');
        isNavOpen = false;
    });
});


//SLIDER CUIDADOS
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.slider-item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.slider-item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
