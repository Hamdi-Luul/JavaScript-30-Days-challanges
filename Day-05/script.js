const buttons = document.querySelectorAll(".button");
const selectedColor = document.getElementById("selectedcolor");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.id;
    selectedColor.innerHTML = `selected color: ${id}`;
    console.log(id);
  });
});
