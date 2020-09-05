
var startButton = document.getElementById("start");


function showQuestion (){

    alert("hi!");


}


startButton.addEventListener("click", function(){
    var intro = document.getElementById("intro");
    intro.remove();

    var scoreLeft = 101;
    var scoreDisplay = setInterval(function(){
        scoreLeft --;
        document.getElementById("timeScore").textContent = scoreLeft;
    if(scoreLeft <= 0){
        clearInterval(scoreDisplay);
    }
    },1000);

    showQuestion();
});





var questions = [

    {
        question: "What is the capital of Australia?",
            answers: {
                1: "Sydney",
                2: "Melbourne",
                3: "Perth",
                4: "Canberra"
            },
            
            correctAnswer: "4"

    },

    {
        question: "What is the capital of the United States?",
            answers: {
                1: "Los Angeles",
                2: "New York",
                3: "Washington",
                4: "Miami"
            },
            
            correctAnswer: "3"

    },

    {
        question: "What is the capital of Germany?",
            answers: {
                1: "Munich",
                2: "Frankfurt",
                3: "Berlin",
                4: "Paris"
            },
            
            correctAnswer: "3"

    },

    {
        question: "What is the capital of New Zealand?",
            answers: {
                1: "Auckland",
                2: "Christchurch",
                3: "Queenstown",
                4: "Wellington"
            },
            
            correctAnswer: "4"

    },


    {
        question: "What is the capital of Japan?",
            answers: {
                1: "Fukuoka",
                2: "Tokyo",
                3: "Osaka",
                4: "Sapporo"
            },
            
            correctAnswer: "2"

    },


    {
        question: "What is the capital of the Philippines?",
            answers: {
                1: "Bangkok",
                2: "Jakarta",
                3: "Manila",
                4: "Mumbai"
            },
            
            correctAnswer: "3"

    },

    {
        question: "What is the capital of the Egypt?",
            answers: {
                1: "Cairo",
                2: "Capetown",
                3: "Prague",
                4: "Nairobi"
            },
            
            correctAnswer: "1"

    },

    {
        question: "Which of the following country is an island?",
            answers: {
                1: "Bangladesh",
                2: "Panama",
                3: "Israel",
                4: "Kingdom of Tonga"
            },
            
            correctAnswer: "4"

    },


    {
        question: "Which of the following country has the largest population?",
            answers: {
                1: "Nigeria",
                2: "Germany",
                3: "Australia",
                4: "Canada"
            },
            
            correctAnswer: "1"

    },



    {
        question: "Which of the following country does not have red in its flag?",
            answers: {
                1: "Barbados",
                2: "Trinidad and Tobago",
                3: "Spain",
                4: "Columbia"
            },
            
            correctAnswer: "1"

    },


]