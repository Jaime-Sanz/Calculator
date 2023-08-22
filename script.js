
let number1 = document.getElementById("display-1");
let number2 = document.getElementById("display-2");
let operator = document.getElementById("display-x");
let result = document.getElementById("result");
let x = 0;
let y = 0;
let displayValue = 0;


function getNumbers(numbers){
    if(operator.innerText === "+" || operator.innerText === "-" || operator.innerText=== "x" || operator.innerText === "/" || operator.innerText === "%"){
        number2.innerText = number2.innerText + numbers;
    } else{
        number1.innerText = number1.innerText + numbers;
    }
}

function operation(value){
    operator.innerText = value;
}

function valueConversion(){

    x = Number(number1.innerText);
    y = Number(number2.innerText);

    switch(operator.innerHTML){
        case "+":
            addition(x, y);
        break;
        case "-":
            subtraction(x, y);
        break;
        case "/":
            division(x, y);
        break;
        case "x":
            multiplication(x, y);
        break;
        case "%":
            percentage(x, y);
        break;
    }
}

function addition(num1, num2) {
    displayValue = Math.round((num1 + num2)* 1000) / 1000;;
    result.innerText = displayValue;
}

function subtraction(num1, num2){
    displayValue = Math.round((num1 - num2)* 1000) / 1000;;
    result.innerText = displayValue;
}

function division(num1, num2){
    if(num2 === 0){
        number1.innerText = ""
        operator.innerText = ""
        number2.innerText = ""
        result.innerText = "You Know Better!";
        result.style.fontSize = "22px";
    } else {
        displayValue = Math.round((num1 / num2)* 1000) / 1000;
        result.innerText = displayValue;
    }
}

function multiplication(num1, num2){
    displayValue = Math.round((num1 * num2)* 1000) / 1000;
    result.innerText = displayValue;
}

function percentage(num1, num2){
    displayValue = displayValue = Math.round(((x/100)*y)* 1000) / 1000;
    result.innerText = displayValue;
}

function eraseEverything(){
    number1.innerText = ""
    number2.innerText = ""
    operator.innerText = ""
    result.innerText = ""
    if(result.style.fontSize === "22px"){
        result.style.fontSize = "48px";
    }
}

function eraseOne(){
    if (number1.innerText === "" && number2.innerText === "" && operator.innerText === ""){
        result.innerText = result.innerText.substr(0,result.innerText.length-1);
    } else if (operator.innerText != "" && number2.innerText === ""){
        operator.innerText = "";
    } else if(number2.innerText === ""){
        number1.innerText = number1.innerText.substr(0,number1.innerText.length-1);
    } else if (number1.innerText != ""){
        number2.innerText = number2.innerText.substr(0,number2.innerText.length-1);
    }
}

const gitRead = () => {
    window.open("https://github.com/Jaime-Sanz/Calculator")
}