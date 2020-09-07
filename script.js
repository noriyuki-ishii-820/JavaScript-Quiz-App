//variables
var startButton = document.getElementById("start");
var quizQuestions = document.getElementById("quizQuestion");
var scoreDisplay = document.getElementById("scoreDisplay");
var quizContainer = document.getElementById("quiz-container");
var submitScore = document.getElementById("submitForm");
var nextButton = document.getElementById("next");
var timeScore = document.getElementById("timeScore");
var goBack = document.getElementById("goBackButton");

var userNameInput = document.getElementById("userNameInput");
var displayUserName = document.getElementById("userName");
var displayScore = document.getElementById("score");

var emptyArray = [];
var storedArray = JSON.parse(window.localStorage.getItem("highScores"));

var questionIndex = 0;
var scoreLeft = 101;

//Question choices
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");

//submit scores

const defineScoresArray = (arr1, arr2) => {
  if (arr1 !== null) {
      return arr1
  } else {
      return arr2
  }
}

function submitScores (event) {
  //event.preventDefault();

      //push user info to the array
      var userInfo = {
          initials: userNameInput.value,
          score:scoreLeft,
      };

      var scoresArray = defineScoresArray(storedArray, emptyArray);
      scoresArray.push(userInfo);
      localStorage.setItem("highScores", JSON.stringify(scoresArray));
}  


//show results

function showScore(){
  quizContainer.style.display="none";
  timeScore.style.display="none";
  scoreDisplay.style.display="block";
  finalScore.textContent = scoreLeft;
}

// check answer

function check (answer) {
  if (questionIndex < questions.length - 1 ) { // for Questions No. 1-9
      if (answer == questions[questionIndex].correctAnswer) {
        questionIndex++;
        alert("Correct!");
        setTimeout(1000);
      } else {
        alert("Incorrect! You lost 10 points!");
        questionIndex++;
        scoreLeft -= 10;
        setTimeout(1000);
      } 
    } else {
    
    if (answer == questions[questionIndex].correctAnswer){  //for the last question
            alert("Correct!");
            setTimeout(1000);
      } else {
            alert("Incorrect! You lost 10 points!");
            scoreLeft -= 10;
            setTimeout(1000);
      }
    }
    if (questionIndex == questions.length) {
      showScore();
  }
}

//start game

function startGame(){
  quizContainer.style.display="";

  var intro = document.querySelector(".intro");
  intro.remove();
  
  var countdownTimer = setInterval(function () {
      scoreLeft--;
      timeScore.innerHTML = scoreLeft;
    if (scoreLeft <= 0) {
      clearInterval(countdownTimer);
      showScore();
    }
    if (scoreLeft < 10){
      timeScore.style.color = "red";
    }
  }, 1000);  
 
     startButton.style.display = "none";
     quizContainer.style.display="block";
    
      //show questions

     let q = questions[questionIndex];
     quizQuestions.innerHTML = "<p>Question " + (questionIndex+1) + ":" + q.question + "</p>";
     optionA.innerHTML = q.choiceA;
     optionB.innerHTML = q.choiceB;
     optionC.innerHTML = q.choiceC;
     optionD.innerHTML = q.choiceD;
     choices.style.display = "block";
}





//questions

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

//Button
  startButton.addEventListener("click", startGame);
  submitScore.addEventListener("submit", submitScores);

