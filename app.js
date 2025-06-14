// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Handle movie boxes and "Watch Now" buttons
let movies = document.querySelectorAll(".movie-box");

movies.forEach((box) => {
  // Clicking the entire box
  box.addEventListener("click", (e) => {
    if (e.target.classList.contains("watch-btn")) return;

    const videoPage = box.getAttribute("data-page");
    if (videoPage) {
      // window.open(videoPage);
      window.location.href = videoPage;
    }
  });

  // Clicking the "Watch Now" button
  const button = box.querySelector(".watch-btn");
  if (button) {
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling to box
      const videoPage = box.getAttribute("data-page");
      if (videoPage) {
        // window.open(videoPage);
        window.location.href = videoPage;
      }
    });
  }
});

// Search bar filter with "No films found" message
document.getElementById("search").addEventListener("input", function () {
  const searchValue = this.value.trim().toLowerCase();
  const noResults = document.getElementById("no-results");
  let anyVisible = false;

  movies.forEach((movie) => {
    const title = movie.querySelector("h1").innerText.toLowerCase();
    if (title.includes(searchValue)) {
      movie.style.display = "flex";
      anyVisible = true;
    } else {
      movie.style.display = "none";
    }
  });

  // Show or hide "No films found" message
  if (!anyVisible) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
  }
});
