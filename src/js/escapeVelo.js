// recuperation des input et declaration de la constante de gravitation universelle

const MASS_INPUT = document.getElementById("mInput");
const RADIUS_INPUT = document.getElementById("rInput");
const NEWTON_GRAVITY = 6.674e-11;

// function on click resultat
document.getElementById("resultBtn").addEventListener("click", () => {
  try {

    const MASS = parseFloat(MASS_INPUT.value);
    const RADIUS = parseFloat(RADIUS_INPUT.value);

    const RESULT = Math.sqrt((2 * NEWTON_GRAVITY * MASS) / RADIUS);
    document.getElementById("resultP").innerHTML = RESULT.toFixed(2) + " m/s";
    console.log(RESULT);

  } catch(e) {
    console.log(e);
  }
});

