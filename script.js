let hamburger = document.querySelector(".ham");  
let navsub = document.querySelector(".nav-sub"); 
let title = document.querySelector(".title"); 

function openCloseMenu () {
  hamburger.classList.toggle("change"); 
  navsub.classList.toggle("nav-change");
  title.classList.toggle("title-change");
}

hamburger.addEventListener("click", openCloseMenu);

let scrollToPortfolio = document.querySelector(".nav-portfolio");

function scrollToSectionPortfolio () {
  openCloseMenu();
}

scrollToPortfolio.addEventListener("click", scrollToSectionPortfolio);

let scrollToAbout = document.querySelector(".nav-about");

function scrollToSectionContact () {
  openCloseMenu();
}

scrollToAbout.addEventListener("click", scrollToSectionContact);

let scrollToContact = document.querySelector(".nav-contact");

function scrollToSectionAbout () {
  openCloseMenu();  
}

scrollToContact.addEventListener("click", scrollToSectionAbout);
