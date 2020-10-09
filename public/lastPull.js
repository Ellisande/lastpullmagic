let lastPullButton = document.getElementById("last_pull");
let durgun = document.getElementById("durgun");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
lastPullButton.onclick = () => {
  durgun.classList.remove("ded");
  win.classList.add("hidden");
  win.classList.add("hidden");
  lastPullButton.classList.add("hidden");
  let tenMinutes = Math.floor(Date.now() / 600000); //10 minutes
  let randomNumber = Math.random(tenMinutes) * 10;
  if (randomNumber < 4) {
    win.classList.remove("hidden");
    durgun.classList.add("ded");
  } else {
    lose.classList.remove("hidden");
    durgun.classList.remove("ded");
  }
};
