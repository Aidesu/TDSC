console.log("init");

const section = document.querySelector("#elementsCardsSection");

fetch("../../ressources/data/elements.json")
    .then((response) => response.json())
    .then((elements) => {

        console.log(elements);

        for (const element of elements){
            const card = document.createElement("div");
            card.classList.add("elemCards");

            const h4 = document.createElement("h4");
            h4.innerText = element.Numero;

            const h3 = document.createElement("h3");
            h3.innerText = element.Symbole;

            const p1 = document.createElement("p");
            p1.innerText = element.MasseMolaire;

            const p = document.createElement("p");
            p.innerText = element.Nom;



            card.appendChild(h4);
            card.appendChild(h3);
            card.appendChild(p1);
            card.appendChild(p);

            section.appendChild(card);
        }
    
    });