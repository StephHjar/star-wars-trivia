 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;
 let buttons = document.getElementsByTagName("button");
 let CURRENT_QUESTION_COUNT = 0;
 let MAX_QUESTION = 10;

 document.addEventListener("click", startGame, {
     once: true
 });

 let repeatedQuestion = [];

 /**
  * Initiates gameplay when the player clicks anywhere on the page
  */
 function startGame() {
     document.getElementsByClassName("content")[0].style.display = "block";
     renderNextQuestion();
 }

 /**
  * Populates a random question in the question area and answers in the buttons
  */
 function renderNextQuestion() {
     for (let button of buttons) {
         button.style = null;
     }
     if (repeatedQuestion.length >= 10) {
         displayResult();
     } else {
         currentQuestion = getRandomQuestion();
         document.getElementsByClassName("question-area")[0].innerHTML = currentQuestion.question;
         document.getElementsByClassName("btn-a")[0].innerHTML = currentQuestion.options[0];
         document.getElementsByClassName("btn-b")[0].innerHTML = currentQuestion.options[1];
         document.getElementsByClassName("btn-c")[0].innerHTML = currentQuestion.options[2];
         handleClickEvent();
     }
 }

 /**
  * Pulls a random question from the questions array
  */
 function getRandomQuestion() {
     console.log("getRandomQuestion is running")
     currentQuestion = questions[Math.floor(Math.random() * questions.length)];
     if (repeatedQuestion.length >= 10) {
         return false;
     } else
     if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
         return getRandomQuestion();
     } else {
         repeatedQuestion.push(currentQuestion);
         return currentQuestion;
     }
 }

 /**
  * Runs checkAnswer function when a button is clicked
  */
 function handleClickEvent() {
     console.log("handleClickEvent is running")
     for (let button of buttons) {
         button.addEventListener("mousedown", checkAnswer);
         button.addEventListener("mouseup", renderNextQuestion);
     }
 }


 /**
  * Checks whether the user's answer is correct
  */
 function checkAnswer() {
     console.log("checkAnswer is running")
     let answer = currentQuestion.answer;
     let response = this.innerText;
     console.log(answer);
     console.log(response);
     if (answer === response) {
         this.style.backgroundColor = "green";
         incrementScore();
     } else {
         this.style.backgroundColor = "red";
     }
 }

 /**
  * Increases the score by one for every correct answer
  */
 function incrementScore() {
     console.log("incrementScore is running")
     let oldScore = parseInt(document.getElementsByClassName("score")[0].innerText);
     document.getElementsByClassName("score")[0].innerText = ++oldScore;
 }

 /**
  * Displays the player's final score and presents the player with the option to play again or share their results
  */
 function displayResult() {
     console.log("displayResult is running")
     document.getElementsByClassName("question-area")[0].innerHTML = "Game over!";
     document.getElementsByClassName("btn-a")[0].innerHTML = "Play Again";
     document.getElementsByClassName("btn-b")[0].style.display = "none";
     document.getElementsByClassName("btn-c")[0].innerHTML = "Share Results";
     for (let button of buttons) {
         button.removeEventListener("mousedown", checkAnswer);
         button.removeEventListener("mouseup", renderNextQuestion);
     }
     document.getElementsByClassName("btn-a")[0].addEventListener("click", newGame);
     document.getElementsByClassName("btn-c")[0].addEventListener("click", shareResult);
 }
 /**
  * Refreshes the question area and the scoreboard to start a new game
  */
 function newGame() {
     console.log("newGame is running");
     repeatedQuestion.length = 0;
     document.getElementsByClassName("score")[0].innerText = "0";
     renderNextQuestion();
 }

 function shareResult() {
     console.log("shareResult is running");
 }