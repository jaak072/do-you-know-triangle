const inputs = document.querySelectorAll(".triangle-input");
const isTriangleBtn = document.querySelector("#btn-IsTriangle");
const outputE1 = document.querySelector("#output");
outputE1.style.display = "none";
function showOutput(){
    outputE1.style.display = "";
}

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    if(Number(inputs[0].value)&&Number(inputs[1].value)&&Number(inputs[2].value)){
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

        if(sumOfAngles === 180){
            showOutput();
            outputE1.style.color = "green";
            outputE1.innerText = "yah, The angles form a triangle. 😎";
        }
        else{
            showOutput();
            outputE1.style.color = "black";
            outputE1.innerText = "O oh! The angle don't form a triangle. 😐🤔";
        }
    }
    else{
        showOutput();
        outputE1.style.color = "red";
        outputE1.innerText = "O oh!, All the fields are mandatory, please enter all the values!!🙄 😫";
    }
    
}


isTriangleBtn.addEventListener("click", isTriangle);