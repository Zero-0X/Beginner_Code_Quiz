const startButton = document.getElementById('start-quiz');
const continueButton = document.getElementById('next-question');
const catchPhrase = document.getElementById('catch-phrase');
const leaderboard = document.getElementById('leaderboard');
const quizContainer = document.getElementById('quiz-container');
const questions = document.getElementById('question');
const choices = document.getElementById('choices');

const countdownElement = document.getElementById('countdown');
var quizTimer= document.getElementById('quiz-timer');
var timer;
var penalty = 6;

let currentQuestionIndex = 0;
let score = 0

startButton.addEventListener('click', startQuiz);

// function that displays the start button and hides the quiz container until the player clicks start
function startQuiz() {
  console.log('GO!')
  catchPhrase.classList.add('hide')
  startButton.classList.add('hide')
  leaderboard.classList.add('hide')
  quizContainer.classList.remove('hide')
  quizTimer.style.display = ('hide');
  startTimer()
}
// function that sets the questions from the questions.js file, in order, starting with question 1, ending with question 10

function startTimer() {
  var time = 60;

  timer = setInterval(function (startTimer) {
    time--;
    countdownElement.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      // Time's up! Handle the event here.
      console.log("Game Over!");
    }
  }, 1000);
}

function checkAnswer() {
  var isCorrect = false; // Replace with your answer checking logic

  if (isCorrect) {
    clearInterval(timer);
    countdownElement.style.display = 'none';
    // Correct answer. Handle the event here.
    console.log("Great Job!");
  } else {
    clearInterval(timer);
    countdownElement.innerHTML = parseInt(timerElement.innerHTML) - penalty;
    setTimeout(startTimer, 1000);
    // Incorrect answer. Handle the event here.
    console.log("Almost!");
  }
}
