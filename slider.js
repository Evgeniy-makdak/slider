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
    arrowLeft.disabled = true;
    return;
  } else {
    renderText();
    arrowRight.disabled = false;
  }
});

arrowRight.addEventListener("click", function () {
  i++;
  if (i === 3) {
    arrowRight.disabled = true;
    return;
  } else {
    renderText();
    arrowLeft.disabled = false;
  }
});
