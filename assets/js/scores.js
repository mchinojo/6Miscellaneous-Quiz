// ul, display element
let highScoreList = document.getElementById("highscores");
// let todoCountSpan = document.querySelector("#todo-count");

let userList = JSON.parse(localStorage.getItem("userList"));
if (userList === null) {
    userList = [];
}

function renderItems() {

    for (let index = 0; index < userList.length; index++) {

        let liElement = document.createElement("li");
        liElement.textContent = `${userList[index].initials}: ${userList[index].score}`;
        highScoreList.appendChild(liElement);
    }
}
renderItems();