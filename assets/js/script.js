document.addEventListener("click", startGame);

let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", checkAnswer);
}

let questions = [{
    "question": "What is Luke Skywalker’s wife Mara’s last name?",
    "options": ["Ruby", "Jade", "Garnet"],
    "answer": "Jade"
}, {
    "question": "Tenel Ka Djo is princess and eventually queen of what planet?",
    "options": ["Hapes", "Dathomir", "Yavin IV"],
    "answer": "Hapes"
}, {
    "question": "Timothy Zahn’s trilogy of novels that were credited with reigniting interest in the Star Wars Expanded Universe are called the ______ Trilogy.",
    "options": ["Vader", "Pellaeon", "Thrawn"],
    "answer": "Thrawn"
}, {
    "question": "What is Jacen Solo's Sith name?",
    "options": ["Darth Bane", "Darth Caedus", "Darth Sidious"],
    "answer": "Darth Caedus"
}, {
    "question": "Which of the Solo children does Chewbacca save before being killed?",
    "options": ["Jaina", "Anakin", "Jacen"],
    "answer": "Anakin"
}, {
    "question": "In 'The Lando Calrissian Adventures', what is the name of Lando’s droid companion?",
    "options": ["Vuffi Raa", "Em Teedee", "Thon Baka"],
    "answer": "Vuffi Raa"
}, {
    "question": "What are the Yuuzhan Vong’s ships made of?",
    "options": ["stone", "metal", "coral"],
    "answer": "coral"
}, {
    "question": "In ‘The Truce at Bakura’, who is arrested for sedition?",
    "options": ["Leia", "Luke", "Han"],
    "answer": "Leia"
}, {
    "question": "Who is one of Leia’s closest friends, and caretaker of her children?",
    "options": ["Winter", "Autumn", "Summer"],
    "answer": "Winter"
}, {
    "question": "Who does Jaina Solo marry?",
    "options": ["Zekk", "Kyp Durron", "Jagged Fel"],
    "answer": "Jagged Fel"
}]

/**
 * Initiates gameplay when the player clicks anywhere on the page
 */
function startGame() {
    document.getElementsByClassName("content")[0].style.display = "block";
    runGame();
}

function runGame() {
    let currentQuestion = questions[questions.length * Math.random() | 0];
    for (let i = 0; i < questions.length; i++) {
        document.getElementsByClassName("question-area")[0].innerHTML = currentQuestion.question;
        document.getElementsByClassName("btn-a")[0].innerHTML = currentQuestion.options[0];
        document.getElementsByClassName("btn-b")[0].innerHTML = currentQuestion.options[1];
        document.getElementsByClassName("btn-c")[0].innerHTML = currentQuestion.options[2];
    }
}

function checkAnswer() {
    let currentQuestion = questions[questions.length * Math.random() | 0];
    let answer = currentQuestion.answer;
    let response = this.innerText;
    if (answer === response) {
        incrementScore();
        this.style.backgroundColor = "green";
        runGame();
    } else {
        console.log("Sorry, you got it wrong!");
        this.style.backgroundColor = "red";
        runGame();
    }
}

function incrementScore() {
    console.log("Score went up!")
}

function displayResult() {

}

function shareResult() {

}