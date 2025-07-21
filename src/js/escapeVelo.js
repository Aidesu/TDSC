const NEWTON_GRAVITY = 6.674e-11;
console.log(`initializing ${NEWTON_GRAVITY}`);

const MASS = document.getElementById("mInput");
const RADIUS = document.getElementById("rInput");
const GRAVITY = document.getElementById("gInput");

let RKm = 6380;
let gravityF = 9.8;
let massAstre = 5.972e24;

let CMASS = parseFloat(MASS);

document.getElementById("resultBtnEscapeVelo").addEventListener("click", () => {
  try {
    console.log("CMASS");
  } catch (e) {
    console.log(e.message);
  }
});
