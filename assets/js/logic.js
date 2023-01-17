let start = document.getElementById("start");
let startScreen = document.getElementById("start-screen");
let questionsDiv = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let feedback = document.getElementById("feedback");
let finalScore = document.getElementById("final-score");


start.addEventListener("click", function () {
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    setTime();
});


// Create a function that renderize the question title and choices.
function renderQuestion(numberOfQuestion) {
    let renderChoices = document.getElementById("choices");
    renderChoices.innerHTML = "";

    if (numberOfQuestion > questionsArray.length - 1) {

        questionsDiv.classList.add("hide");
        endScreen.classList.remove("hide");
        clearInterval(timerInterval);
        // localStorage.setItem("score", score);
        finalScore.textContent = `${score}`


        return;
    }

    // Create variables to access inside the objects.   
    let questionTitle = questionsArray[numberOfQuestion].title;
    let questionChoices = questionsArray[numberOfQuestion].choices;

    // Render the title of the question.       
    let renderTitle = document.getElementById("question-title");
    renderTitle.textContent = `${questionTitle}`;

    // Render the choices of the question.      
    for (let index = 0; index < questionChoices.length; index++) {

        // Create a <button> for each choice. 
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("data-index", index);
        buttonElement.textContent = questionChoices[index];
        renderChoices.appendChild(buttonElement);

        // Add an event listener to each <button>. 
        buttonElement.addEventListener("click", function (event) {

            let element = event.target;
            let correctAnswer = questionsArray[numberOfQuestion].answer;
            let userAnswer = element.getAttribute("data-index");
            feedback.classList.remove("hide");


            if (correctAnswer === userAnswer) {
                feedback.textContent = "Correct!";
                score++;
            }

            else {
                feedback.textContent = "Wrong!";
                secondsLeft -= 10;
            }

            setTimeout(function () {
                renderQuestion(numberOfQuestion += 1);
                feedback.classList.add("hide");
            }, 800);

        });

    }
};

numberOfQuestion = 0;
renderQuestion(numberOfQuestion);

let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let userList = JSON.parse(localStorage.getItem("userList"));
    // create user object from submission

    if (userList === null) {
        userList = [];
    }

    let user = {
        initials: initialsInput.value,
        score: score,
    };

    // validate the fields
    if (user.firstName === "") {
        alert("Initials cannot be blank");
        return;
    }

    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));

    window.location.href = "highscores.html";


});










let score = 0;

// Timer
let timer = document.querySelector('#time');
let secondsLeft = 60;
let timerInterval = null;

timer.textContent = secondsLeft + " seconds left.";


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
};



