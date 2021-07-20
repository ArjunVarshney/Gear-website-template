let firstgear = document.getElementById("Vector");
firstgear.style.animation = "clockwise 12s linear infinite";
firstgear.style.filter = "drop-shadow(0 0 20px black)";
firstgear.style.transformOrigin = "center";
firstgear.style.transformBox = "fill-box";
for (let i = 2; i <= 66; i++) {
  const element = document.getElementById(`Vector_${i}`);
  element.style.filter = "drop-shadow(0 0 5px black)";
  element.style.transformOrigin = "center";
  element.style.transformBox = "fill-box";
  let random = Math.round(Math.random());
  let time = 10 + Math.random() * 7;
  if (random == 0) {
    element.style.animation = `clockwise ${time}s linear infinite`;
  } else {
    element.style.animation = `clockwise ${time}s linear infinite`;
    element.style.animationDirection = "reverse";
  }
}

function lightup() {
  let bulb = document.querySelector("#light>div");
  bulb.classList.toggle("bulb");
  firstgear.classList.toggle("shadowtoggle");
  for (let i = 2; i <= 66; i++) {
    const element = document.getElementById(`Vector_${i}`);
    element.classList.toggle("shadowtoggle");
  }
  document.querySelector(".outerframe>.first").classList.toggle("shadowtoggle");
  document
    .querySelector(".outerframe>.second")
    .classList.toggle("shadowtoggle");
  document.querySelector("#wheel>.center").classList.toggle("shadowtoggle");
  document.querySelector("#back>.blur").classList.toggle("shadowtoggle");
  Array.from(document.getElementsByClassName("hole")).forEach((element) =>
    element.classList.toggle("shadowtoggle")
  );
}
