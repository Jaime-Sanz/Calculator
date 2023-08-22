
let number1 = document.getElementById("display-1");
let number2 = document.getElementById("display-2");
let operator = document.getElementById("display-x");
let x = 0;
let y = 0;


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
            subtraction(x,y);
        break;
        case "/":
            division(x,y);
        case "x":
            multiplication(x,y);
        break;
        case "%":
            percentage(x,y);
        break;
    }
}

function addition(num1, num2) {
    let displayValue = num1 + num2;
    result.innerText = displayValue;
}

function subtraction(){
    let displayValue = num1 - num2;
    result.innerText = displayValue;
}

function division(){
    let displayValue = num1 / num2;
    result.innerText = displayValue;
}

function multiplication(){
    let displayValue = num1 * num2;
    result.innerText = displayValue;
}

function percentage(){
    let displayValue = (x/100)*y;
    result.innerText = displayValue;
}

function eraseEverything(){
    number1.innerText = ""
    number2.innerText = ""
    operator.innerText = ""
    result.innerText = ""
}

function eraseOne(){
    if(number2.innerText === ""){
        number1.innerText = number1.innerText.substr(0,number1.innerText.length-1);
    } else if (number1.innerText != ""){;
        number2.innerText = number2.innerText.substr(0,number2.innerText.length-1);
    }
}