const artistsObj = [
  {
    name: "Bonobo",
    listeners: "3,017,987",
    albums: [
      {
        albName: "fabric presents Bonobo (DJ Mix)",
        albCover: "../assets/artist/images/albumCovers/album1.jpeg",
        albYear: 2019,
      },
      {
        albName: "Migration",
        albCover: "../assets/artist/images/albumCovers/album2.jpeg",
        albYear: 2017,
      },
      {
        albName: "The North Borders Tour - Live",
        albCover: "../assets/artist/images/albumCovers/album3.jpeg",
        albYear: 2014,
      },
      {
        albName: "Late Night Tales",
        albCover: "../assets/artist/images/albumCovers/album4.jpeg",
        albYear: 2013,
      },
      {
        albName: "The North Borders",
        albCover: "../assets/artist/images/albumCovers/album5.jpeg",
        albYear: 2013,
      },
      {
        albName: "Black Sands Remixed",
        albCover: "../assets/artist/images/albumCovers/album6.jpeg",
        albYear: 2012,
      },
      {
        albName: "Black Sands",
        albCover: "../assets/artist/images/albumCovers/album7.jpeg",
        albYear: 2010,
      },
      {
        albName: "Days To Come",
        albCover: "../assets/artist/images/albumCovers/album8.jpeg",
        albYear: 2006,
      },
      {
        albName: "Dial 'M' for Monkey",
        albCover: "../assets/artist/images/albumCovers/album9.jpeg",
        albYear: 2003,
      },
      {
        albName: "One Offs (Remixes $ B Sides)",
        albCover: "../assets/artist/images/albumCovers/album10.jpeg",
        albYear: 2002,
      },
      {
        albName: "Animal Magic",
        albCover: "../assets/artist/images/albumCovers/album11.jpeg",
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
  populateAlbums();
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

const populateAlbums = () => {
  const albumsGrid = document.querySelector("#albums > .albums-cards");
  for (const album of artistsObj[0].albums) {
    albumsGrid.innerHTML += `
        <div class="col p-0">
                <div class="card border-0 p-2 mx-1 h-100">
                  <img
                    src="${album.albCover}"
                    class="card-img-top"
                    alt="${album.albName}"
                  />
                  <div class="card-body text-center p-1 d-flex flex-column justify-content-between">
                    <p class="card-title fw-bold">${album.albName}</p>
                    <p class="card-text fw-bold">${artistsObj[0].name}</p>
                  </div>
                  <button class="btn rounded-circle card-play-btn">
                    <svg
                      height="16"
                      role="img"
                      width="16"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <polygon
                        points="21.57 12 5.98 3 5.98 21 21.57 12"
                        fill="currentColor"
                      ></polygon>
                    </svg>
                  </button>
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
