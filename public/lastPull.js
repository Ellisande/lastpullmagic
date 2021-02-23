let lastPullButton = document.getElementById("last_pull");
let durgun = document.getElementById("durgun");
let win = document.getElementById("win");
let lose = document.getElementById("lose");

document.addEventListener("DOMContentLoaded", () => {
  if (Date.now() % 2 == 0) {
    const defaultImg = getComputedStyle(durgun).getPropertyValue(
      "--durgon-display-url"
    );
    durgun.style.setProperty("content", defaultImg);
  } else {
    const altImg = getComputedStyle(durgun).getPropertyValue(
      "--durgon-alt-display-url"
    );
    console.log(altImg);
    durgun.style.setProperty("content", altImg);
  }
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
  if (Math.floor(randomNumber) % 2 == 0) {
    console.log("Even, using default", Math.floor(randomNumber) % 2);
    const defaultImg = durgun.style.getPropertyValue("--durgon-display-url");
    durgun.style.setProperty("content", defaultImg);
  } else {
    const altImg = durgun.style.getPropertyValue("--durgon-alt-display-url");
    durgun.style.setProperty("content", altImg);
  }
};
