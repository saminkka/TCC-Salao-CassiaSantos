const headerEl = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <= 20) {
        headerEl.classList.remove('header-scrolled');
    }
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
