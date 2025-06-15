// // // // // Toggle mobile menu
// // // // document.getElementById("menu-toggle").addEventListener("click", () => {
// // // //   const menu = document.getElementById("mobile-menu");
// // // //   menu.classList.toggle("hidden");
// // // // });

// // // Handle movie boxes and "Watch Now" buttons
// // let movies = document.querySelectorAll(".movie-box");

// // movies.forEach((box) => {
// //   // Clicking the entire box
// //   box.addEventListener("click", (e) => {
// //     if (e.target.classList.contains("watch-btn")) return;

// //     const videoPage = box.getAttribute("data-page");
// //     if (videoPage) {
// //       // window.open(videoPage);
// //       window.location.href = videoPage;
// //     }
// //   });

// //   // Clicking the "Watch Now" button
// //   const button = box.querySelector(".watch-btn");
// //   if (button) {
// //     button.addEventListener("click", (e) => {
// //       e.stopPropagation(); // Prevent bubbling to box
// //       const videoPage = box.getAttribute("data-page");
// //       if (videoPage) {
// //         // window.open(videoPage);
// //         window.location.href = videoPage;
// //       }
// //     });
// //   }
// // });

// // // Search bar filter with "No films found" message
// // document.getElementById("search").addEventListener("input", function () {
// //   const searchValue = this.value.trim().toLowerCase();
// //   const noResults = document.getElementById("no-results");
// //   let anyVisible = false;

// //   movies.forEach((movie) => {
// //     const title = movie.querySelector("h1").innerText.toLowerCase().trim();
// //     if (title.includes(searchValue)) {
// //       anyVisible = true;
// //       movie.style.display = "flex";
// //     } else {
// //       movie.style.display = "none";
// //     }
// //   });

// //   // Show or hide "No films found" message
// //   if (!anyVisible) {
// //     noResults.classList.remove("hidden");
// //   } else {
// //     noResults.classList.add("hidden");
// //   }
// // });
   

// // // // // // Toggle mobile menu
// // // // // document.getElementById("menu-toggle").addEventListener("click", () => {
// // // // //   const menu = document.getElementById("mobile-menu");
// // // // //   menu.classList.toggle("hidden");
// // // // // });

// // // // // // Handle movie boxes and "Watch Now" buttons
// // // // // let movies = document.querySelectorAll(".movie-box");

// // // // // movies.forEach((box) => {
// // // // //   // Clicking the entire box
// // // // //   box.addEventListener("click", (e) => {
// // // // //     if (e.target.classList.contains("watch-btn")) return;

// // // // //     const videoPage = box.getAttribute("data-page");
// // // // //     if (videoPage) {
// // // // //       // window.open(videoPage);
// // // // //       window.location.href = videoPage;
// // // // //     }
// // // // //   });

// // // // //   // Clicking the "Watch Now" button
// // // // //   const button = box.querySelector(".watch-btn");
// // // // //   if (button) {
// // // // //     button.addEventListener("click", (e) => {
// // // // //       e.stopPropagation(); // Prevent bubbling to box
// // // // //       const videoPage = box.getAttribute("data-page");
// // // // //       if (videoPage) {
// // // // //         // window.open(videoPage);
// // // // //         window.location.href = videoPage;
// // // // //       }
// // // // //     });
// // // // //   }
// // // // // });

// // // // // Search bar filter with "No films found" message
// // // // document.getElementById("search").addEventListener("input", function () {
// // // //   const searchValue = this.value.trim().toLowerCase();
// // // //   const noResults = document.getElementById("no-results");
// // // //   let anyVisible = false;

// // // //   movies.forEach((movie) => {
// // // //     const title = movie.querySelector("h1").innerText.toLowerCase().trim();
// // // //     if (title.includes(searchValue)) {
// // // //       anyVisible = true;
// // // //       movie.style.display = "flex";
// // // //     } else {
// // // //       movie.style.display = "none";
// // // //     }
// // // //   });

// // // //   // Show or hide "No films found" message
// // // //   if (!anyVisible) {
// // // //     noResults.classList.remove("hidden");
// // // //   } else {
// // // //     noResults.classList.add("hidden");
// // // //   }
// // // // });
   

