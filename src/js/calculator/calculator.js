console.log("init from calculator")
import { calculate } from "./calculFunction.js";

//* ########################## Calculator ##########################

const calcSection = document.getElementById("pageContent");
const calcDiv = document.createElement("div");
const calcScreen = document.createElement("div");
const calcScreenContent = document.createElement("p");
const calcBtnDiv = document.createElement("div");
const calcBtn = ["C", "(", ")", "-", "7", "8", "9", "x", "4", "5", "6", "+", "1", "2", "3", "/", "00", "0", ".", "="];

calcSection.appendChild(calcDiv);
calcDiv.append(calcScreen, calcBtnDiv);
calcScreen.appendChild(calcScreenContent);

calcDiv.id = "calcContent";
calcScreen.id = "calcScreen";
calcBtnDiv.id = "calcBtnDiv";

let screenDisplay = "";
let numbers = [];
let writingNmb = "";
let calcul = "";

calcBtn.forEach(e => {
    const btn = document.createElement("button");
    btn.textContent = e;
    calcBtnDiv.appendChild(btn)
    btn.addEventListener("click", () => {
        if (e === "="){
            if (writingNmb !== ""){
                numbers.push(Number(writingNmb));
            }
            if (numbers.length >= 2){
            const result = calculate (numbers, calcul)
            console.log(result)
            screenDisplay = result;
            calcScreenContent.textContent = screenDisplay;
            numbers = [result];
            console.log(numbers)
            writingNmb = "";
            }
        } else if (e === "C"){
            screenDisplay = "";
            calcScreenContent.textContent = screenDisplay;
            writingNmb = "";
            numbers = [];
        } else if (e === "+"){
            reloadScreen(e)
            if (writingNmb !== "") {
                numbers.push(Number(writingNmb))
            }
            writingNmb = "";
            calcul = "addition";
            console.log(numbers)
        } else if (e === "x"){
            reloadScreen(e)
            if (writingNmb !== "") {
                numbers.push(Number(writingNmb))
            }
            writingNmb = "";
            calcul = "multiplication";
        } else if (e === "-"){
            reloadScreen(e)
            if (writingNmb !== "") {
                numbers.push(Number(writingNmb))
            }
            writingNmb = "";
            calcul = "soustraction";
        }else if (e === "/"){
            reloadScreen(e)
            if (writingNmb !== "") {
                numbers.push(Number(writingNmb))
            }
            writingNmb = "";
            calcul = "division";
        }
        else {
        screenDisplay += e;
        writingNmb += e;
        console.log(writingNmb);
        calcScreenContent.textContent = screenDisplay;
        }
    })
});

function reloadScreen(e) {
    screenDisplay += e;
    calcScreenContent.textContent = screenDisplay;
}