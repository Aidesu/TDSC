// Recuperation des input

const M1_INPUT = document.getElementById("m1Input");
const M2_INPUT = document.getElementById("m2Input");
const R_INPUT = document.getElementById("rInput");

// constante de la gravitation universel de Newton

const newtonGravity = 6.674e-11;

// Btn resultat + function de calcul
document.getElementById("resultBtnNewton").addEventListener("click", () => {
  try {
    const M1 = parseFloat(M1_INPUT.value);
    const M2 = parseFloat(M2_INPUT.value);
    const R = parseFloat(R_INPUT.value);

    const force = (newtonGravity * (M1 * M2)) / (R * R);
    document.getElementById("resultP").innerHTML =
      force.toExponential(4) + " N";
  } catch (e) {
    console.log(e);
  }
});
