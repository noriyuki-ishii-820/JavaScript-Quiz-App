

function showResults() {
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
  currentSlide = n;
  //nextButton.style.display = "inline";
  //nextButton.addEventListener("click", showNextSlide);
}

// function showNextSlide() {
//   showSlide(currentSlide + 1);
// }

// ¥
// var resultsContainer = document.getElementById("results");

//var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// showSlide(currentSlide);

