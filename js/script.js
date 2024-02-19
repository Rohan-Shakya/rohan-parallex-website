// Elements
const HEADER = document.getElementById("header");
const SKY = document.getElementById("sky");
const CLOUD = document.getElementById("cloud");
const SUN = document.getElementById("sun");
const BIRD_1 = document.getElementById("bird-1");
const BIRD_2 = document.getElementById("bird-2");
const MOUNTAINS = document.getElementById("mountains");
const LAND = document.getElementById("land");
const FOREST = document.getElementById("forest");
const TITLE = document.getElementById("text");
const SCROLL_TOP_BUTTON = document.getElementById("scroll-top");
const FISH_1 = document.getElementById("fish-1");
const FISH_2 = document.getElementById("fish-2");
const FISH_3 = document.getElementById("fish-3");

// Constants for fish movement
const FISH_1_MOVE = 200;
const FISH_2_MOVE = 1200;
const FISH_3_MOVE = 1100;

// Adjusting bubble animation duration for smaller screens
if (screen.width < 400) {
  const BUBBLE = document.querySelector(".bubbles");
  BUBBLE.style.setProperty("--transform-duration", "15s");
  BUBBLE.style.setProperty("--transform-y", "-700vh");
}

// Adding scroll event listener
window.addEventListener("scroll", function () {
  // Getting scroll value
  let value = window.scrollY;

  // Showing/hiding scroll top button based on scroll position
  if (value > 700) {
    SCROLL_TOP_BUTTON.style.display = "block";
  } else {
    SCROLL_TOP_BUTTON.style.display = "none";
  }

  // Parallax effects for various elements
  TITLE.style.top = 65 + value * -0.2 + "%";
  CLOUD.style.left = value * 2 + "px";
  BIRD_1.style.top = value * 0.1 + "px";
  BIRD_1.style.left = value * 1 + "px";
  BIRD_2.style.top = value * -0.1 + "px";
  BIRD_2.style.left = value * -2 + "px";
  LAND.style.top = value * 0 + "px";
  FOREST.style.top = value * 0.4 + "px";
  SKY.style.top = value * 0.25 + "px";
  MOUNTAINS.style.top = value * 0.25 + "px";
  HEADER.style.top = value * 0.7 + "px";
  SUN.style.top = value * 1 + "px";

  // Fish animations
  FISH_1.style.left = (value + FISH_1_MOVE) * 1 + "px";
  FISH_2.style.top = FISH_2_MOVE + value * -0.4 + "px";
  FISH_2.style.right = (value - FISH_2_MOVE) * 0.3 + "px";
  FISH_3.style.left = (value - FISH_3_MOVE) * 1 + "px";
});
