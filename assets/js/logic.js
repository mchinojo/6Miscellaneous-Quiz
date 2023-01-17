// A lot of variables to access to the HTML elements.
let start = document.getElementById("start");
let startScreen = document.getElementById("start-screen");
let questionsDiv = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let feedback = document.getElementById("feedback");
let finalScore = document.getElementById("final-score");
let renderChoices = document.getElementById("choices");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");

// A function for my timer
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        timer.textContent = secondsLeft + " seconds left.";
        secondsLeft--;

        if (secondsLeft <= 0) {
            timer.textContent = "0";
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to show the end screen.
            allDone();
        }
    }, 1000);
}

// A Function to render the "end screen" with my score.
function allDone() {

    let questionsDiv = document.getElementById("questions");
    let endScreen = document.getElementById("end-screen");
    questionsDiv.classList.add("hide");
    endScreen.classList.remove("hide");
    clearInterval(timerInterval);
    finalScore.textContent = `${score}`
};

// A function that renderize the question title and choices.
function renderQuestion(numberOfQuestion) {

    renderChoices.innerHTML = "";

    // When we answer the last question, stop the timer and render my score.
    if (numberOfQuestion > questionsArray.length - 1) {
        questionsDiv.classList.add("hide");
        // endScreen.classList.remove("hide");
        clearInterval(timerInterval);
        // localStorage.setItem("score", score);
        finalScore.textContent = `${score}`
        allDone();
        return;
    }

    // Variables to access inside my array of objects.   
    let questionTitle = questionsArray[numberOfQuestion].title;
    let questionChoices = questionsArray[numberOfQuestion].choices;

    // Render the title of the question.       
    let renderTitle = document.getElementById("question-title");
    renderTitle.textContent = `${questionTitle}`;

    // Render the choices of the question.      
    for (let index = 0; index < questionChoices.length; index++) {

        // A <button> for each choice. 
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("data-index", index);
        buttonElement.textContent = questionChoices[index];
        renderChoices.appendChild(buttonElement);

        // An event listener to each <button>. 
        buttonElement.addEventListener("click", function (event) {

            let element = event.target;
            let correctAnswer = questionsArray[numberOfQuestion].answer;
            let userAnswer = element.getAttribute("data-index");
            feedback.classList.remove("hide");

            // If the "number as a string" of my object matches or not with the "number as a string" of the data-index.
            if (correctAnswer === userAnswer) {
                feedback.textContent = "Correct!";
                score++;
            }

            else {
                feedback.textContent = "Wrong!";
                secondsLeft -= 10;
            }
            //  Next question, please. 
            setTimeout(function () {
                renderQuestion(numberOfQuestion += 1);
                feedback.classList.add("hide");
            }, 800);

        });

    }
};

// A button to hide the "start screen" and run the timer.
start.addEventListener("click", function () {
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
    setTime();
});

// A button to save my initials with my score.
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let userList = JSON.parse(localStorage.getItem("userList"));

    if (userList === null) {
        userList = [];
    }

    // Store the user data as an object. 
    let user = {
        initials: initialsInput.value,
        score: score,
    };

    // validate the fields
    if (user.initials === "") {
        alert("Initials cannot be blank");
        return;
    }

    // Each time we click, the new user is pushed on my userlist.
    // Take me to the highscores page.
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
    window.location.href = "highscores.html";
});