let ourForm = document.getElementById("outform");
let ourField = document.getElementById("ourField");
let lists = document.getElementById("list");
let del = document.getElementById("del");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem();
});

function createItem() {
  let item = `<li>${ourField.value} <button onclick="deleteItem(this)">Delate</button></li>`;
  lists.insertAdjacentHTML("beforeend", item);
  ourField.value = "";
  ourField.focus();
}

function deleteItem(del) {
  del.parentElement.remove();
}
