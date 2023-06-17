/**
 * Modal Actions
 */
const modalButtonOpen = document.querySelector(".modal-button-open");
const modal = document.querySelector("dialog");
const modalButtonClose = document.querySelector(".modal-button-close");
const modalSubmitButton = document.querySelector(".btn-submit");

const closeSuccessfulSubmissionModalButton = document.querySelector(
  "#modal-button-close2"
);

modalButtonOpen.addEventListener("click", () => modal.showModal());

modalButtonClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();

  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});

closeSuccessfulSubmissionModalButton.addEventListener("click", () => {
  successfulSubmissionContent.style.display = "none";
  form.style.display = "flex";

  modal.close();
});
