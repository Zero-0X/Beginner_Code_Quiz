
var leaderboard = document.querySelector ('#top-scores');
var playerScores = document.querySelector ('#player-scores');
var startButton = document.querySelector ('#start-quiz');
var quizTimer = document.querySelector ('#quiz-timer');
var questions = document.querySelector('#questions-container');
var choices = document.querySelector ('#choices');

// variable for the total quiz time of 60 seconds
// setInterval of 1000 miliseconds
// clearInterval when timer hits 0
// 6000 milisecond penalty for each incorrect answer
// variable for when the timer hits 0

var totalQuizTime = 60;
var timerInterval;
var penaltyTime = 6000;
var currentQuestionIndex = 0;

// function that displays the start button and hides the quiz container until the player clicks start
function startButton () {

}
// function that displays the questions from the questions.js file, in order, starting with question 1, ending with question 10
function displayQuestions () {

}
// function that displays correct answers when incorrect answers are chosen
function correctAnswers () {

}
// function that prints 'Game Over' once final question answer is submitted
function gameOver () {

}
// function that displays Leaderboard with blinking form for the player to enter their initials after they have completed the quiz
function topPlayers () {
  
}

