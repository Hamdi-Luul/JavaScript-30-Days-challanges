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
  name.innerHTML = `<span >${names}</span> <button class="delete">delete</button>`;
  nameLists.appendChild(name);
  nameInput.value = "";
  // delete names
  const deleteBtn = name.querySelector(".delete");

  deleteBtn.addEventListener("click", (event) => {
    const id = event.target.parentElement;
    id.remove();
  });
}
addBtn.addEventListener("click", addNames);
