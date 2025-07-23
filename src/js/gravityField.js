const MASS_INPUT = document.getElementById("mInput");
const R_INPUT = document.getElementById("rInput");
const NEWTON_GRAVITY = 6.674e-11;

document.getElementById("resultBtn").addEventListener("click", () => {
    const MASS = parseFloat(MASS_INPUT.value);
    const R = parseFloat(R_INPUT.value);

    const RESULT_GRAVITY_FIELD = ((NEWTON_GRAVITY * MASS) / (R * R));
    document.getElementById("resultP").innerHTML = RESULT_GRAVITY_FIELD.toFixed(2) + " m/s²";
    console.log(RESULT_GRAVITY_FIELD);
})