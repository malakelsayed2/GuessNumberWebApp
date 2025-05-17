let randomNumber = Math.floor(Math.random() * 101);
var attempts = 0 ;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const input = document.getElementById("nameInput");
    const guessBtn = form.querySelector("button");
    const message = document.getElementById("message");
    const playAgainBtn = document.getElementById("playAgainBtn");
    const attemptsDisplay = document.getElementById("attemptsCount");

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const guessedNumber = parseInt(input.value);

    
    attempts ++ ;
    attemptsDisplay.textContent = `Attempts: ${attempts}`; 

    if (guessedNumber === randomNumber) {
    message.textContent = `You got it ${randomNumber}! After ${attempts} attempts.`;
    input.disabled = true;
    guessBtn.disabled = true;
    attemptsDisplay.textContent ="" ;
    playAgainBtn.style.display = "inline"; 
    } 
    
    else if (guessedNumber < randomNumber) {
    message.textContent = 'Try a greater number';
    } 
    
    else {
    message.textContent = 'Try a smaller number';
    }

    input.value = "";
});

playAgainBtn.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 101);
    input.disabled = false;
    guessBtn.disabled = false;
    input.value = "";
    message.textContent = "";
    playAgainBtn.style.display = "none";
    attempts =0 ;
});


        });
