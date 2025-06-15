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
    page: "almovies/video1.html",
    category: "Bollywood"
  },
  {
    title: "Final Destination",
    description: "You can't cheat death. Or can you?",
    image: "pics/finaldestination.jpg",
    page: "almovies/video4.html",
    category: "Hollywood"
  },
  {
    title: "Kabir Singh",
    description: "A brilliant surgeon spirals into self-destruction.",
    image: "pics/kabirsingh.jpg",
    page: "almovies/video5.html",
    category: "Bollywood"
  },
  {
    title: "Mission Imposible",
    description: "Ethan Hunt returns for another impossible task.",
    image: "pics/mi.jpg",
    page: "almovies/video5.html",
    category: "Hollywood"
  },
  {
    title: "Dhamaka",
    description: "An ex-journalist gets a life-changing scoop.",
    image: "pics/dhamaka.jpg",
    page: "almovies/video3.html",
    category: "Bollywood"
  },
  {
    title: "Satyaprem Ki Katha",
    description: "A heartwarming tale of love and healing.",
    image: "pics/sathyaprem ki katha.jpg",
    page: "almovies/video5.html",
    category: "Bollywood"
  },
  {
    title: "Bhool Bhulaiyaa 2",
    description: "A thrilling journey through haunted corridors.",
    image: "pics/bhool2.jpg",
    page: "almovies/video2.html",
    category: "Bollywood"
  }
];


// Inject movie boxes
const container = document.getElementById("movie-container");

movieList.forEach((movie) => {
  const movieBox = document.createElement("div");
  movieBox.className = ` movie-box group flex flex-col justify-stretch bg-transparent w-full max-w-[320px] min-h-[300px] max-h-[300px] p-4 rounded-2xl border-2 border-white mx-auto`;
  movieBox.setAttribute("data-page", movie.page);

  movieBox.innerHTML = `
    <img class="w-full h-2/4 border-2 border-cyan-900 rounded-2xl object-cover bg-no-repeat bg-top"
         src="${movie.image}" alt="${movie.title}" />
    <h1 class="text-center text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
      ${movie.title}
    </h1>
    <p class="description text-white text-justify line-clamp-2 transition-all duration-300">
    ${movie.description}
    </p>
    <button class="watch-btn mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hidden hover:scale-105 transition group-hover:block">
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
  if(anyVisible){
    noResults.classList.add("hidden");
  } else{
    noResults.classList.remove("hidden");
  }
  // noResults.classList.toggle("hidden", anyVisible);
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

// Filter Movies by Category
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.getAttribute("data-category");
    const boxes = document.querySelectorAll(".movie-box");
    let found = false;

    boxes.forEach((box, index) => {
      const movieCategory = movieList[index].category || "All";
      const match = selectedCategory === "All" || movieCategory === selectedCategory;
      box.style.display = match ? "flex" : "none";
      if (match) found = true;
    });

    document.getElementById("no-results").classList.toggle("hidden", found);
  });
});
