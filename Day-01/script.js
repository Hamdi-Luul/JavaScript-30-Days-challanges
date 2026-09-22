const inputName = document.getElementById("name");
const button = document.getElementById("btn");
const show = document.getElementById("show-me");

button.addEventListener("click", showName);

function showName() {
  const name = inputName.value.trim();
  if (!name) {
    alert("name can't be empty");
    return;
  }
  show.style.display = "block";
  show.textContent = `hello ${name}👋`;
  inputName.value = "";
}

const h1 = document.querySelector("h1");
const p = document.querySelector("#p");
const clickBtn = document.querySelector("#click-me");
const resetBtn = document.querySelector("#reset");

clickBtn.addEventListener("click", () => {
  h1.textContent = "Hello, JavaScript!";
  p.textContent = "You just changed the page using JavaScript.";
  clickBtn.textContent = "Clicked!";
});
let page = "normal";
resetBtn.addEventListener("click", () => {
  if (page == "normal") {
    normalPage();
  } else if (page == "innormal") {
    innormalPage();
  }
});
function normalPage() {
  page = "innormal";

  h1.textContent = "Welcome to my website";
  p.textContent = "Click the button below.";
  clickBtn.textContent = "click me";
  resetBtn.textContent = "Reset Again";
}

function innormalPage() {
  page = "normal";
  h1.textContent = "Hello, JavaScript!";
  p.textContent = "You just changed the page using JavaScript.";
  clickBtn.textContent = "Clicked!";
   resetBtn.textContent = "Reset ";
  
}

//===============
const more = document.getElementById("more");
const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener("click", () => {
  if (sate == "first") {
    text1();
  } else if (sate == "second") {
    text2();
  } else if (sate == "third") {
    text3();
  }
});
let sate = "first";
function text1() {
  sate = "second";

  more.textContent = "hello cali";
  moreBtn.textContent = "cliked more";
}
// text1()

function text2() {
  sate = "third";
  more.textContent = "hello hamdi";
  moreBtn.textContent = "cliked one more";
}
function text3() {
  sate = "first";
  more.textContent = "hello hassan";
  moreBtn.textContent = "cliked 2 more";
}
