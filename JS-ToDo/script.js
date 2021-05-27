"use strict";

let inputDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let addBtn = document.querySelector("#liveToastBtn");
let toastAlert = document.querySelector("#liveToast");

//let newUl = JSON.parse(localStorage.getItem("ul"));
//console.log(newUl);
// Functions

function addInput() {
  let liDOM = document.createElement("li");
  if (inputDOM.value) {
    liDOM.innerHTML = `${inputDOM.value} <span class="close">×</span>`;
    listDOM.append(liDOM);
    inputDOM.value = "";
    $("#liveToast").toast("show");
  } else {
    $("#liveToastAlert").toast("show");
  }
}

//Events

addBtn.addEventListener("click", addInput);
listDOM.addEventListener("click", function (e) {
  if (e.target.className === "close") {
    e.target.parentElement.style = "display:none;";
  } else {
    e.target.classList.toggle("checked");
  }
});
