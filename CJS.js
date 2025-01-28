
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
    