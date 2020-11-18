const modalBtn = document.querySelector("#modal-btn");
const myModal = document.querySelector("#my-modal");
const modalContent = document.querySelector(".modal-content");
const closeIcon = document.querySelector(".close");

modalBtn.addEventListener("click", openModal);
function openModal() {
    myModal.style.display = "block";

closeIcon.addEventListener('click', closeModal);
function closeModal() {
  myModal.style.display ='none'
}

}
