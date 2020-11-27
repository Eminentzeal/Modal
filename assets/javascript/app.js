const button = document.querySelector("#button");
const bgModal = document.querySelector(".bg-modal");
const closeIcon = document.querySelector(".close");

button.addEventListener("mouseover", openModal);
function openModal() {
  bgModal.style.display = "flex";

closeIcon.addEventListener('click', closeModal);
function closeModal() {
  bgModal.style.display ='none'
}
}
