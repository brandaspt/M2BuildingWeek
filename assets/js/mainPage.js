const throwbackCards = [
  {
    img: "./assets/images/mainPage/throwback/tile01.jpeg",
    name: "Millenium Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile02.jpeg",
    name: "Bloodflow Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile03.jpeg",
    name: "David Bowie Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile04.jpeg",
    name: "Bonobo Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile05.jpeg",
    name: "M83 Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile06.jpeg",
    name: "Repeat Rewind",
  },
  {
    img: "./assets/images/mainPage/throwback/tile07.jpeg",
    name: "This is Supertramp",
  },
  {
    img: "./assets/images/mainPage/throwback/tile08.jpeg",
    name: "Where is My Mind Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile09.jpeg",
    name: "Calyx & TeebBee",
  },
  {
    img: "./assets/images/mainPage/throwback/tile10.jpeg",
    name: "Radiohead Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile11.jpeg",
    name: "The Police Radio",
  },
  {
    img: "./assets/images/mainPage/throwback/tile12.jpeg",
    name: "Sigma Radio",
  },
];
const showsCards = [
  {
    img: "./assets/images/mainPage/shows/show01.jpeg",
    name: "The Joe Rogan Experience",
  },
  {
    img: "./assets/images/mainPage/shows/show02.jpeg",
    name: "Casefile True Crime",
  },
  {
    img: "./assets/images/mainPage/shows/show03.jpeg",
    name: "No Such Thing As A Fish",
  },
  {
    img: "./assets/images/mainPage/shows/show04.jpeg",
    name: "Stuff You Know",
  },
  {
    img: "./assets/images/mainPage/shows/show05.jpeg",
    name: "Hamish $ Andy",
  },
  {
    img: "./assets/images/mainPage/shows/show06.jpeg",
    name: "The Tim Ferriss Show",
  },
  {
    img: "./assets/images/mainPage/shows/show07.jpeg",
    name: "The Grade Cricketer",
  },
  {
    img: "./assets/images/mainPage/shows/show08.jpeg",
    name: "Economist Radio",
  },
  {
    img: "./assets/images/mainPage/shows/show09.jpeg",
    name: "Making Sense with Sam Harris",
  },
  {
    img: "./assets/images/mainPage/shows/show10.jpeg",
    name: "The Ricky Gervais Show",
  },
  {
    img: "./assets/images/mainPage/shows/show11.jpeg",
    name: "The History of Rome",
  },
  {
    img: "./assets/images/mainPage/shows/show12.jpeg",
    name: "The Jordan B. Peterson Podcast",
  },
];

window.onload = () => {
  populateThrowback();
  populateShows();
};

/*
##############################
Global Selectors
##############################
*/
const mainSection = document.querySelector("main");
const mainNav = document.querySelector(".main-nav");

const populateThrowback = () => {
  const cardsGrid = document.querySelector("#throwback > .throwback-cards");
  for (const card of throwbackCards) {
    cardsGrid.innerHTML += `
        <div class="col p-0">
                <div class="card border-0 p-2 mx-1 h-100">
                  <img
                    src="${card.img}"
                    class="card-img-top"
                    alt="${card.name}"
                  />
                  <div class="card-body text-center p-1">
                    <p class="card-title fw-bold">${card.name}</p>
                    
                  </div>
                </div>
              </div>
        `;
  }
};
const populateShows = () => {
  const cardsGrid = document.querySelector("#shows > .shows-cards");
  for (const card of showsCards) {
    cardsGrid.innerHTML += `
        <div class="col p-0">
                <div class="card border-0 p-2 mx-1 h-100">
                  <img
                    src="${card.img}"
                    class="card-img-top"
                    alt="${card.name}"
                  />
                  <div class="card-body text-center p-1">
                    <p class="card-title fw-bold">${card.name}</p>
                    
                  </div>
                </div>
              </div>
        `;
  }
};

// Change active link on main nav
const mainNavLinks = document.querySelectorAll(".main-nav a");
const activeNavLink = (e) => {
  // Remove class from previous active
  const previousActive = document.querySelector(".main-nav a.active");
  previousActive.classList.remove("active");

  // Add class to new active
  e.currentTarget.classList.add("active");
};
for (const link of mainNavLinks) {
  link.addEventListener("click", activeNavLink);
}

// Set bg color for main nav upon scroll
mainSection.addEventListener("scroll", () => {
  if (mainSection.scrollTop > 45) {
    if (!mainNav.classList.contains("bg-on")) {
      mainNav.classList.add("bg-on");
    }
  } else if (mainNav.classList.contains("bg-on")) {
    mainNav.classList.remove("bg-on");
  }
});
