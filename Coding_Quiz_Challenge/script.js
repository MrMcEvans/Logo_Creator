






// Defines an array of objects to store the quiz questions and answers
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
  
  // Initialize variables
  var currentQuestionIndex = 0;
  var score = 0;
  
  // Function to start the quiz
  function startQuiz() {
    displayQuestion();
    startTimer();
  }
  
  // Function to display the current question and choices
  function displayQuestion() {
    var questionPrompt = document.getElementById("question-prompt");
    var choicesList = document.getElementsByClassName("choices")[0];
    
    questionPrompt.textContent = quizQuestions[currentQuestionIndex].question;
    
    choicesList.innerHTML = "";
    
    // Loop through the choices and create list items
    for (var i = 0; i < quizQuestions[currentQuestionIndex].choices.length; i++) {
      var choice = quizQuestions[currentQuestionIndex].choices[i];
      var li = document.createElement("li");
      li.innerHTML = "<a href='#'>" + choice + "</a>";
      li.id = "choiceInput" + (i + 1);
      li.addEventListener("click", checkAnswer);
      choicesList.appendChild(li);
    }
  }
  
  // Function to check the selected answer
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
    
    // Check if there are more questions
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to display the result of each question
  function displayResult(message, color) {
    var resultElement = document.getElementsByClassName("result")[0];
    
    resultElement.textContent = message;
    resultElement.style.color = color;
  }
  
  // Function to end the quiz
  function endQuiz() {
    stopTimer();
    alert("Quiz has ended! Your score is: " + score);
  }
  
  // Function to start the timer
  function startTimer() {
    // Implement your timer logic here
  }
  
  // Function to stop the timer
  function stopTimer() {
    // Implement your timer logic here
  }
  
  // Event listener for the start button
  var startButton = document.getElementById("start-quiz");
  startButton.addEventListener("click", startQuiz())