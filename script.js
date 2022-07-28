"use strict";

// select elements

const title = document.getElementById("title-color");
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("increase")) {
      counter++;
    } else if (e.currentTarget.classList.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    value.textContent = counter;
    changeColor();
  });
});

function changeColor() {
  if (counter > 0) {
    value.style.color = "green";
    title.style.color = "green";
  } else if (counter < 0) {
    value.style.color = "red";
    title.style.color = "red";
  } else {
    value.style.color = "#a7a9be";
    title.style.color = "#fffffe";
  }
}
