 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;

 let instructions = document.getElementsByClassName("instructions")[0];

 let buttons = document.getElementsByTagName("button");

 let questionArea = document.getElementsByClassName("question-area")[0];

 let answerButtons = document.getElementsByClassName("answer-btn");
 let buttonA = document.getElementsByClassName("btn-a")[0];
 let buttonB = document.getElementsByClassName("btn-b")[0];
 let buttonC = document.getElementsByClassName("btn-c")[0];

 let score = document.getElementsByClassName("score")[0];
 let scoreCount = parseInt(score.innerText);

 let actionButtons = document.getElementsByClassName("action-btn");
 let playAgainButton = document.getElementsByClassName("play-again")[0];
 let shareResultsButton = document.getElementsByClassName("share-results")[0];

 document.addEventListener("click", startGame, {
     once: true
 });

 document.getElementsByClassName("how-to-play")[0].addEventListener("click", showInstructions);
 document.getElementsByClassName("close-window")[0].addEventListener("click", closeInstructions);

 let repeatedQuestion = [];

 /**
  * Initiates gameplay when the player clicks anywhere on the page
  */
 function startGame() {
     console.log("startGame is running");
     document.getElementsByClassName("scroll-div")[0].style.display = "none";
     document.getElementsByClassName("content")[0].style.display = "block";
     renderNextQuestion();
 }

 /**
  * Shows the 'how to play' instructions in a popup window
  */
 function showInstructions() {
     console.log("showInstructions is running");
     instructions.style.display = "block";
 }

 /**
  * Closes the 'how to play' instructions when the X is clicked
  */
 function closeInstructions() {
     console.log("closeInstructions is running");
     instructions.style.display = "none";
 }

 /**
  * Populates a random question in the question area and answers in the buttons
  */
 function renderNextQuestion() {
     console.log("renderNextQuestion is running");
     resetButtons();
     if (repeatedQuestion.length >= 20) {
         displayResult();
     } else {
         currentQuestion = getRandomQuestion();
         questionArea.innerText = currentQuestion.question;
         buttonA.innerText = currentQuestion.options[0];
         buttonB.innerText = currentQuestion.options[1];
         buttonC.innerText = currentQuestion.options[2];
         handleClickEvent();
     }
 }

 /**
  * Resets styling on the answer buttons once a new question has been generated
  */
 function resetButtons() {
     for (let button of buttons) {
         button.style = null;
     }
 }

 /**
  * Pulls a random question from the questions array and prevents repeated questions from being displayed
  */
 function getRandomQuestion() {
     console.log("getRandomQuestion is running");
     currentQuestion = questions[Math.floor(Math.random() * questions.length)];
     if (repeatedQuestion.length >= 20) {
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
  * Checks whether a device is a touch screen device. Code from Codeburst.io, credit in README 
  */
 window.addEventListener('touchstart', function onFirstTouch() {
     window.IS_TOUCH_ENABLED = true;
 }, false);

 /**
  * Handles button clicks and touch events, depending on the type of device
  */
 function handleClickEvent() {
     console.log("handleClickEvent is running"); {
         if (window.IS_TOUCH_ENABLED) {
             handleTouchEvent();
         } else {
             handleMouseEvent();
         }
     }
 }

 /**
  * Handles touch events on answer buttons
  */
 function handleTouchEvent() {
     for (let button of buttons) {
         console.log("I am touch enabled");
         button.addEventListener("touchstart", checkAnswer);
         button.addEventListener("touchend", renderNextQuestion);
     }
 }

 /**
  * Handles mouse events on answer buttons
  */
 function handleMouseEvent() {
     for (let button of buttons) {
         button.addEventListener("mousedown", checkAnswer);
         button.addEventListener("mouseup", renderNextQuestion);
     }
 }

 /**
  * Checks whether the user's answer is correct, and changes styling of buttons
  */
 function checkAnswer() {
     console.log("checkAnswer is running");
     let answer = currentQuestion.answer;
     let response = this.innerText;
     console.log(answer);
     console.log(response);
     if (answer === response) {
         this.style.backgroundColor = "green";
         incrementScore();
     } else if (this === "Play Again") {
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
     console.log("incrementScore is running");
     let oldScore = parseInt(score.innerText);
     score.innerText = ++oldScore;
 }

 /**
  * Displays the player's final score and presents the player with the option to play again or share their results
  */
 function displayResult() {
     console.log("displayResult is running");
     if (scoreCount >= 20) {
         questionArea.innerHTML = `You got ${scoreCount} out of 20 questions correct! Congratulations! You're a Jedi Grand Master!`;
     } else if (scoreCount >= 17 && score < 20) {
         questionArea.innerHTML = `Great job! You got ${scoreCount} out of 20 questions correct! You've clearly done your training, Jedi Master!`;
     } else if (scoreCount >= 13 && score < 17) {
         questionArea.innerHTML = `You got ${scoreCount} out of 20 questions right. Not bad, Jedi!`;
     } else if (scoreCount >= 9 && score < 13) {
         questionArea.innerHTML = `You scored ${scoreCount} out of 20. You may still be a Padawan, but you're on your way to becoming a Jedi!`;
     } else {
         questionArea.innerHTML = `${scoreCount} out of 20. I suggest you head to Dagobah to meet Yoda for some training. Better luck next time!`;
     }
     displayActionButtons();
 }

 /**
  * Displays action buttons ("New Game" & "Share Results") and allows the user to initiate their respective functions
  */
 function displayActionButtons() {
     for (let answerButton of answerButtons) {
         answerButton.style.display = "none";
     }
     for (let actionButton of actionButtons) {
         actionButton.style.display = "inline-block";
     }
     playAgainButton.addEventListener("click", newGame);
     shareResultsButton.addEventListener("click", shareResults);
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
 /**
  * Allows the user to share their results by copying and pasting their score to and from the clipboard. Code adapted from StackOverflow, credit in README
  */
 function shareResults() {
     console.log("shareResult is running");
     let textArea = document.createElement("textarea");
     textArea.style.display = "none";
     document.body.appendChild(textArea);
     textArea.focus();
     textArea.select();
     textArea.innerHTML = `I got ${scoreCount} out of 20 questions right at Star Wars Legends trivia! Play here: https://stephhjar.github.io/star-wars-trivia/`;
     copyToClipboard(textArea.innerHTML);

     function copyToClipboard(text) {
         window.prompt("Copy the text below, and share it with your friends!", text);
     }
 }