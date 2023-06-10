var currentQuestion = 0;
var score = 0;
var timeRemaining = 60;
var timerElement = document.querySelector('#timer'); 

var startElement = document.querySelector("start");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitBtn = document.getElementById("submitBtn");
var scoreElement = document.getElementById("score");

function startQuiz() {

  quizContainer.style.display = "none";
}

function displayQuestion() {
  var question = questionData[currentQuestion];
  questionElement.textContent = question.question;

  choicesElement.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var li = document.createElement("li");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;
    li.appendChild(radio);
    li.appendChild(document.createTextNode(choice));
    choicesElement.appendChild(li);
  }
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    var answer = parseInt(selectedOption.value);
    if (answer === questionData[currentQuestion].correctAnswer) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < questionData.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
}

function showScore() {
  quiz.style.display = "none";
  scoreElement.textContent = "Your Score: " + score + "/" + questionData.length;
  scoreElement.style.display = "block";
}

start.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", checkAnswer);

displayQuestion();