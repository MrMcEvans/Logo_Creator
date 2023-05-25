

var quizQuestions = [
  {
    question: "Question 1: What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Rome"],
    rightAnswer: 2
  },
  {
    question: "Question 2: What symbols must follow a function for javascript to run?",
    choices: ["{}", "()", "<>", "[]"],
    rightAnswer: 2
  },
  {
    question: "Question 3: What type of syntax is used to link a javaScript file to an HTML?",
    choices: ["<link>", "<script>", "<src>", "<a>"],
    rightAnswer: 2
  },
  {
    question: "Question 4: What is the symbol for the chemical element iron?",
    choices: ["Ir", "I", "In", "Fe"],
    rightAnswer: 4
  },
  {
    question: "Question 5: What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    rightAnswer: 4
  }
];

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  var questionPrompt = document.getElementById("question-prompt");
  var choicesList = document.getElementsByClassName("choices")[0];
  
  questionPrompt.textContent = quizQuestions[currentQuestionIndex].question;
  
  choicesList.innerHTML = "";
  
  for (var i = 0; i < quizQuestions[currentQuestionIndex].choices.length; i++) {
    var choice = quizQuestions[currentQuestionIndex].choices[i];
    var li = document.createElement("li");
    li.innerHTML = "<a href='#'>" + choice + "</a>";
    li.id = "choiceInput" + (i + 1);
    li.addEventListener("click", checkAnswer);
    choicesList.appendChild(li);
  }
}

function checkAnswer(event) {
  var selectedChoice = event.target.parentNode.id;
  var choiceIndex = parseInt(selectedChoice.replace("choiceInput", ""));
  
  if (choiceIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
    score++;
    displayResult("Correct!", "green");
  } else {
    displayResult("Wrong!", "red");
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function displayResult(message, color) {
  var resultElement = document.getElementsByClassName("result")[0];
  
  resultElement.textContent = message;
  resultElement.style.color = color;
}

function endQuiz() {
  stopTimer();
  alert("Quiz has ended! Your score is: " + score);
}

function startTimer() {
}

function stopTimer() {
}

var startButton = document.getElementById("start-quiz");
startButton.addEventListener("click", startQuiz())