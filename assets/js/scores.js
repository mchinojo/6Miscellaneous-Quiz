// ul, display element
let highScoreList = document.getElementById("highscores");
// let todoCountSpan = document.querySelector("#todo-count");

let userList = JSON.parse(localStorage.getItem("userList"));
if (userList === null) {
    userList = [];
}

function renderItems() {

    userList.sort(function (userA, userB) {
        return userB.score - userA.score;
    });

    for (let index = 0; index < userList.length; index++) {
        let liElement = document.createElement("li");
        liElement.textContent = `${userList[index].initials}: ${userList[index].score}`;
        highScoreList.appendChild(liElement);
    }
}
renderItems();

let clearScores = document.getElementById("clear");

clearScores.addEventListener("click", function () {
    localStorage.clear();
    highScoreList.innerHTML = [];

});