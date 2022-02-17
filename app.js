"use strict";
// Declare and initilaize the background
const pageBG = document.querySelector("#background-color");
// Declare and initilaize the button and add eventlistener
const clickBtn = document.querySelector("#background-color button");
clickBtn.addEventListener("click", changeBackgroundColor);

// Create Function
function changeBackgroundColor() {
  // Array data of colors
  const colorArray = ["red", "blue", "green", "yellow", "grey"];
  // Add random integer value between 0 and 5
  const randomColor = Math.trunc(Math.random() * 5);
  // Dynamically add random integer value to change background color in the Dom
  pageBG.style.backgroundColor = colorArray[randomColor];

  //Display results in the console
  console.log(`${randomColor} : ${colorArray[randomColor]}`);
}

changeBackgroundColor();
