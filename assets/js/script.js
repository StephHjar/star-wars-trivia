 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;
 let scrollDiv = document.getElementsByClassName("scroll-div")[0];
 let content = document.getElementsByClassName("content")[0];
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
 let repeatedQuestion = [];

 document.addEventListener("click", startGame, {
     once: true
 });

 document.getElementsByClassName("how-to-play")[0].addEventListener("click", showInstructions);
 document.getElementsByClassName("close-window")[0].addEventListener("click", closeInstructions);

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
 }

 /**
  * Closes the 'how to play' instructions when the X is clicked
  */
 function closeInstructions() {
     instructions.style.display = "none";
 }

 /**
  * Populates a random question in the question area and answers in the buttons, until the questions have all been asked
  */
 function renderNextQuestion() {
     console.log("renderNextQuestion is running")
     resetButtons();
     /*if (isMaximumQuestionsLimitReached()) {*/
     if (repeatedQuestion.length >= 20) {
         displayResult();
     } else {
         displayQuestion();
     }
 }

 function isMaximumQuestionsLimitReached() {
     if (repeatedQuestion.length >= 20);
 }


 function displayQuestion() {
     currentQuestion = getRandomQuestion();
     questionArea.innerText = currentQuestion.question;
     displayAnswers();
     handleClickEvent();
 }


 function displayAnswers() {
     buttonA.innerText = currentQuestion.options[0];
     buttonB.innerText = currentQuestion.options[1];
     buttonC.innerText = currentQuestion.options[2];
     buttonA.ariaLabel = currentQuestion.options[0];
     buttonB.ariaLabel = currentQuestion.options[1];
     buttonC.ariaLabel = currentQuestion.options[2];
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
     /*if (isMaximumQuestionsLimitReached()) {*/
     if (repeatedQuestion.length >= 20) {
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
     window.IS_TOUCH_ENABLED = true;
 }, false);

 /**
  * Handles button clicks and touch events, depending on the type of device
  */
 function handleClickEvent() {
     if (window.IS_TOUCH_ENABLED) {
         handleTouchEvent();
     } else {
         handleMouseEvent();
     }
 }

 /**
  * Handles touch events on answer buttons
  */
 function handleTouchEvent() {
     for (let button of buttons) {
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
  * Checks whether the user's answer is correct, and changes styling of buttons accordingly
  */
 function checkAnswer() {
     let answer = currentQuestion.answer;
     let response = this.innerText;
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
     let oldScore = parseInt(score.innerText);
     score.innerText = ++oldScore;
 }

 function getAvailableResponse(score) {
     console.log("getAvailableResponse is running");
     let responses = {
         "20": questionArea.innerHTML = `You got ${scoreCount} out of 20 questions correct! Congratulations! You're a Jedi Grand Master!`,
         "17": `Great job! You got ${scoreCount} out of 20 questions correct! You've clearly done your training, Jedi Master!`,
         "13": `You got ${scoreCount} out of 20 questions right. Not bad, Jedi!`,
         "9": `You scored ${scoreCount} out of 20. You may still be a Padawan, but you're on your way to becoming a Jedi!`,
         "0": `${scoreCount} out of 20. I suggest you head to Dagobah to meet Yoda for some training. Better luck next time!`
     }
     return responses(score);
 }

 /**
  * Displays the player's final score and presents the player with the option to play again or share their results
  */
 function displayResult() {
     console.log("displayResult is running");
     switch (scoreCount) {
         case scoreCount >= 20:
             console.log("I got 20 out of 20");
             getAvailableResponse(20);
             /*questionArea.innerHTML = response;*/
             break;
         case scoreCount >= 17 && scoreCount < 20:
             getAvailableResponse(17);
             questionArea.innerHTML = response;
             break;
         case scoreCount >= 13 && scoreCount < 17:
             getAvailableResponse(13);
             questionArea.innerHTML = response;
             break;
         case scoreCount >= 9 && scoreCount < 13:
             getAvailableResponse(9);
             questionArea.innerHTML = response;
             break;
         case scoreCount < 9:
             getAvailableResponse(0);
             questionArea.innerHTML = response;
     }
     displayActionButtons();
 }

 /* if (scoreCount >= 20) {

     } else if (scoreCount >= 17 && score < 20) {
         questionArea.innerHTML = ;
     } else if (scoreCount >= 13 && score < 17) {
         questionArea.innerHTML = `You got ${scoreCount} out of 20 questions right. Not bad, Jedi!`;
     } else if (scoreCount >= 9 && score < 13) {
         questionArea.innerHTML = `You scored ${scoreCount} out of 20. You may still be a Padawan, but you're on your way to becoming a Jedi!`;
     } else {
         questionArea.innerHTML = `${scoreCount} out of 20. I suggest you head to Dagobah to meet Yoda for some training. Better luck next time!`;
     }
     displayActionButtons();
 }*/

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
     score.innerText = "0";
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