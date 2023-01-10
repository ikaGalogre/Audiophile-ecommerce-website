const button = document.querySelector(".chart_btn");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-closer");

const checkerButton = document.querySelector(".checker_btn");
const checkerPopup = document.querySelector(".checker_popup_wrapper");
const checkClose = document.querySelector(".checker_popup_closer");

const burgerButton = document.querySelector("#burger");
const burgerPopup = document.querySelector(".burger-wrapper");
const burgerClose = document.querySelector(".burger-closer");

console.log(button, "button");
button?.addEventListener("click", () => {
  if (popup) popup.style.display = "block";
});
close?.addEventListener("click", () => {
  if (popup) popup.style.display = "none";
});
popup?.addEventListener("click", () => {
  if (popup) popup.style.display = "none";
});

//checker
checkerButton?.addEventListener("click", () => {
  checkerPopup.style.display = "block";
});
checkClose?.addEventListener("click", () => {
  checkerPopup.style.display = "none";
});
checkerPopup?.addEventListener("click", () => {
  checkerPopup.style.display = "none";
});

//burger
burgerButton?.addEventListener("click", () => {
  burgerPopup.style.display = "block";
});
burgerClose?.addEventListener("click", () => {
  burgerPopup.style.display = "none";
});
burgerPopup?.addEventListener("click", () => {
  burgerPopup.style.display = "none";
});
