const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-answerBtn");
const outputE1 = document.querySelector("#output");

outputE1.style.display = "none";
function showOutput(){
    outputE1.style.display = "";
}

const correctAnswers = ["90°", "right angled", "5cm", "30","Isosceles", "Both", "Scalene", "March 25, 1911", "acute", "Equilateral"];



function calculateScore(){
    // console.log("clicked");
    let score = 0;
    let index = 0;
    const formresults = new FormData(quizForm);
    for(let value of formresults.values()){
        if(value === correctAnswers[index]){
            score = score + 4;
        }
        else{
            score = score - 1;
        }
        index = index + 1;
    }
    // console.log(score);
    showOutput();
    outputE1.innerText = "Your Score is : " + score + " out of 40.";
}


submitAnsBtn.addEventListener("click", calculateScore);