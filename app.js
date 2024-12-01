"use strict";

// Variable declaration
const container = document.querySelector(".container");
const btn = document.getElementById("color-btn");
const colorCode = document.getElementById("color-code");
let hexCode = "";

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const hexCodeArr = [];

btn.addEventListener("click", () => {
  // Array reset
  hexCodeArr.length = 0;

  // HEX color code making
  const hexCodeMaker = function () {
    const randomizerIndex = Math.floor(Math.random() * hexNumbers.length);
    return hexNumbers[randomizerIndex];
  };

  for (let i = 0; i < 6; i++) {
    hexCodeArr.push(hexCodeMaker());
  }
  // Function from array to string
  const arrayToString = function (arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  };

  hexCode = arrayToString(hexCodeArr);

  // HTML magic
  container.style.backgroundColor = `#${hexCode}`;
  colorCode.innerHTML = `#${hexCode}`;
  colorCode.style.color = `#${hexCode}`;
});