// // // const moviesData = [
// // //   {
// // //     title: "Freddy",
// // //     description: "A scary dentist who is not what he seems.",
// // //     image: "pics/freddy.jpg",
// // //     page: "almovies/video1.html",
// // //   },
// // //   {
// // //     title: "Bhool Bhulaiyaa 2",
// // //     description: "Funny and spooky at the same time!",
// // //     image: "pics/bhool2.jpg",
// // //     page: "almovies/video2.html",
// // //   },
// // //   {
// // //     title: "Dhamaka",
// // //     description: "A news anchor faces a live crisis!",
// // //     image: "pics/dhamaka.jpg",
// // //     page: "almovies/video3.html",
// // //   },
// // //   {
// // //     title: "Final Destination",
// // //     description: "Can you escape fate?",
// // //     image: "pics/finaldestination.jpg",
// // //     page: "almovies/video4.html",
// // //   },
// // //   {
// // //     title: "Mission Impossible",
// // //     description: "Super spy saves the day with action!",
// // //     image: "pics/mi.jpg",
// // //     page: "almovies/video5.html",
// // //   },
// // // ];

// // // const container = document.querySelector(".container");
// // // container.innerHTML = "";

// // // moviesData.forEach((movie) => {
// // //   const movieBox = document.createElement("div");
// // //   movieBox.className = "movie-box group bg-gray-800 w-[300px] rounded-xl p-4 border-2 border-white";
// // //   movieBox.setAttribute("data-page", movie.page);

// // //   movieBox.innerHTML = `
// // //     <img src="${movie.image}" alt="${movie.title}" class="w-full h-48 object-cover rounded-md border border-purple-500" />
// // //     <h2 class="text-xl font-bold text-purple-300 mt-2">${movie.title}</h2>
// // //     <p class="text-sm">${movie.description}</p>
// // //     <button class="watch-btn mt-3 px-4 py-1 bg-purple-600 rounded-full text-white hidden group-hover:block">Watch Now</button>
// // //   `;

// // //   container.appendChild(movieBox);
// // // });

// // // setTimeout(() => {
// // //   const movies = document.querySelectorAll(".movie-box");

// // //   movies.forEach((box) => {
// // //     box.addEventListener("click", (e) => {
// // //       if (e.target.classList.contains("watch-btn")) return;
// // //       const videoPage = box.getAttribute("data-page");
// // //       window.location.href = videoPage;
// // //     });

// // //     const btn = box.querySelector(".watch-btn");
// // //     btn.addEventListener("click", (e) => {
// // //       e.stopPropagation();
// // //       const videoPage = box.getAttribute("data-page");
// // //       window.location.href = videoPage;
// // //     });
// // //   });

// // //   document.getElementById("search").addEventListener("input", function () {
// // //     const search = this.value.toLowerCase();
// // //     let found = false;
  
// // //     movies.forEach((box) => {
// // //       const title = box.querySelector("h2").innerText.toLowerCase();
// // //       if (title.includes(search)) {
// // //         box.style.display = "block";
// // //         found = true;
// // //       } else {
// // //         box.style.display = "none";
// // //       }
// // //     });
  
// // //     document.getElementById("no-results").classList.toggle("hidden", found);
// // //   });
// // // }, 0);
  
// //   const movies = [
// //     {
// //       title: "Freddy",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
// //       image: "pics/freddy.jpg",
// //       page: "almovies/video1.html"
// //     },
// //     {
// //       title: "Bhool Bhulaiyaa 2",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
// //       image: "pics/bhool2.jpg",
// //       page: "almovies/video2.html"
// //     },
// //     {
// //       title: "Dhamaka",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
// //       image: "pics/dhamaka.jpg",
// //       page: "almovies/video3.html"
// //     },
// //     {
// //       title: "Final Destination",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
// //       image: "pics/finaldestination.jpg",
// //       page: "almovies/video4.html"
// //     },
// //     {
// //       title: "Mission Imposible",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
// //       image: "pics/mi.jpg",
// //       page: "almovies/video5.html"
// //     },
// //     // You can add more movies here...
// //   ];

// //   const container = document.getElementById("movie-container");

// //   movies.forEach((movie) => {
// //     const movieBox = document.createElement("div");
// //     movieBox.className = `movie-box group flex flex-col justify-stretch bg-transparent w-[350px] h-[450px] p-[10px] rounded-2xl border-2 border-white`;
// //     movieBox.setAttribute("data-page", movie.page);

// //     movieBox.innerHTML = `
// //       <img class="w-full h-2/4 border-2 border-cyan-900 rounded-2xl object-cover bg-no-repeat bg-top"
// //            src="${movie.image}" alt="${movie.title}" />
// //       <h1 class="text-center text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
// //         ${movie.title}
// //       </h1>
// //       <p class="description text-white text-justify">${movie.description}</p>
// //       <button class="watch-btn mt-3 mb-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hidden hover:scale-105 transition group-hover:block">
// //         Watch Now
// //       </button>
// //     `;

