const startButton = document.getElementById ('start-quiz');
const catchPhrase = document.getElementById ('catch-phrase');
const leaderboard = document.getElementById ('leaderboard');
const questions = document.getElementById ('quiz-container');
const choices = document.getElementById ('choices');
const nextQuestion = document.getElementById ('next-question');

var quizTimer = document.querySelector ('quiz-timer');


let currentQuestionIndex = 0;
let score = 0

// variable for the total quiz time of 60 seconds
// setInterval of 1000 miliseconds
// clearInterval when timer hits 0
// 6000 milisecond penalty for each incorrect answer
// variable for when the timer hits 0

var totalQuizTime = 60;
var timerInterval;
var penaltyTime = 6000;


startButton.addEventListener('click', startQuiz);

// function that displays the start button and hides the quiz container until the player clicks start
function startQuiz () {
    console.log('GO!')
    catchPhrase.classList.add('hide')
    startButton.classList.add('hide')
    leaderboard.classList.add('hide')
    questions.classList.remove('hide')
    displayQuestion()
}
// function that displays the questions from the questions.js file, in order, starting with question 1, ending with question 10
function displayQuestion() {
    const currentQuestion = questionData[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const choicesElements = document.querySelectorAll('#choices button');

  questionElement.textContent = currentQuestion.question;

  currentQuestion.choices.forEach((choice, index) => {
    choicesElements[index].textContent = choice;
  });
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

