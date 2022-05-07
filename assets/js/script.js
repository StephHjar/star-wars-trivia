 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;
 let buttons = document.getElementsByTagName("button");
 let CURRENT_QUESTION_COUNT = 0;
 let MAX_QUESTION = 10;

 document.addEventListener("click", startGame);

 let repeatedQuestion = []

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
     if (CURRENT_QUESTION_COUNT >= MAX_QUESTION) {
         return false;
     }
     currentQuestion = getRandomQuestion();
     document.getElementsByClassName("question-area")[0].innerHTML = currentQuestion.question;
     document.getElementsByClassName("btn-a")[0].innerHTML = currentQuestion.options[0];
     document.getElementsByClassName("btn-b")[0].innerHTML = currentQuestion.options[1];
     document.getElementsByClassName("btn-c")[0].innerHTML = currentQuestion.options[2];
     handleClickEvent();
 }

 /**
  * Pulls a random question from the questions array
  */
 function getRandomQuestion() {
     currentQuestion = questions[questions.length * Math.random() | 0];
     if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
         return getRandomQuestion()
     }
     repeatedQuestion.push(currentQuestion)
     return currentQuestion;
 }

 /**
  * Runs checkAnswer function when a button is clicked
  */

 function handleClickEvent() {
     for (let button of buttons) {
         button.addEventListener("click", checkAnswer);
     }
 }

 /**
  * Checks whether the user's answer is correct
  */
 function checkAnswer() {
     let answer = currentQuestion.answer;
     let response = this.innerText;
     console.log(answer);
     console.log(response);
     if (answer === response) {
         incrementScore();
         this.style.backgroundColor = "green";
         renderNextQuestion();
     } else {
         this.style.backgroundColor = "red";
         renderNextQuestion();
     }
 }

 /**
  * Increases the score by one for every correct answer
  */
 function incrementScore() {
     let oldScore = parseInt(document.getElementsByClassName("score")[0].innerText);
     document.getElementsByClassName("score")[0].innerText = ++oldScore;
 }

 function displayResult() {

 }

 function shareResult() {

 }