//variables
var startButton = document.getElementById("start");
var quizQuestions = document.getElementById("quizQuestion");
var scoreDisplay = document.getElementById("scoreDisplay");
var finalScore = document.getElementById("finalScore");
var quizContainer = document.getElementById("quiz-container");
var nextButton = document.getElementById("next");
var timeScore = document.getElementById("timeScore");
var slides = document.querySelectorAll(".slide");
var questionIndex = 0;
var scoreLeft = 101;

//Question choices
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");

//hide
quizContainer.style.display="none";
scoreDisplay.style.display="none";

//start quiz

startButton.addEventListener("click", function () {
  quizContainer.style.display="";

  var intro = document.getElementById("intro");
  intro.remove();
  
  var scoreDisplay = setInterval(function () {
    scoreLeft--;
    document.getElementById("timeScore").textContent = scoreLeft;
    if (scoreLeft <= 0) {
      clearInterval(scoreDisplay);
    }
    if (scoreLeft < 10){
        document.getElementById("timeScore").style.color = "red";
    }

  }, 1000);
  
  beginQuiz();

});

function getQuestion() {
  
    let q = questions[questionIndex];
    quizQuestions.innerHTML = "<p>Question " + (questionIndex+1) + ":" + q.question + "</p>";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";

}

function beginQuiz(){
    startButton.style.display = "none";
     getQuestion();
     quizContainer.style.display="block";
}

//show Results

function showScore(){
  quizContainer.style.display="none";
  timeScore.style.display="none";
  scoreDisplay.style.display="";
  finalScore.textContent = scoreLeft;

}


// check whether the answer is correct

function check (answer) {
  if (questionIndex < questions.length - 1 ) { // for Questions No. 1-9
      if (answer == questions[questionIndex].correctAnswer) {
        questionIndex++;
        alert("Correct!");
        setTimeout(getQuestion,1000);
      } else {
        alert("Incorrect! You lost 10 points!");
        questionIndex++;
        scoreLeft -= 10;
        setTimeout(getQuestion,1000);
      } 
    } else {
    
    if (answer == questions[questionIndex].correctAnswer){  //for the last question
            alert("Correct!");
            questionIndex++;
            setTimeout(getQuestion,1000);
      } else {
            alert("Incorrect! You lost 10 points!");
            questionIndex++;
            scoreLeft -= 10;
            setTimeout(getQuestion,1000);
      }
    }
   if (scoreLeft <=  0 || questionIndex == question.length) {
      showScore();
  };

}





// question arrays

var questions = [
  {
    question: "What is the capital of Australia?",
    choiceA: "Sydney",
    choiceB: "Melbourne",
    choiceC: "Perth",
    choiceD: "Canberra",
    correctAnswer: "D",
  },

  {
    question: "What is the capital of the United States?",
    choiceA: "Los Angeles",
    choiceB: "New York",
    choiceC: "Washington",
    choiceD: "Miami",
    correctAnswer: "C",
  },

  {
    question: "What is the capital of Germany?",
    choiceA: "Munich",
    choiceB: "Frankfurt",
    choiceC: "Berlin",
    choiceD: "Paris",
    correctAnswer: "C",
  },

  {
    question: "What is the capital of New Zealand?",
      choiceA: "Auckland",
      choiceB: "Christchurch",
      choiceC: "Queenstown",
      choiceD: "Wellington",
      correctAnswer: "D",
  },

  {
    question: "What is the capital of Japan?",
      choiceA: "Fukuoka",
      choiceB: "Tokyo",
      choiceC: "Osaka",
      choiceD: "Sapporo",

    correctAnswer: "B",
  },

  {
    question: "What is the capital of the Philippines?",
      choiceA: "Bangkok",
      choiceB: "Jakarta",
      choiceC: "Manila",
      choiceD: "Mumbai",
    correctAnswer: "C",
  },
  {
    question: "What is the capital of the Egypt?",
      choiceA: "Cairo",
      choiceB: "Capetown",
      choiceC: "Prague",
      choiceD: "Nairobi",
    correctAnswer: "A",
  },

  {
    question: "Which of the following country is an island?",
      choiceA: "Bangladesh",
      choiceB: "Panama",
      choiceC: "Israel",
      choiceD: "Kingdom of Tonga",
      orrectAnswer: "D",
  },

  {
    question: "Which of the following country has the largest population?",
      choiceA: "Nigeria",
      choiceB: "Germany",
      choiceC: "Australia",
      choiceD: "Canada",
    correctAnswer: "A",
  },

  {
    question: "Which of the following country does not have red in its flag?",
      choiceA: "Barbados",
      choiceB: "Trinidad and Tobago",
      choiceC: "Spain",
      choiceD: "Columbia",
    correctAnswer: "A",
  },
];

