const texts = ["text1", "text2", "text3"];
const textOnDiv = document.getElementById("slider");
const arrowLeft = document.querySelector("#left");
const arrowRight = document.querySelector("#right");
let i = 0;
textOnDiv.textContent = texts[0];

function renderText() {
  textOnDiv.textContent = texts[i];
}

arrowLeft.addEventListener("click", function () {
  if (i === 0) {
    arrowLeft.disabled = true;
    return;
  } else {
    --i;
    renderText();
    arrowRight.disabled = false;
  }
});

arrowRight.addEventListener("click", function () {
  if (i === 2) {
    arrowRight.disabled = true;
    return;
  } else {
    ++i;
    renderText();
    arrowLeft.disabled = false;
  }
});
