// const buttonItem = document.querySelectorAll(".button-item");
// const output = document.getElementById("input");
// const symboleMultiplication = document.getElementById("multi");
// const symboleDivision = document.getElementById("div");


// // stockage des valeurs 
// let table = [];
// let calcul = "";
// let valeur;
// let positionPlus = -1;
// let positionMoins = -1;
// let positionDivision = -1;
// let positionMultiplication = -1;
// let positionPoint = -1;


// buttonItem.forEach(item => {
//     item.addEventListener('click', function () {

    
//         valeur = this.innerText;

//         if ((valeur === "+" || valeur === "-" || valeur === symboleMultiplication.innerText || valeur === symboleDivision.innerText) && table.length === 0) {
//             output.innerHTML = "Syntax Error!";
//             table = [];
//         }
//         else {
//             output.innerText = valeur;
//             ajouter(valeur);
//             calcul += valeur;

            
//             if (valeur === "+") {
//                 positionPlus = table.length - 1;
//             }
//             if (valeur === "-") {
//                 positionMoins = table.length - 1;
//             }
//             if (valeur === symboleDivision.innerText) {
//                 positionDivision = table.length - 1;
//             }
//             if (valeur === symboleMultiplication.innerText) {
//                 positionMultiplication = table.length - 1;
//             }

//         }

//     });

// });

// //suppresssion  des valeurs de la partie output
// function clearr() {
//     output.innerHTML = "";
//     table = [];
//     calcul = "";
// }

// // ajout d'une valeur dans le tableau 
// function ajouter(a) {
//     table.push(a);
//     console.log(table);

// }

// // l'addition
// function resultat() {

    
//     if (positionPlus !== -1) {        // la somme
//         calcul.trim;

//         let partie1 = calcul.substring(0, positionPlus)
//         let partie2 = calcul.substring(positionPlus+1, table.length);
      
//         partie1 = parseFloat(partie1);
//         partie2 = parseFloat(partie2);
//         console.log(partie2);

//         let somme = partie1 + partie2;
//         console.log(somme);
//         output.innerHTML=somme;

//         // Remettre la table à zéro
//         table = [];  
//         calcul = "";
//         console.log(calcul);

//         positionPlus=-1;

//     }
//     if (positionMoins !== -1) {
//         calcul.trim;

//         let partie3=calcul.substring(0, positionMoins);
//         let partie4=calcul.substring(positionMoins+1, table.length);

//         partie3 = parseFloat(partie3);    
//         partie4 = parseFloat(partie4);
//         console.log(partie3);
//         console.log(partie4);
        
//         // la soustraction
//         let soustraction = partie3 - partie4;
//         console.log(soustraction);
        
//         output.innerHTML = soustraction;
//         console.log(output.innerHTML);
        
//         //remettre le tableau a zero  
//         table = [];
//         calcul = "";

//         positionMoins=-1;

//     }

//     // la  division
//     if (positionDivision !== -1) {
//         calcul.trim;

//         let partie5=calcul.substring(0, positionDivision);
//         let partie6=calcul.substring(positionDivision+1, table.length);

//         partie5 = parseFloat(partie5);
//         partie6 = parseFloat(partie6);
        
//         // la division       
//         let division = partie5 / partie6;
//         output.innerHTML = division;

//         //remettre le tableau a zero 
//         table = [];
//         calcul = "";

//         positionDivision=-1;

//     }
//     // la multiplication
//     if (positionMultiplication !== -1) {
//         calcul.trim;

//         let partie7=calcul.substring(0, positionMultiplication);
//         let partie8=calcul.substring(positionMultiplication+1, table.length);
      
//         partie7 = parseFloat(partie7);
//         partie8 = parseFloat(partie8);

//         // le produit       
//         let multiplication = partie7 * partie8;
//         output.innerHTML = multiplication;

//         //remettre le tableau a zero 
//         table = [];
//         calcul = "";

//         positionMultiplication=-1;

//     }
// }


const buttonItem = document.querySelectorAll(".button-item");
const output = document.getElementById("input");
const symboleMultiplication = document.getElementById("multi");
const symboleDivision = document.getElementById("div");

