const characterCount = document.getElementById("character-count");
const span = document.querySelector("span");

characterCount.addEventListener("input", count);

function count() {
  const characters = characterCount.value.trim().length;
  span.textContent = characters;
}