// //     container.appendChild(movieBox);
// //   });

// //   // Navigation for clicks
// //   document.addEventListener("click", function (e) {
// //     const movieBox = e.target.closest(".movie-box");
// //     if (movieBox) {
// //       if (e.target.classList.contains("watch-btn")) {
// //         e.stopPropagation();
// //       }
// //       const videoPage = movieBox.getAttribute("data-page");
// //       if (videoPage) {
// //         window.location.href = videoPage;
// //       }
// //     }
// //   });

// //   // Search Function
// //   document.getElementById("search").addEventListener("input", function () {
// //     const searchValue = this.value.trim().toLowerCase();
// //     const noResults = document.getElementById("no-results");
// //     const movieBoxes = document.querySelectorAll(".movie-box");
// //     let anyVisible = false;

// //     movieBoxes.forEach((movie) => {
// //       const title = movie.querySelector("h1").innerText.toLowerCase();
// //       if (title.includes(searchValue)) {
// //         movie.style.display = "flex";
// //         anyVisible = true;
// //       } else {
// //         movie.style.display = "none";
// //       }
// //     });

// //     if (!anyVisible) {
// //       noResults.classList.remove("hidden");
// //     } else {
// //       noResults.classList.add("hidden");
// //     }
// //   });

// //   // Mobile Menu Toggle
// //   document.getElementById("menu-toggle").addEventListener("click", () => {
// //     const menu = document.getElementById("mobile-menu");
// //     menu.classList.toggle("hidden");
// //   });
// const movies = [
//   {
//     title: "Freddy",
//     description: "A twisted love story of a dentist with a dark secret.",
//     image: "pics/freddy.jpg",
//     page: "almovies/video1.html"
//   },
//   {
//     title: "Bhool Bhulaiyaa 2",
//     description: "A thrilling journey through haunted corridors.",
//     image: "pics/bhool2.jpg",
//     page: "almovies/video2.html"
//   },
//   {
//     title: "Dhamaka",
//     description: "An ex-journalist gets a life-changing scoop.",
//     image: "pics/dhamaka.jpg",
//     page: "almovies/video3.html"
//   },
//   {
//     title: "Final Destination",
//     description: "You can't cheat death. Or can you?",
//     image: "pics/finaldestination.jpg",
//     page: "almovies/video4.html"
//   },
//   {
//     title: "Mission Imposible",
//     description: "Ethan Hunt returns for another impossible task.",
//     image: "pics/mi.jpg",
//     page: "almovies/video5.html"
//   }
// ];

// // Inject movie boxes
// const container = document.getElementById("movie-container");

// movies.forEach((movie) => {
//   const movieBox = document.createElement("div");
//   movieBox.className = `movie-box group flex flex-col justify-stretch bg-transparent w-[350px] h-[350px] p-[10px] rounded-2xl border-2 border-white`;
//   movieBox.setAttribute("data-page", movie.page);

//   movieBox.innerHTML = `
//     <img class="w-full h-2/4 border-2 border-cyan-900 rounded-2xl object-cover bg-no-repeat bg-top"
//          src="${movie.image}" alt="${movie.title}" />
//     <h1 class="text-center text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
//       ${movie.title}
//     </h1>
//     <p class="description text-white text-justify">${movie.description}</p>
//     <button class="watch-btn mt-3 mb-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hidden hover:scale-105 transition group-hover:block">
//       Watch Now
//     </button>
//   `;

//   container.appendChild(movieBox);
// });
// // Search bar filter with "No films found" message
// document.getElementById("search").addEventListener("input", function () {
//   const searchValue = this.value.trim().toLowerCase();
//   const noResults = document.getElementById("no-results");
//   let anyVisible = false;

//   movies.forEach((movie) => {
//     const title = movie.querySelector("h1").innerText.toLowerCase().trim();
//     if (title.includes(searchValue)) {
//       anyVisible = true;
//       movie.style.display = "flex";
//     } else {
//       movie.style.display = "none";
//     }
//   });

//   // Show or hide "No films found" message
//   if (!anyVisible) {
//     noResults.classList.remove("hidden");
//   } else {
//     noResults.classList.add("hidden");
//   }
// });

// Handle movie boxes and "Watch Now" buttons
// let movies = document.querySelectorAll(".movie-box");

// movies.forEach((box) => {
//   // Clicking the entire box
//   box.addEventListener("click", (e) => {
//     if (e.target.classList.contains("watch-btn")) return;