// Stockage des valeurs 
let table = [];
let calcul = "";
let valeur;
let positionPlus = -1;
let positionMoins = -1;
let positionDivision = -1;
let positionMultiplication = -1;
let positionPoint = -1;

buttonItem.forEach(item => {
    item.addEventListener('click', function () {
        valeur = this.innerText;

        
        if ((valeur === "+" || valeur === "-" || valeur === symboleMultiplication.innerText || valeur === symboleDivision.innerText) && table.length === 0) {
            output.innerHTML = "Syntax Error!";
            table = [];
        } else {
            
            calcul += valeur;
            output.innerText = calcul;  
            ajouter(valeur);

            // Suivi des positions des opérateurs
            if (valeur === "+") {
                positionPlus = table.length - 1;
            }
            if (valeur === "-") {
                positionMoins = table.length - 1;
            }
            if (valeur === symboleDivision.innerText) {
                positionDivision = table.length - 1;
            }
            if (valeur === symboleMultiplication.innerText) {
                positionMultiplication = table.length - 1;
            }
        }
    });
});

// Suppression des valeurs
function clearr() {
    output.innerHTML = "";
    table = [];
    calcul = "";
}

// Ajout d'une valeur dans le tableau
function ajouter(a) {
    table.push(a);
    console.log(table);
}

// Calcul des résultats
function resultat() {
    calcul = calcul.trim(); // On enlève les espaces superflus

    if (positionPlus !== -1) {
        let partie1 = parseFloat(calcul.substring(0, positionPlus));
        let partie2 = parseFloat(calcul.substring(positionPlus + 1));

        let somme = partie1 + partie2;
        output.innerHTML = somme;
        resetCalculator();
    }

    if (positionMoins !== -1) {
        let partie3 = parseFloat(calcul.substring(0, positionMoins));
        let partie4 = parseFloat(calcul.substring(positionMoins + 1));

        let soustraction = partie3 - partie4;
        output.innerHTML = soustraction;
        resetCalculator
//les variables
const numbers = document.querySelectorAll("div.numbers > div");
const operators = document.querySelectorAll("div.operators > div");
const result = document.getElementById("result");
const input = document.getElementById("input");
const clearButton = document.getElementById("clear");
//stockage des valeurs
let number1 = 0;
let number2 = 0;
let operator = "";
let isOperatorSet = false;


//boucle forEach pout recuperer la valeur clique
numbers.forEach((element) => {
    element.addEventListener('click', (e) => {
        const value = e.currentTarget.innerHTML;

        if (input.innerHTML === "0" || (!isOperatorSet && number1 === 0)) {
            input.innerHTML = value;
            if (!isOperatorSet) {
                number1 = parseFloat(value);
            } else {
                number2 = parseFloat(value);
            }
        } else {
            input.insertAdjacentHTML("beforeend", value);
            if (!isOperatorSet) {
                number1 = parseFloat(input.innerHTML);
            } else {
                number2 = parseFloat(number2 + value);
            }
        }
    });
});

operators.forEach((element) => {
    element.addEventListener('click', (e) => {
        operator = e.currentTarget.innerHTML;
        isOperatorSet = true;
        input.insertAdjacentHTML("beforeend", operator);
    });
});

result.addEventListener('click', () => {
    calculate();
});
// suppresssion des valeurs de la partie output

clearButton.addEventListener('click', () => {
    input.innerHTML = "0";
    number1 = 0;
    number2 = 0;
    operator = "";
    isOperatorSet = false;
});
 

  // les operations de la calculatrice 
function calculate() {
    let resultValue;
    switch (operator) {
        case "+":
            resultValue = number1 + number2;
            break;
        case "-":
            resultValue = number1 - number2;
            break;
        case "×":
            resultValue = number1 * number2;
            break;
        case "÷":
            resultValue = number2 !== 0 ? number1 / number2 : "Error";
            break;
        default:
            resultValue = number1;
            break;
    }
    // si utilisateur a entre 
    input.innerHTML = resultValue;
    number1 = resultValue;
    number2 = 0;
    isOperatorSet = false;
}
    }}