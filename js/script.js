const startButton = document.getElementById('start-quiz');
const continueButton = document.getElementById('next-question');
const catchPhrase = document.getElementById('catch-phrase');
const leaderboard = document.getElementById('leaderboard');
const quizContainer = document.getElementById('quiz-container');
const questions = document.getElementById('question');
const choices = document.getElementById('choices');

var quizTimer = document.querySelector('quiz-timer');

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
  setNextQuestion()
}
// function that sets the questions from the questions.js file, in order, starting with question 1, ending with question 10
function setNextQuestion() {
  displayQuestion([currentQuestionIndex])
}

function displayQuestion() {
  const currentQuestion = questionData[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const choicesElements = document.querySelectorAll('#choices button');
  const continueButton = document.getElementById('next-question');

  questionElement.textContent = currentQuestion.question;

  currentQuestion.choices.forEach((choice, index) => {
    choicesElements[index].textContent = choice;
  });

  continueButton.classList.add('hide');

  choicesElements.forEach((choiceButton) => {
    choiceButton.addEventListener('click', () => {
      // Check if the selected answer is correct
      const selectedAnswer = currentQuestion.choices;
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

      // Apply styling based on the correctness of the answer
      if (isCorrect) {
        choicesElements[index].classList.add('correct');
        score++; // Increment the score if the answer is correct
      } else {
        choicesElements.classList.add('incorrect');
        totalQuizTime -= penaltyTime; // Apply penalty time for incorrect answer
      }

      // Disable all choice buttons after an answer is selected
      choicesElements.forEach((button) => {
        button.disabled = true;
      });

      // Show the continue button
      continueButton.classList.remove('hide');
    });
  });
}
