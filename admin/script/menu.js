let burger = document.querySelector('.burger');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let menu = document.querySelector('.menuList');
let overflow = document.querySelector('.overflow');
burger.addEventListener('click', ()=>{
    open.classList.toggle('active');
    close.classList.toggle('active');
    menu.classList.toggle('openMenu');
    overflow.classList.toggle('overflowTrue')
});
