const artistsObj = [
  {
    name: "Bonobo",
    listeners: "3,017,987",
    albums: [
      {
        albName: "fabric presents Bonobo (DJ Mix)",
        albCover: "../assets/artist/images/album1",
        albYear: 2019,
      },
      {
        albName: "Migration",
        albCover: "../assets/artist/images/album2",
        albYear: 2017,
      },
      {
        albName: "The North Borders Tour - Live",
        albCover: "../assets/artist/images/album3",
        albYear: 2014,
      },
      {
        albName: "Late Night Tales",
        albCover: "../assets/artist/images/album4",
        albYear: 2013,
      },
      {
        albName: "The North Borders",
        albCover: "../assets/artist/images/album5",
        albYear: 2013,
      },
      {
        albName: "Black Sands Remixed",
        albCover: "../assets/artist/images/album6",
        albYear: 2012,
      },
      {
        albName: "Black Sands",
        albCover: "../assets/artist/images/album7",
        albYear: 2010,
      },
      {
        albName: "Days To Come",
        albCover: "../assets/artist/images/album8",
        albYear: 2006,
      },
      {
        albName: "Dial 'M' for Monkey",
        albCover: "../assets/artist/images/album9",
        albYear: 2003,
      },
      {
        albName: "One Offs (Remixes $ B Sides)",
        albCover: "../assets/artist/images/album10",
        albYear: 2002,
      },
      {
        albName: "Animal Magic",
        albCover: "../assets/artist/images/album11",
        albYear: 2000,
      },
    ],
  },
];

/*
##############################
Global Selectors
##############################
*/
const mainSection = document.querySelector("main");
const mainNav = document.querySelector(".main-nav");
const heroContent = document.querySelector("main .hero-content");

window.onload = () => {
  populateHeroContent();
};

const populateHeroContent = () => {
  heroContent.innerHTML = `
    <p class="listeners mb-3">${artistsObj[0].listeners}</p>
    <h1 class="artist-name mb-5">${artistsObj[0].name}</h1>
    <div class="d-flex align-items-center header-btns">
        <button type="button" class="btn rounded-pill">PLAY</button>
        <button
            type="button"
            class="btn btn-outline-secondary rounded-pill"
        >FOLLOW</button>
        <i class="fas fa-ellipsis-h"></i>
    </div>
  `;
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
  if (mainSection.scrollTop > 340) {
    if (!mainNav.classList.contains("bg-on")) {
      mainNav.classList.add("bg-on");
    }
  } else if (mainNav.classList.contains("bg-on")) {
    mainNav.classList.remove("bg-on");
  }
});

// Music Player
let audioElement = document.getElementById("audio-OneRepublic-Run");
let btnPlayPause = document.getElementById("btn-play");
let getIcon = document.getElementById("getIcon");
btnPlayPause.addEventListener("click", function () {
  if (audioElement.paused && getIcon.classList.contains("fa-play-circle")) {
    audioElement.play();
    getIcon.classList.remove("far", "fa-play-circle");
    getIcon.classList.add("far", "fa-pause-circle");
  } else {
    audioElement.pause();
    getIcon.classList.remove("far", "fa-pause-circle");
    getIcon.classList.add("far", "fa-play-circle");
  }
});
