 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;
 let buttons = document.getElementsByTagName("button");
 let questionArea = document.getElementsByClassName("question-area")[0];
 let buttonA = document.getElementsByClassName("btn-a")[0];
 let buttonB = document.getElementsByClassName("btn-b")[0];
 let buttonC = document.getElementsByClassName("btn-c")[0];
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
     document.getElementsByClassName("scroll-div")[0].style.display = "none";
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
         questionArea.innerHTML = currentQuestion.question;
         buttonA.innerHTML = currentQuestion.options[0];
         buttonB.innerHTML = currentQuestion.options[1];
         buttonC.innerHTML = currentQuestion.options[2];
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
  * Runs checkAnswer function when a button is clicked and populates the next question
  */
 function handleClickEvent() {
     console.log("handleClickEvent is running")
     for (let button of buttons) {
         button.addEventListener("mousedown", checkAnswer);
         button.addEventListener("mouseup", renderNextQuestion);
         button.addEventListener("touchstart", checkAnswer);
         button.addEventListener("touchend", renderNextQuestion);
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
         this.style.backgroundColor = "green";
         incrementScore();
     } else if (response === "Play Again") {
         this.style.backgroundColor = "lightyellow";
     } else if (response === "Share Results") {
         this.style.backgroundColor = "lightyellow";
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
     console.log("displayResult is running");
     let score = parseInt(document.getElementsByClassName("score")[0].innerText);
     if (score >= 10) {
         questionArea.innerHTML = `You got ${score} out of 10 questions correct! Congratulations! You're a Jedi Grand Master!`
     } else if (score >= 7 && score < 10) {
         questionArea.innerHTML = `Great job! You got ${score} out of 10 questions correct! You've clearly done your training, Jedi Master!`
     } else if (score >= 5 && score < 7) {
         questionArea.innerHTML = `You got ${score} out of 10 questions right. Not bad, Jedi!`
     } else if (score >= 3 && score < 5) {
         questionArea.innerHTML = `You scored ${score} out of 10. You may still be a Padawan, but you're on your way to becoming a Jedi!`
     } else {
         questionArea.innerHTML = `${score} out of 10. I suggest you head to Dagobah to meet Yoda for some training. Better luck next time!`
     }
     buttonA.style.display = "none";
     buttonB.style.display = "none";
     buttonC.style.display = "none";
     document.getElementsByClassName("play-again")[0].style.display = "inline-block";
     document.getElementsByClassName("share-results")[0].style.display = "inline-block";
     document.getElementsByClassName("play-again")[0].addEventListener("click", newGame);
     document.getElementsByClassName("share-results")[0].addEventListener("click", shareResult);
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