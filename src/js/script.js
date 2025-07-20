console.log('Initializing Complete');

// Recuperation des input

const m1Input = document.getElementById("m1Input");
const m2Input = document.getElementById("m2Input");
const rInput = document.getElementById("rInput");


// constante de la gravitation universel de Newton

const newtonGravity = 6.674e-11; 


// Btn resultat + function de calcul 
document.getElementById("resultBtn").addEventListener("click", () => {
    try {

        const m1 = parseFloat(m1Input.value);
        const m2 = parseFloat(m2Input.value);
        const r = parseFloat(rInput.value);

        const force = newtonGravity * (m1 * m2) / (r*r);
        document.getElementById("resultP").innerHTML = (force.toExponential(3)) + " N";
    } catch(e) {
        console.log(e)
    }
}) 
