console.log("Initialisation complete");

let a = 2;
let b = 3;
const calcFeur = ["+", "-", "/", "*"];

function calcAd() {
  const result = a + b;
  console.log(
    `Le resultat de ${a} ${calcFeur[0]} ${b} est : ` + parseFloat(result)
  );
}

calcAd();
