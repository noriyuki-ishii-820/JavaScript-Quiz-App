var startButton = document.getElementById("start");
var quizQuestions = document.getElementById("quizQuestion");
var answerContainers = quizContainer.querySelectorAll(".answers");
var resultsContainer = document.getElementById("results");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var questionIndex = 0;

//Question choices
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");

startButton.addEventListener("click", function () {
  var intro = document.getElementById("intro");
  intro.remove();
  document.getElementById("next").style.display = "inline-block";

  var scoreLeft = 101;
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
  
  beginQuestion();

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
}


//   const output = [];

//   questions.forEach(
//     (currentQuestion, questionNumber) => {
//           const answers = [];

//           for (letter in currentQuestion.answers) {
//             answers.push(
//               `<label>
//                       <input type="radio" name="question${questionNumber}" value="${letter}">
//                       ${letter}:
//                       ${currentQuestion.answers[letter]}
//                 </label>`
//             );
//           }

//     output.push(
//       `<div class="slide">
//                 <div class="question"> ${currentQuestion.question} </div>
//                 <div class="answers"> ${answers.join("")} </div>
//        </div>`
//     );
//   });
//       quizContainer.innerHTML = output.join('');
// }

function showResults(){
        var answerContainers = quizContainer.querySelectorAll(".answers");
        questions.forEach((currentQuestion, questionNumber) => {
              var answerContainer = answerContainers[questionNumber];
              var selector = `input[name=question${questionNumber}]:checked`;
              var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
              if (userAnswer === currentQuestion.correctAnswer) {
              resultsContainer.TextContent = "Correct!"; //shows the result
              } else {
              resultsContainer.TextContent = "Incorrect!"; //shows the result
              var scoreLeft = scoreLeft - 10;
              }
          });
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
}

function showNextSlide(){
    showSlide(currentSlide + 1);
}

nextButton.addEventListener("click", showNextSlide);

var questions = [
  {
    question: "What is the capital of Australia?",
    answers: {
      choiceA: "Sydney",
      choiceB: "Melbourne",
      choiceC: "Perth",
      choiceD: "Canberra",
    },

    correctAnswer: "D",
  },

  {
    question: "What is the capital of the United States?",
    answers: {
      choiceA: "Los Angeles",
      choiceB: "New York",
      choiceC: "Washington",
      choiceD: "Miami",
    },

    correctAnswer: "C",
  },

  {
    question: "What is the capital of Germany?",
    answers: {
      A: "Munich",
      B: "Frankfurt",
      C: "Berlin",
      D: "Paris",
    },

    correctAnswer: "C",
  },

  {
    question: "What is the capital of New Zealand?",
    answers: {
      choiceA: "Auckland",
      choiceB: "Christchurch",
      choiceC: "Queenstown",
      choiceD: "Wellington",
    },

    correctAnswer: "D",
  },

  {
    question: "What is the capital of Japan?",
    answers: {
      choiceA: "Fukuoka",
      choiceB: "Tokyo",
      choiceC: "Osaka",
      choiceD: "Sapporo",
    },

    correctAnswer: "B",
  },

  {
    question: "What is the capital of the Philippines?",
    answers: {
      choiceA: "Bangkok",
      choiceB: "Jakarta",
      choiceC: "Manila",
      choiceD: "Mumbai",
    },

    correctAnswer: "C",
  },

  {
    question: "What is the capital of the Egypt?",
    answers: {
      choiceA: "Cairo",
      choiceB: "Capetown",
      choiceC: "Prague",
      choiceD: "Nairobi",
    },

    correctAnswer: "A",
  },

  {
    question: "Which of the following country is an island?",
    answers: {
      choiceA: "Bangladesh",
      choiceB: "Panama",
      choiceC: "Israel",
      choiceD: "Kingdom of Tonga",
    },

    correctAnswer: "D",
  },

  {
    question: "Which of the following country has the largest population?",
    answers: {
      choiceA: "Nigeria",
      choiceB: "Germany",
      choiceC: "Australia",
      choiceD: "Canada",
    },

    correctAnswer: "A",
  },

  {
    question: "Which of the following country does not have red in its flag?",
    answers: {
      choiceA: "Barbados",
      choiceB: "Trinidad and Tobago",
      choiceC: "Spain",
      choiceD: "Columbia",
    },

    correctAnswer: "A",
  },
];

