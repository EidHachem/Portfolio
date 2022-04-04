let hamburger = document.querySelector(".ham");  
let navsub = document.querySelector(".nav-sub"); 
let title = document.querySelector(".title"); 

function openCloseMenu () {
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
  title.classList.toggle("title-change")
}

hamburger.addEventListener("click", openCloseMenu);

let portfolio = document.querySelector('.nav-portfolio');
let el = document.querySelector('.projects');

portfolio.addEventListener('click', function () {
    el.scrollIntoView(true, {
        behavior: 'smooth'
    });
});
