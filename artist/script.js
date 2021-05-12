// const artistsObj = [
//   {
//     name: "Bonobo",
//     listeners: "3,017,987",
//     albums: [
//       {
//         albName: "fabric presents Bonobo (DJ Mix)",
//         albCover: "../assets/artist/images/albumCovers/album1.jpeg",
//         albYear: 2019,
//       },
//       {
//         albName: "Migration",
//         albCover: "../assets/artist/images/albumCovers/album2.jpeg",
//         albYear: 2017,
//       },
//       {
//         albName: "The North Borders Tour - Live",
//         albCover: "../assets/artist/images/albumCovers/album3.jpeg",
//         albYear: 2014,
//       },
//       {
//         albName: "Late Night Tales",
//         albCover: "../assets/artist/images/albumCovers/album4.jpeg",
//         albYear: 2013,
//       },
//       {
//         albName: "The North Borders",
//         albCover: "../assets/artist/images/albumCovers/album5.jpeg",
//         albYear: 2013,
//       },
//       {
//         albName: "Black Sands Remixed",
//         albCover: "../assets/artist/images/albumCovers/album6.jpeg",
//         albYear: 2012,
//       },
//       {
//         albName: "Black Sands",
//         albCover: "../assets/artist/images/albumCovers/album7.jpeg",
//         albYear: 2010,
//       },
//       {
//         albName: "Days To Come",
//         albCover: "../assets/artist/images/albumCovers/album8.jpeg",
//         albYear: 2006,
//       },
//       {
//         albName: "Dial 'M' for Monkey",
//         albCover: "../assets/artist/images/albumCovers/album9.jpeg",
//         albYear: 2003,
//       },
//       {
//         albName: "One Offs (Remixes $ B Sides)",
//         albCover: "../assets/artist/images/albumCovers/album10.jpeg",
//         albYear: 2002,
//       },
//       {
//         albName: "Animal Magic",
//         albCover: "../assets/artist/images/albumCovers/album11.jpeg",
//         albYear: 2000,
//       },
//     ],
//   },
// ];

/*
##############################
Global Selectors
##############################
*/
const mainSection = document.querySelector("main");
const mainNav = document.querySelector(".main-nav");
const heroContent = document.querySelector("main .hero-content");
const albumsGrid = document.querySelector("#albums > .albums-cards");
const topTracksGrid = document.querySelector("#top-tracks > .top-tracks-cards");

window.onload = () => {
  // Fetch artist data
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/2108", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
    },
  })
    .then((response) => response.json())
    .then((fetchedArtist) => {
      populateHeroContent(fetchedArtist);
    })
    .catch((error) => console.log(error));

  // Fetch albums
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/artist/2108/albums",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
      },
    }
  )
    .then((response) => response.json())
    .then((fetchedAlbums) => {
      populateAlbums(fetchedAlbums.data);
    })
    .catch((error) => console.log(error));

  // Fetch Top Tracks
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=bonobo", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
    },
  })
    .then((response) => response.json())
    .then((fetchedTracks) => {
      populateTopTracks(fetchedTracks.data);
    })
    .catch((error) => console.log(error));
};

const populateHeroContent = (artistData) => {
  heroContent.innerHTML = `
    <p class="listeners fw-bold m-0">${artistData.nb_fan.toLocaleString()}</p>
    <h1 class="artist-name my-5">${artistData.name}</h1>
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

const populateAlbums = (albumsData) => {
  let counter = 0;
  for (const album of albumsData) {
    counter++;
    albumsGrid.innerHTML += `
        <div class="col p-0">
                <div class="card border-0 p-2 mx-1 h-100">
                <div class="w-100 position-relative">
                  <img
                    src="${album.cover_big}"
                    class="card-img-top"
                    alt="${album.title}"
                  />
                  <button class="btn rounded-circle card-play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                      <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                      <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                      <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                      <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </button>
                  </div>
                  <div class="card-body text-center p-1 d-flex flex-column justify-content-between">
                    <p class="card-title fw-bold">${album.title}</p>
                    <p class="card-text fw-bold">${album.release_date.slice(
                      0,
                      4
                    )}</p>
                  </div>
                  
                </div>
              </div>
        `;
    if (counter === 12) break;
  }
};

const populateTopTracks = (tracksData) => {
  let counter = 0;
  for (const track of tracksData) {
    counter++;
    topTracksGrid.innerHTML += `
        <div class="col p-0">
          <div class="card border-0 p-2 mx-1 h-100">
              <div class="w-100 position-relative">
                <img src="${track.album.cover_big}" class="card-img-top" alt="${
      track.title
    }"/>
                <button class="btn rounded-circle card-play-btn">
                  <svg class="play-track-icon" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
                    <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                  </svg>
                  <svg class="pause-track-icon d-none" height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="3" width="4" height="18" fill="currentColor"></rect>
                    <rect x="15" y="3" width="4" height="18" fill="currentColor"></rect>
                  </svg>
                </button>
              </div>
              <div class="card-body text-center p-1 d-flex flex-column justify-content-between">
                <p class="card-title fw-bold">${track.title}</p>
                <p class="track-album fw-bold">${track.album.title}</p>
                <p class="card-text">${secsToMins(track.duration)}</p>
              </div>
              <audio src="${track.preview}"></audio>
          </div>
        </div>`;
    if (counter === 12) break;
  }
  topTracksGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", togglePlayTrack);
  });
};

const togglePlayTrack = (e) => {
  const closestCard = e.currentTarget.closest(".card");
  const audioEl = closestCard.querySelector("audio");

  if (audioEl.paused) {
    // Pause any other audios playing
    document.querySelectorAll("audio").forEach((audio) => {
      audio.pause();
    });
    // Start playing current
    audioEl.play();
  } else {
    // Pause current
    audioEl.pause();
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

/*
##########################
HELPER FUNCTIONS
##########################
*/
const secsToMins = (seconds) => {
  const intMins = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;

  return `${intMins}m ${("0" + remainingSecs).slice(-2)}s`;
};
