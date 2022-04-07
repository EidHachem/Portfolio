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
  {
    title: 'Multi-Post Stories',
    image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!',
    ],
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://eidhachem.github.io/Portfolio/',
    source: 'https://github.com/EidHachem/Portfolio',
  },
];

const project2Array = [
  {
    title: 'Multi-Post Stories',
    image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!',
    ],
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://eidhachem.github.io/Portfolio/',
    source: 'https://github.com/EidHachem/Portfolio',
  },
];

const project3Array = [
  {
    title: 'Multi-Post Stories',
    image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!',
    ],
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://eidhachem.github.io/Portfolio/',
    source: 'https://github.com/EidHachem/Portfolio',
  },
];

const project4Array = [
  {
    title: 'Multi-Post Stories',
    image: ['images/home/Placeholder.svg', './images/home/projects-dialog.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus voluptas consequatur officiis quae quos vel dolorem deserunt ab magni, vero, quo aliquid et eum optio illum. Animi nemo aspernatur aperiam iusto quisquam eaque voluptatum optio, tempore sint expedita nulla deleniti consectetur repellendus numquam cumque autem saepe libero harum ab!',
    ],
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://eidhachem.github.io/Portfolio/',
    source: 'https://github.com/EidHachem/Portfolio',
  },
];

const projects1Section = document.getElementById('project1');
projects1Section.innerHTML = project1Array
  .map(
    () => `
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
        <button type="button" id ="btn-1" value ="button1" data-modal="modal" class="project-button popup-btn">See Project</button>
      </div>
    </article>
`,
  )
  .join('');

const projects2Section = document.getElementById('project2');
projects2Section.innerHTML = project2Array
  .map(
    () => `
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
      <button type="button" id ="btn-2" value ="button2" data-modal="modal" class="project-button popup-btn">See Project</button>
    </div>
  </article>
`,
  )
  .join('');

const projects3Section = document.getElementById('project3');
projects3Section.innerHTML = project3Array
  .map(
    () => `
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
      <button type="button" id ="btn-3" value ="button3" data-modal="modal" class="project-button popup-btn">See Project</button>
    </div>
  </article>


`,
  )
  .join('');

const projects4Section = document.getElementById('project4');
projects4Section.innerHTML = project4Array
  .map(
    () => `
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
        <button type="button" id ="btn-4" value ="button4" data-modal="modal" class="project-button popup-btn">See Project</button>
      </div>
    </article>
`,
  )
  .join('');

const popupSection = document.getElementById('popup');
popupSection.innerHTML = project4Array
  .map(
    () => `
  <div class="popup-header">
        <h3>${project4Array[0].title}</h3>
        <a class="close-btn" href="#123">&times;</a>
      </div>
      <img class="popup-img" src="${project4Array[0].image[0]}" alt="Project preview">
      <p>${project4Array[0].description[0]}</p>
      <ul class="project-langs popup-langs">
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
      <div class="btn-container">
        <button type="button" class="live-btn">See Live <a href="${project4Array[0].live}"></a><span><img src="./images/home/live.svg" alt="go live"></span></button>
        <button type="button" class="github-btn">See Source <a href="${project4Array[0].source}"></a><span><img src="./images/social/github.svg" alt="Github"></span></button>
      </div>
  `,
  )
  .join('');

const modalSection = document.querySelector('.popup');
const openPopup = document.getElementsByClassName('popup-btn');
const closePopup = document.querySelector('.close-btn');
for (let i = 0; i < openPopup.length; i += 1) {
  openPopup[i].addEventListener('click', () => modalSection.classList.toggle('open-popup'));
}
function closeModal() {
  modalSection.classList.toggle('open-popup');
}
closePopup.addEventListener('click', closeModal);

function outputMessage(accepted) {
  const message = document.getElementById('msg');
  if (accepted) {
    message.classList.remove('error');
  } else {
    message.classList.add('error');
    message.innerHTML = 'Kindly enter your email in lowercase letters';
  }
}

const form = document.querySelector('.form-container');

form.addEventListener('submit', (element) => {
  element.preventDefault();
  const email = document.getElementById('mail').value;
  if (email !== email.toLowerCase()) {
    outputMessage(false);
    return;
  }
  form.submit();
  form.reset();
  outputMessage(true);
});