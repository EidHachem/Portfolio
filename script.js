const hamburger = document.querySelector('.ham');
const navSub = document.querySelector('.nav-sub');
const title = document.querySelector('.title');

function openCloseMenu() {
  hamburger.classList.toggle('change');
  navSub.classList.toggle('nav-change');
  title.classList.toggle('title-change');
}

hamburger.addEventListener('click', openCloseMenu);

const scrollToPortfolio = document.querySelector('.nav-portfolio');

function scrollToSectionPortfolio() {
  openCloseMenu();
}

scrollToPortfolio.addEventListener('click', scrollToSectionPortfolio);

const scrollToAbout = document.querySelector('.nav-about');

function scrollToSectionContact() {
  openCloseMenu();
}

scrollToAbout.addEventListener('click', scrollToSectionContact);

const scrollToContact = document.querySelector('.nav-contact');

function scrollToSectionAbout() {
  openCloseMenu();
}

scrollToContact.addEventListener('click', scrollToSectionAbout);
