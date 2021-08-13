const sidesInput = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#check-areabtn");
const outputE1 = document.querySelector("#output");

outputE1.style.display = "none";

function showOutputArea (){
    outputE1.style.display = "";
}

function calculateAreaOfTriangle(b, h){
    const areaOfTriangle = (b*h)/2;
    return areaOfTriangle;
}

function calculateArea(){
    if(Number(sidesInput[0].value)&&Number(sidesInput[1].value)){
        const Area = calculateAreaOfTriangle(Number(sidesInput[0].value),Number(sidesInput[1].value));
        showOutputArea();
        outputE1.style.color = "green";
        outputE1.innerText = "Area Of triangle : "+ Area +" cm^2";

    }
    else{
        showOutputArea();
        outputE1.style.color = "red";
        outputE1.innerText = "O oh! All the fields are mandatory, please enter all the values!!🙄 😫";
    }
    

    console.log(Area);
}

checkAreaBtn.addEventListener("click", calculateArea);