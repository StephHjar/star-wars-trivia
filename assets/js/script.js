 import {
     questions
 } from "./questions.js";

 let scrollDiv = document.getElementsByClassName("scroll-div")[0];
 let content = document.getElementsByClassName("content")[0];
 let howToPlay = document.getElementsByClassName("how-to-play")[0];
 let instructions = document.getElementsByClassName("instructions")[0];
 let closeWindow = document.getElementsByClassName("close-window")[0];
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
 let currentQuestion = null;
 let repeatedQuestion = [];

 /**
  * Waits for the DOM content to load, then adds event listeners to the page
  */
 document.addEventListener('DOMContentLoaded', () => {
     document.addEventListener("click", startGame, {
         once: true
     });
     howToPlay.addEventListener("click", showInstructions);
 });

 /**
  * Initiates gameplay when the player clicks anywhere on the page
  */
 function startGame() {
     scrollDiv.style.display = "none";
     content.style.display = "block";
     renderNextQuestion();
 }

 /**
  * Shows the 'how to play' instructions in a popup window
  */
 function showInstructions() {
     instructions.style.display = "block";
     closeWindow.addEventListener("click", closeInstructions);
 }

 /**
  * Closes the 'how to play' instructions when the X is clicked
  */
 function closeInstructions() {
     instructions.style.display = "none";
 }

 /**
  * Generates a random question to populate until all questions have all been asked, at which point results are displayed
  */
 function renderNextQuestion() {
     resetButtons();
     if (isMaximumQuestionsLimitReached()) {
         displayResult();
     } else {
         displayQuestion();
     }
 }

 /**
  * Checks whether the maximum number of questions (20) has been displayed to the player
  */
 function isMaximumQuestionsLimitReached() {
     if (repeatedQuestion.length >= 20) {
         return true;
     }
 }

 /**
  * Displays each question in the question area
  */
 function displayQuestion() {
     currentQuestion = getRandomQuestion();
     questionArea.innerText = currentQuestion.question;
     displayAnswers();
     handleClickEvent();
 }

 /**
  * Displays each answer in the answer buttons
  */
 function displayAnswers() {
     buttonA.innerText = currentQuestion.options[0];
     buttonB.innerText = currentQuestion.options[1];
     buttonC.innerText = currentQuestion.options[2];
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
     currentQuestion = questions[Math.floor(Math.random() * questions.length)];
     if (isMaximumQuestionsLimitReached()) {
         return false;
     } else if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
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
     window.isTouchScreen = true;
 }, false);

 /**
  * Handles button clicks and touch events, depending on the type of device
  */
 function handleClickEvent() {
     if (window.isTouchScreen) {
         handleTouchEvent();
     } else {
         handleMouseEvent();
     }
 }

 /**
  * Handles touch events on buttons
  */
 function handleTouchEvent() {
     for (let answerButton of answerButtons) {
         answerButton.addEventListener("touchstart", checkAnswer);
         answerButton.addEventListener("touchend", renderNextQuestion);
     }
     for (let actionButton of actionButtons) {
         actionButton.addEventListener("touchstart", styleActionButton);
         actionButton.addEventListener("touchend", unStyleActionButton);
     }
 }

 /**
  * Handles mouse events on buttons
  */
 function handleMouseEvent() {
     for (let answerButton of answerButtons) {
         answerButton.addEventListener("mousedown", checkAnswer);
         answerButton.addEventListener("mouseup", renderNextQuestion);
     }
     for (let actionButton of actionButtons) {
         actionButton.addEventListener("mousedown", styleActionButton);
         actionButton.addEventListener("mouseup", unStyleActionButton);
     }
 }

 /**
  * Checks whether the user's answer is correct, and changes styling of buttons accordingly
  */
 function checkAnswer() {
     let answer = currentQuestion.answer;
     let response = this.innerText;
     if (answer === response) {
         this.style.backgroundColor = "green";
         incrementScore();
     } else {
         this.style.backgroundColor = "red";
     }
 }

 /**
  * Styles action button on mousedown or touchstart
  */
 function styleActionButton() {
     this.style.backgroundColor = "lightyellow";
 }

 /**
  * Removes styling from action button on mouseup or touchend
  */
 function unStyleActionButton() {
     this.style.backgroundColor = null;
 }

 /**
  * Increases the score by one for every correct answer
  */
 function incrementScore() {
     score.innerText = ++scoreCount;
 }

 /**
  * Displays the player's final score 
  */
 function displayResult() {
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
     repeatedQuestion.length = 0;
     scoreCount = 0;
     renderNextQuestion();
 }

 /**
  * Allows the user to share their results by copying and pasting their score to and from the clipboard. Code adapted from StackOverflow, credit in README
  */
 function shareResults() {
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