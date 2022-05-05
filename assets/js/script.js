document.addEventListener("click", startGame);

let currentQuestion = 0;
var score = 0;

let questions = [{
    "question": "What is Luke Skywalker’s wife Mara’s last name?",
    "options": ["Ruby", "Jade", "Garnet"],
    "answer": "Jade"
}, {
    "question": "Tenel Ka Djo is princess and eventually queen of what planet?",
    "options": ["Hapes", "Dathomir", "Yavin IV"],
    "answer": "Hapes"
}]


function startGame() {
    document.getElementsByClassName("content")[0].style.display = "block";
    runGame();
}

function runGame() {
    currentQuestion = 0;
    document.getElementsByClassName("question-area")[0].innerHTML = questions[currentQuestion].question;
    document.getElementsByClassName("btn-a")[0].innerHTML = questions[currentQuestion].options[0];
    document.getElementsByClassName("btn-b")[0].innerHTML = questions[currentQuestion].options[1];
    document.getElementsByClassName("btn-c")[0].innerHTML = questions[currentQuestion].options[2];
    console.log("Testing")
}

function displayQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function displayResult() {

}

function shareResult() {

}