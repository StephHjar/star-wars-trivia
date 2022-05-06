document.addEventListener("click", startGame);

let currentQuestion = 0;
let score = 0;

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
let question = question['question'];
let options = question['options'];
let answer = question['answer'];


function startGame() {
    document.getElementsByClassName("content")[0].style.display = "block";
    runGame();
}

function runGame() {
    let questions = [{
        "question": "What is Luke Skywalker’s wife Mara’s last name?",
        "options": ["Ruby", "Jade", "Garnet"],
        "answer": "Jade"
    }, {
        "question": "Tenel Ka Djo is princess and eventually queen of what planet?",
        "options": ["Hapes", "Dathomir", "Yavin IV"],
        "answer": "Hapes"
    }];

    for (let i = 0; i < questions.length; i++) {
        document.getElementsByClassName("question-area")[0].innerHTML = questions[i].question;
        document.getElementsByClassName("btn-a")[0].innerHTML = questions[i].options[0];
        document.getElementsByClassName("btn-b")[0].innerHTML = questions[i].options[1];
        document.getElementsByClassName("btn-c")[0].innerHTML = questions[i].options[2];
        console.log("Testing")
    }
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