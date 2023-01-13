// Timer
let timer = document.querySelector('#time');
let secondsLeft = 5;
timer.textContent = secondsLeft + " seconds left.";

setTime();
function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function () {
        timer.textContent = secondsLeft + " seconds left.";
        secondsLeft--;


        if (secondsLeft === 0) {
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
    let endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");




    // let imgElement = document.createElement("img");
    // imgElement.setAttribute("src", "images/image_1.jpg");
    // mainElement.appendChild(imgElement);

}