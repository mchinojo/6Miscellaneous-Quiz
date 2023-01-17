// Some variables to access to the HTML elements.
let highScoreList = document.getElementById("highscores");
let clearScores = document.getElementById("clear");

// A function to render the user data list.
function renderUsers() {
    let userList = JSON.parse(localStorage.getItem("userList"));

    if (userList === null) {
        userList = [];
    }

    // A function to order the list from higher to lower score.
    userList.sort(function (userA, userB) {
        return userB.score - userA.score;
    });

    // For each new user, create a list on the HTML and render the data.
    for (let index = 0; index < userList.length; index++) {
        let liElement = document.createElement("li");
        liElement.textContent = `${userList[index].initials}: ${userList[index].score}`;
        highScoreList.appendChild(liElement);
    }
}

// A button to clear the local storage and the rendered list.
clearScores.addEventListener("click", function () {
    localStorage.clear();
    highScoreList.innerHTML = [];

});

// Call the function to render the user data list.
renderUsers();