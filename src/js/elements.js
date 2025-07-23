console.log("init");

fetch("../../ressources/data/elements.json")
    .then((response) => response.json())
    .then((json) => console.log(json));