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

document.getElementById('play-button').addEventListener('click', function() {
  // Hide the thumbnail and play button
  document.getElementById('video-thumbnail').style.display = 'none';
  document.getElementById('play-button').style.display = 'none';

  // Show the YouTube video iframe
  document.getElementById('youtube-video').style.display = 'block';

  // Automatically start playing the video
  document.getElementById('youtube-video').src += "?autoplay=1";
});