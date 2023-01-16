// Delete the "hide" class.
let questionsDiv = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let feedback = document.getElementById("feedback");
let finalScore = document.getElementById("final-score");
setTime();

questionsDiv.classList.remove("hide");

// Create an Array with all the questions stored as objects.
questionsArray = [
    {
        title: "1. Which planet is the hottest?",
        choices: ["Venus", "Saturn", "Mercury", "Mars"],
        answer: "0"
    },

    {
        title: "2. How many rings are there in the Olympic symbol?",
        choices: ["4", "7", "5", "9"],
        answer: "2"
    },

    {
        title: "3. What is the complementary color of green?",
        choices: ["Blue", "Red", "Yellow", "Purple"],
        answer: "1"
    },

    {
        title: "4. What is a group of lions called?",
        choices: ["Squad", "Pack", "Herd", "Pride"],
        answer: "3"
    },

    {
        title: "5. What is the longest river in the world?",
        choices: ["Amazon", "Congo", "Nile", "Hudson"],
        answer: "2"
    },

    {
        title: "6. How many hearts does an octopus have?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },

    {
        title: "7. Vermillion is a shade of which color?",
        choices: ["Blue", "Red", "Green", "Yellow"],
        answer: "1"
    },

    {
        title: "8. What is the first element on the periodic table?",
        choices: ["Nitrogen", "Helium", "Lithium", "Hydrogen"],
        answer: "3"
    },

    {
        title: "9. Who invented Arabic numerals?",
        choices: ["Indians", "Arabs", "Romans", "Greeks"],
        answer: "0"
    },

    {
        title: "10. How many ribs are in the human body?",
        choices: ["16", "24", "19", "29"],
        answer: "1"
    },
];


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






