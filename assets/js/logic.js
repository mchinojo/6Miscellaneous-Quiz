
let score = 0;


// Timer
let timer = document.querySelector('#time');
let secondsLeft = 60;
let timerInterval = null;

timer.textContent = secondsLeft + " seconds left.";

setTime();
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        timer.textContent = secondsLeft + " seconds left.";
        secondsLeft--;


        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            allDone();
        }

    }, 1000);
}

// Function to create and append colorsplosion image
function allDone() {
    timer.textContent = "0";
    let questionsDiv = document.getElementById("questions");
    let endScreen = document.getElementById("end-screen");
    questionsDiv.classList.add("hide");
    endScreen.classList.remove("hide");
    clearInterval(timerInterval);
    finalScore.textContent = `${score}`






}



