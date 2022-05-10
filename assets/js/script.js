 import {
     questions
 } from "./questions.js";

 let currentQuestion = null;
 let buttons = document.getElementsByTagName("button");
 let questionArea = document.getElementsByClassName("question-area")[0];
 let buttonA = document.getElementsByClassName("btn-a")[0];
 let buttonB = document.getElementsByClassName("btn-b")[0];
 let buttonC = document.getElementsByClassName("btn-c")[0];

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
     console.log("startGame is running")
     document.getElementsByClassName("scroll-div")[0].style.display = "none";
     document.getElementsByClassName("content")[0].style.display = "block";
     renderNextQuestion();
 }

 /**
  * Shows the 'how to play' instructions in a popup window
  */
 function showInstructions() {
     console.log("showInstructions is running");
     document.getElementsByClassName("instructions")[0].style.display = "block";
 }

 function closeInstructions() {
     console.log("closeInstructions is running")
     document.getElementsByClassName("instructions")[0].style.display = "none";
 }

 /**
  * Populates a random question in the question area and answers in the buttons
  */
 function renderNextQuestion() {
     console.log("renderNextQuestion is running")
     for (let button of buttons) {
         button.style = null;
     }
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
  * Pulls a random question from the questions array
  */
 function getRandomQuestion() {
     console.log("getRandomQuestion is running")
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
 }, false)

 /**
  * Handles button clicks and runs the checkAnswer function
  */
 function handleClickEvent() {
     console.log("handleClickEvent is running")
     for (let button of buttons) {
         if (window.IS_TOUCH_ENABLED) {
             console.log("I am touch enabled");
             button.addEventListener("touchstart", checkAnswer);
             button.addEventListener("touchend", renderNextQuestion);
         } else {
             button.addEventListener("mousedown", checkAnswer);
             button.addEventListener("mouseup", renderNextQuestion);
         }
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
     if (score >= 20) {
         questionArea.innerHTML = `You got ${score} out of 20 questions correct! Congratulations! You're a Jedi Grand Master!`
     } else if (score >= 17 && score < 20) {
         questionArea.innerHTML = `Great job! You got ${score} out of 20 questions correct! You've clearly done your training, Jedi Master!`
     } else if (score >= 13 && score < 17) {
         questionArea.innerHTML = `You got ${score} out of 20 questions right. Not bad, Jedi!`
     } else if (score >= 9 && score < 13) {
         questionArea.innerHTML = `You scored ${score} out of 20. You may still be a Padawan, but you're on your way to becoming a Jedi!`
     } else {
         questionArea.innerHTML = `${score} out of 20. I suggest you head to Dagobah to meet Yoda for some training. Better luck next time!`
     }
     buttonA.style.display = "none";
     buttonB.style.display = "none";
     buttonC.style.display = "none";
     document.getElementsByClassName("play-again")[0].style.display = "inline-block";
     document.getElementsByClassName("share-results")[0].style.display = "inline-block";
     document.getElementsByClassName("play-again")[0].addEventListener("click", newGame);
     document.getElementsByClassName("share-results")[0].addEventListener("click", shareResults);
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
     let score = parseInt(document.getElementsByClassName("score")[0].innerText);
     let textArea = document.createElement("textarea");
     textArea.style.display = "none";
     document.body.appendChild(textArea);
     textArea.focus();
     textArea.select();
     textArea.innerHTML = `I got ${score} out of 20 questions right at Star Wars Legends trivia! Play here: https://stephhjar.github.io/star-wars-trivia/`;
     copyToClipboard(textArea.innerHTML);

     function copyToClipboard(text) {
         window.prompt("Copy the below text to your clipboard, and share with your friends!", text)
     }
 }