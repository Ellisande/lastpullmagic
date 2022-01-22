let lastPullButton = document.getElementById("last_pull");
let durgun = document.getElementById("durgun");
let win = document.getElementById("win");
let lose = document.getElementById("lose");

document.addEventListener("DOMContentLoaded", () => {
  const now = Date.now();
  let img = getComputedStyle(durgun).getPropertyValue("--durgon-display-url");
  if (now % 3 == 0) {
    img = getComputedStyle(durgun).getPropertyValue("--durgon-display-url");
  }
  if (now % 3 == 1) {
    img = getComputedStyle(durgun).getPropertyValue("--durgon-alt-display-url");
  }
  if (now % 3 == 2) {
    img = getComputedStyle(durgun).getPropertyValue(
      "--durgon-alt-display-2-url"
    );
  }
  durgun.style.setProperty("content", img);
});

lastPullButton.onclick = () => {
  durgun.classList.remove("ded");
  win.classList.add("hidden");
  win.classList.add("hidden");
  lastPullButton.classList.add("hidden");
  let tenMinutes = Math.floor(Date.now() / 600000); //10 minutes
  Math.seedrandom(tenMinutes);
  let randomNumber = Math.random() * 10;
  console.log(
    `My ten minutes is ${tenMinutes} and my number is ${randomNumber}`
  );
  if (randomNumber < 4) {
    win.classList.remove("hidden");
    durgun.classList.add("ded");
  } else {
    lose.classList.remove("hidden");
    durgun.classList.remove("ded");
  }
};
