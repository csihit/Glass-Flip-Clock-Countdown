let totalTime = 40; // Example: 1 hour 1 min 5 sec demo

const hourBox = document.getElementById("hours");
const minBox  = document.getElementById("minutes");
const secBox  = document.getElementById("seconds");
const title   = document.querySelector("h1");

function updateFlip(card, value) {
  const top = card.querySelector(".top");
  const bottom = card.querySelector(".bottom");

  if (top.textContent === value) return;

  card.classList.add("flip", "pulse");

  // Change number after top flip
  setTimeout(() => {
    top.textContent = value;
    bottom.textContent = value;
  }, 350);

  // Remove animation class
  setTimeout(() => {
    card.classList.remove("flip", "pulse");
  }, 700);
}

function updateClock() {
  const hours   = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  updateFlip(hourBox, String(hours).padStart(2, "0"));
  updateFlip(minBox,  String(minutes).padStart(2, "0"));
  updateFlip(secBox,  String(seconds).padStart(2, "0"));

  if (totalTime > 0) {
    totalTime--;
  } else {
    title.textContent = "🚀 TIME UP 🚀";
    title.classList.add("blast");
  }
}

updateClock();
setInterval(updateClock, 1000);
