// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBnt = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBnt.addEventListener("click", () => {
  console.log(modalBnt.children);
  modal.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
