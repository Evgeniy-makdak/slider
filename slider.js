const texts = ["text1", "text2", "text3"];
const textOnDiv = document.getElementById("slider");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let i = 0;
  setInterval(() => {
    textOnDiv.textContent = texts[i];
    i++;
    if (i === texts.length) {
      i = 0;
    }
  }, 1000);
});
