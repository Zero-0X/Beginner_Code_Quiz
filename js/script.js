const startButton = document.getElementById ('start-quiz');
const questions = document.getElementById('quiz-container');

var choices = document.querySelector ('choices');
var quizTimer = document.querySelector ('quiz-timer');
var leaderboard = document.querySelector ('top-scores');
var playerScores = document.querySelector ('player-scores');

// variable for the total quiz time of 60 seconds
// setInterval of 1000 miliseconds
// clearInterval when timer hits 0
// 6000 milisecond penalty for each incorrect answer
// variable for when the timer hits 0

var totalQuizTime = 60;
var timerInterval;
var penaltyTime = 6000;
var currentQuestionIndex = 0;

startButton.addEventListener('click', startQuiz);

// function that displays the start button and hides the quiz container until the player clicks start
function startQuiz () {
    console.log('GO!')
    startButton.classList.add('hide')
    questions.classList.remove('hide')
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

