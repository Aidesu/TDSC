const sun = 1.9891e30;
const sgrA = 8.54e36;

const earth = 5.972e24;
const jupiter = 1.9e27;
const saturn = 5.68e26;
const neptune = 1.02e26;
const uranus = 8.68e25;
const venus = 4.87e24;
const mars = 6.2e23;
const mercury = 3.3e23;

const copyArray = {
  id: ["copySun", "copyEarth"],
  calc: ["sun", "earth"],
};

console.log("initializing complete");
//############################## Copy Button ##############################

document.getElementById("copySun").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(sun);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyEarth").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(earth);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copySgrA").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(sgrA);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyJupiter").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(jupiter);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copySaturn").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(saturn);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyNeptune").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(neptune);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyUranus").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(uranus);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyVenus").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(venus);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyMars").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(mars);
  } catch (e) {
    console.log(e.message);
  }
});

document.getElementById("copyMercury").addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(mercury);
  } catch (e) {
    console.log(e.message);
  }
});

//######################################################################
