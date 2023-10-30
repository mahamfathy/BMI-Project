"use strict";
const welcomeResult = document.querySelector("#welcome-section");
const height = document.querySelector(".heigh-cm");
const weight = document.querySelector(".weight-kg");
const resultparag = document.getElementById("bmiParag");
const imperial = document.getElementById("imperial-radio");
const merticDiv = document.getElementById("metric-input");
const imperialDiv = document.getElementById("imperial-input");
const lbsDiv = document.getElementById("weight-lbs");
const feetDiv = document.getElementById("height-ft");
const inchesDiv = document.getElementById("height-in");
const classification = document.getElementById("classification");
let resultBmi;
function bmiResult() {
  if (weight.value && height.value) {
    resultBmi = (weight.value / height.value ** 2) * 10000;
    rates();
    weight.value = height.value = "";
  }
  resultparag.textContent = `your BMI result is ${resultBmi.toFixed(2)}% `;
}
if (feetDiv.value && inchesDiv.value && lbsDiv.value) {
  const totalInches = (feetDiv.value * 12 + inchesDiv.value) * 10000;
  resultBmi = (lbsDiv.value / totalInches ** 2) * 703;
  rates();
  resultparag.textContent = `your BMI result is ${resultBmi.toFixed(2)}% 
    `;
  feetDiv.value = inchesDiv.value = lbsDiv.value = "";
} else {
  resultparag.textContent = `  Enter your height and weight and you'll see your BMI result here`;
}

function imperialDisplay() {
  merticDiv.style.display = "none";
  imperialDiv.style.display = "flex";
}

function merticDisplay() {
  merticDiv.style.display = "flex";
  imperialDiv.style.display = "none";
}
const rates = function () {
  if (resultBmi < 18.5) {
    classification.textContent = "you are Underweight 🤦‍♂️";
  } else if (resultBmi < 24.9) {
    classification.textContent = "you are Healthy💯";
  } else if (resultBmi < 29.9) {
    classification.textContent = "you are Overweight 🏋️‍♂️";
  } else {
    classification.textContent = " you are Obese ⚠";
  }
};
