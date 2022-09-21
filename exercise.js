//solution goes here....
const addNoteInput = document.querySelector("#add-input");
const addNoteButton = document.querySelector("#add-btn");
const noteList = document.querySelector("#list");

addNoteButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!addNoteInput.value) return;
  const newItem = document.createElement("li");
  const inputValue = addNoteInput.value;
  // const newP = document.createElement("p");
  // const newInput = document.createElement("input");

  newItem.innerHTML = `<p>${inputValue}</p>
  <p>
      <i class="fa fa-pencil-square-o"></i>
      <i class="fa fa-times"></i>
  </p>
  <input type="text" class="edit-note">`;
  noteList.appendChild(newItem);
  addNoteInput.value = "";
});
