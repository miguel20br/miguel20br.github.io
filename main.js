//Selectors
let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');

window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})

hamburguerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');
})
