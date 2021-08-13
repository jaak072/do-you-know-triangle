const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

outputE1.style.display = "none";
function showOutput(){
    outputE1.style.display = "";
}

function calculateSumOfSquares(a, b){
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}


function calculateHypotenuse(){
    if(sides[0].value&&sides[1].value){
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        showOutput();
        outputE1.style.color = "green"
        outputE1.innerText = "The length of hypotenuse is " + lengthOfHypotenuse +".";
    }
    else{
        showOutput();
        outputE1.style.color = "red"
        outputE1.innerText = "ooho ,All the fields are mandatory, please enter all the values!.😏";
    }
    
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);