const hamburger = document.querySelector('.ham');
const navSub = document.querySelector('.nav-sub');
const title = document.querySelector('.title');
const body = document.querySelector('body');

function openCloseMenu() {
  hamburger.classList.toggle('change');
  navSub.classList.toggle('nav-change');
  title.classList.toggle('title-change');
  body.classList.toggle('fixed-position');
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

const project1Array = [
    {title: 'Multi-Post Stories', image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'], description: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!'], technologies: ['css', 'html', 'bootstrap', 'Ruby']}
]

const project2Array = [
  {title: 'Multi-Post Stories', image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'], description: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!'], technologies: ['css', 'html', 'bootstrap', 'Ruby']}
]

const project3Array = [
  {title: 'Multi-Post Stories', image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'], description: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!'], technologies: ['css', 'html', 'bootstrap', 'Ruby']}
]

const project4Array = [
{title: 'Multi-Post Stories', image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'], description: ['A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!'], technologies: ['css', 'html', 'bootstrap', 'Ruby']}
]

const projects1Section = document.getElementById('project1');
projects1Section.innerHTML = project1Array.map(() => `
 <article class="projects first-project">
      <div class="project-image">
        <img
          class="project-img"
          src="${project1Array[0].image[0]}"
          alt="Project 1"
        />
      </div>
      <div class="project-info">
        <h3 class="project-title">${project1Array[0].title}</h3>
        <p class="project-description">
        ${project1Array[0].description[0]}
        </p>
        <ul class="project-langs">
          <li class="langs-used">${project1Array[0].technologies[0]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project1Array[0].technologies[1]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project1Array[0].technologies[2]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project1Array[0].technologies[3]}</li>
        </ul>
        <button type="button" class="project-button popup-btn">See Project</button>
      </div>
    </article>
`).join('');

const projects2Section = document.getElementById('project2');
projects2Section.innerHTML = project2Array.map(() => `
  <article class="projects second-project">
    <div class="project-image project-2-image">
      <img
        class="project-img"
        src="${project2Array[0].image[0]}"
        alt="Project 2"
      />
    </div>
    <div class="project-info">
      <h3 class="project-title">${project2Array[0].title}</h3>
      <p class="project-description">
      ${project2Array[0].description[0]}
      </p>
      <ul class="project-langs">
        <li class="langs-used">${project2Array[0].technologies[0]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project2Array[0].technologies[1]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project2Array[0].technologies[2]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project2Array[0].technologies[3]}</li>
      </ul>
      <button type="button" class="project-button popup-btn">See Project</button>
    </div>
  </article>
`).join('');

const projects3Section = document.getElementById('project3');
projects3Section.innerHTML = project3Array.map(() => `
  <article class="projects third-project">
    <div class="project-image">
      <img
        class="project-img"
        src="${project3Array[0].image[0]}"
        alt="Project 3"
      />
    </div>
    <div class="project-info">
      <h3 class="project-title">${project3Array[0].title}</h3>
      <p class="project-description">
        ${project3Array[0].description[0]}
      </p>
      <ul class="project-langs">
        <li class="langs-used">${project3Array[0].technologies[0]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project3Array[0].technologies[1]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project3Array[0].technologies[2]}</li>
        <li>
          <img src="images/home/split.svg" alt="split" class="lang-split" />
        </li>
        <li class="langs-used">${project3Array[0].technologies[3]}</li>
      </ul>
      <button type="button" class="project-button popup-btn">See Project</button>
    </div>
  </article>


`).join('');

const projects4Section = document.getElementById('project4');
projects4Section.innerHTML = project4Array.map(() => `
  <article class="projects forth-project" ">
      <div class="project-image project-2-image">
        <img class="project" src="${project4Array[0].image[0]}" alt="Project" />
      </div>
      <div class="project-info">
        <h3 class="project-title">${project4Array[0].title}</h3>
        <p class="project-description">
          ${project4Array[0].description[0]}
        </p>
        <ul class="project-langs">
          <li class="langs-used">${project4Array[0].technologies[0]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project4Array[0].technologies[1]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project4Array[0].technologies[2]}</li>
          <li>
            <img src="images/home/split.svg" alt="split" class="lang-split" />
          </li>
          <li class="langs-used">${project4Array[0].technologies[3]}</li>
        </ul>
        <button type="button" class="project-button popup-btn">See Project</button>
      </div>
    </article>
`).join('');
