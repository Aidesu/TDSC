export function addition (numbers, calcul){
    switch (calcul) {
        case "addition":
            return numbers.reduce((acc, curr) => acc + curr);
        break;
        case "multiplication":
            return numbers.reduce((acc, curr) => acc * curr);
        break;
        case "soustraction":
            return numbers.reduce((acc, curr) => acc - curr);
        break;
    }
}