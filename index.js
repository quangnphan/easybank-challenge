const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click',()=>{
    if(nav.parentElement.classList.contains('mobile-active')){
        nav.parentElement.classList.remove('mobile-active')
        hamburger.src = 'images/icon-hamburger.svg';
    }else{
        nav.parentElement.classList.add('mobile-active')
        hamburger.src = 'images/icon-close.svg';
    }
})