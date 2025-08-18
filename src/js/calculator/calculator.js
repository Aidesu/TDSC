console.log("init from calculator")
import { addition } from "./calculFunction.js";

//* ########################## Calculator ##########################

const calcSection = document.getElementById("pageContent");
const calcDiv = document.createElement("div");
const calcScreen = document.createElement("div");
const calcScreenContent = document.createElement("p");
const calcBtnDiv = document.createElement("div");
const calcBtn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "x", "/", "=", "C", "(", ")"];

calcSection.appendChild(calcDiv);
calcDiv.append(calcScreen, calcBtnDiv);
calcScreen.appendChild(calcScreenContent);

calcDiv.id = "calcContent";
calcScreen.id = "calcScreen";
calcBtnDiv.id = "calcBtnDiv";

let screenDisplay = "";
let numbers = [];
let writingNmb = 0;
let calcul = "";

calcBtn.forEach(e => {
    const btn = document.createElement("button");
    btn.textContent = e;
    calcBtnDiv.appendChild(btn)
    btn.addEventListener("click", () => {
        if (e === "="){
            numbers.push(Math.floor(writingNmb));
            if (numbers.length >= 2){
            const result = addition (numbers, calcul)
            console.log(result)
            screenDisplay = result;
            calcScreenContent.textContent = screenDisplay;
            numbers = [];
            numbers.push(result);
            console.log(numbers)
            writingNmb = 0;
            }
        } else if (e === "C"){
            screenDisplay = "";
            calcScreenContent.textContent = screenDisplay;
            writingNmb = 0;
            numbers = [];
        } else if (e === "+"){
            screenDisplay += e;
            numbers.push(Math.floor(writingNmb))
            writingNmb = 0;
            calcul = "addition";
        } else if (e === "x"){
            screenDisplay += e;
            numbers.push(Math.floor(writingNmb))
            if (numbers.length === 0){
            writingNmb = 0;
            }
            calcul = "multiplication";
        } else if (e === "-"){
            screenDisplay += e;
            if (numbers.length === 0){
            numbers.push(Math.floor(writingNmb))
            writingNmb = 0;
            }
            calcul = "soustraction";
        }
        else {
        screenDisplay += e;
        writingNmb += e;
        console.log(writingNmb);
        calcScreenContent.textContent = screenDisplay;
        }
    })
});