const button = document.querySelector(".chart_btn");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-closer");
const checkerButton = document.querySelector(".checker_btn");
const checkerPopup = document.querySelector(".checker_popup_wrapper");
const checkClose = document.querySelector(".checker_popup_closer");

button.addEventListener("click", () => {
  popup.style.display = "block";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
//checker
checkerButton.addEventListener("click", () => {
  checkerPopup.style.display = "block";
});
checkClose.addEventListener("click", () => {
  checkerPopup.style.display = "none";
});
checkerPopup.addEventListener("click", () => {
  checkerPopup.style.display = "none";
});