//     const videoPage = box.getAttribute("data-page");
//     if (videoPage) {
//       // window.open(videoPage);
//       window.location.href = videoPage;
//     }
//   });

//   // Clicking the "Watch Now" button
//   const button = box.querySelector(".watch-btn");
//   if (button) {
//     button.addEventListener("click", (e) => {
//       e.stopPropagation(); // Prevent bubbling to box
//       const videoPage = box.getAttribute("data-page");
//       if (videoPage) {
//         // window.open(videoPage);
//         window.location.href = videoPage;
//       }
//     });
//   }
// });
// // // Click navigation
// // document.addEventListener("click", function (e) {
// //   const movieBox = e.target.closest(".movie-box");
// //   if (movieBox) {
// //     if (e.target.classList.contains("watch-btn")) {
// //       e.stopPropagation();
// //     }
// //     const videoPage = movieBox.getAttribute("data-page");
// //     if (videoPage) {
// //       window.location.href = videoPage;
// //     }
// //   }
// // });

// // // Search filtering
// // document.getElementById("search").addEventListener("input", function () {
// //   const searchValue = this.value.trim().toLowerCase();
// //   const noResults = document.getElementById("no-results");
// //   const movieBoxes = document.querySelectorAll(".movie-box");
// //   let anyVisible = false;

// //   movieBoxes.forEach((movie) => {
// //     const title = movie.querySelector("h1").innerText.toLowerCase();
// //     if (title.includes(searchValue)) {
// //       movie.style.display = "flex";
// //       anyVisible = true;
// //     } else {
// //       movie.style.display = "none";
// //     }
// //   });

// //   noResults.classList.toggle("hidden", anyVisible);
// // });

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
// Movie data
const movieList = [
  {
    title: "Freddy",
    description: "A twisted love story of a dentist with a dark secret.",
    image: "pics/freddy.jpg",
    page: "almovies/video1.html"
  },
  {
    title: "Bhool Bhulaiyaa 2",
    description: "A thrilling journey through haunted corridors.",
    image: "pics/bhool2.jpg",
    page: "almovies/video2.html"
  },
  {
    title: "Dhamaka",
    description: "An ex-journalist gets a life-changing scoop.",
    image: "pics/dhamaka.jpg",
    page: "almovies/video3.html"
  },
  {
    title: "Final Destination",
    description: "You can't cheat death. Or can you?",
    image: "pics/finaldestination.jpg",
    page: "almovies/video4.html"
  },
  {
    title: "Mission Imposible",
    description: "Ethan Hunt returns for another impossible task.",
    image: "pics/mi.jpg",
    page: "almovies/video5.html"
  }
];

// Inject movie boxes
const container = document.getElementById("movie-container");

movieList.forEach((movie) => {
  const movieBox = document.createElement("div");
  movieBox.className = `movie-box group flex flex-col justify-stretch bg-transparent w-full max-w-[320px] max-h-[300px] p-4 rounded-2xl border-2 border-white mx-auto`;
  movieBox.setAttribute("data-page", movie.page);

  movieBox.innerHTML = `
    <img class="w-full h-2/4 border-2 border-cyan-900 rounded-2xl object-cover bg-no-repeat bg-top"
         src="${movie.image}" alt="${movie.title}" />
    <h1 class="text-center text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
      ${movie.title}
    </h1>
    <p class="description text-white text-justify">${movie.description}</p>
    <button class="watch-btn mt-3 mb-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hidden hover:scale-105 transition group-hover:block">
      Watch Now
    </button>
  `;

  container.appendChild(movieBox);
});

// Search filter with "No match found" message
document.getElementById("search").addEventListener("input", function () {
  const searchValue = this.value.trim().toLowerCase();
  const noResults = document.getElementById("no-results");
  const boxes = document.querySelectorAll(".movie-box");
  let anyVisible = false;

  boxes.forEach((box) => {
    const title = box.querySelector("h1").innerText.toLowerCase();
    if (title.includes(searchValue)) {
      box.style.display = "flex";
      anyVisible = true;
    } else {
      box.style.display = "none";
    }
  });

  noResults.classList.toggle("hidden", anyVisible);
});

// Handle movie box clicks and button clicks
const boxes = document.querySelectorAll(".movie-box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.classList.contains("watch-btn")) return;
    const videoPage = box.getAttribute("data-page");
    if (videoPage) {
      window.location.href = videoPage;
    }
  });

  const button = box.querySelector(".watch-btn");
  if (button) {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const videoPage = box.getAttribute("data-page");
      if (videoPage) {
        window.location.href = videoPage;
      }
    });
  }
});
