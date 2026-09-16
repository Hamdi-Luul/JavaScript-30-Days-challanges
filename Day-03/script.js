const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
const nameLists = document.querySelector(".name-lists");

function addNames() {
  const names = nameInput.value.trim();
  if (!names) {
    alert("enter a name");
    return;
  }
  const name = document.createElement("p");
  name.textContent = names;
  nameLists.appendChild(name);
  nameInput.value = "";
}
addBtn.addEventListener("click", addNames);
