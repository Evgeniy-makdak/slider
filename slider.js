const texts = ["text1", "text2", "text3"];
const textOnDiv = document.getElementById("slider");
const arrowLeft = document.querySelector("#left");
const arrowRight = document.querySelector("#right");
let i = 0;

function renderText() {
  textOnDiv.textContent = texts[i];
}

arrowLeft.addEventListener("click", function () {
  i--;
  if (i === -1) {
    i--;
    i = 2;
    renderText();
  } else {
    renderText();
  }
});

arrowRight.addEventListener("click", function () {
  i++;
  if (i === 3) {
    i = 0;
    renderText();
  } else {
    renderText();
  }
});
