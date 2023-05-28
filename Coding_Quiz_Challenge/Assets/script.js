var timeRemaining = document.getElementById('Timer');
var timeLeft = 90;
var startButton = document.getElementById("start-quiz");

//array of questions and answers
var quizQuestions = [
  {
    question: "Question 1: What does javaScript automatically insert at the end of each line?",
    choices: [",", ";", ":", "{}"],
    correctAnswer: 2
  },
  {
    question: "Question 2: What symbols must follow a function for javascript to run?",
    choices: ["{}", "()", "<>", "[]"],
    correctAnswer: 2
  },
  {
    question: "Question 3: What type of syntax is used to link a javaScript file to an HTML?",
    choices: ["link", "script", "src", "a"],
    correctAnswer: 2
  },
  {
    question: "What is Eli's bank info?",
    choices: ["Ir", "I", "In", "[Redacted]"],
    correctAnswer: 4
  },
  {
    question: "What javaScript function can assign multiple values to a variable?",
    choices: ["function", "event.listener", "index", "array"],
    correctAnswer: 4
  }
];
var currentQuestionIndex = 0;
var score = 0;
//opening text when page is loaded
function startScreen(){
  var questionPrompt = document.getElementById("question-prompt");
  questionPrompt.textContent = "Would you like to take a short coding quiz? Click start to test yourself!"
}

//starts quiz when event.listener is triggered
function startQuiz() {
  displayQuestion();
  startTimer();
}
//appends question to html elements
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
//Takes player input and determines if answer is correct
function checkAnswer(event) {
  var selectedChoice = event.target.parentNode.id;
  var choiceIndex = parseInt(selectedChoice.replace("choiceInput", ""));
  
  if (choiceIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
    score++;
    displayResult("Correct!", "green");
  } else {
    displayResult("Wrong!", "red");
    timeReduction();
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

}
//reduces timer by 20 seconds if player gets a question wrong
function timeReduction(){
  timeLeft -= 20
}

//displays right or wrong depending on user input
function displayResult(message, color) {
  var resultElement = document.getElementsByClassName("result")[0];
  
  resultElement.textContent = message;
  resultElement.style.color = color;
}
//Ends quiz and displays result
function endQuiz() {
  alert("Quiz has ended! Your score is: " + score + " With " + timeLeft + " seconds remaining!");
}
//starts timer
function startTimer() {
  var timeInterval = setInterval(function (){

    if (timeLeft > 0) {
      timeRemaining.textContent = timeLeft + ' seconds remaining'
      timeLeft--;

    }else {
      timeLeft.textContent = "";
      clearInterval(timeInterval);
      endQuiz()
    }
  }, 1000)
}


startScreen()
startButton.addEventListener("click", startQuiz);




//test comment