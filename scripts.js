// Placeholder JavaScript file
// Add interactivity as needed

document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Girls Armour Foundation!");
});
function toggleNavbar() {
    const navLinks = document.getElementById('.nav-links');
    navLinks.classList.toggle('show');
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.getElementById("video-thumbnail").addEventListener("click", function() {
  document.getElementById("youtube-video").style.display = "block";
  document.getElementById("video-thumbnail").style.display = "none";
  document.getElementById("play-button").style.display = "none";
  document.getElementById("youtube-video").src += "?autoplay=1"; // Autoplay when clicked
});
