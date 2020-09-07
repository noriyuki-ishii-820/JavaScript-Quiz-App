var highScoreList = document.getElementById("highScorelist");
var clearHighscore = document.getElementById("clearHighScoreButton");
var results = document.querySelector("#listSection");

function createScoreList (){

    var rawHighScore = localStorage.getItem("highScores");
    var scoresArray = JSON.parse(rawHighScore);
    scoresArray.sort(function(a, b){return b.score - a.score});

    scoresArray.forEach(obj => {
      var initials = obj.initials;
      var storedScore = obj.score;
      var resultsP = document.createElement("li");
      resultsP.innerText=`${initials} : ${storedScore}`;
      highScoreList.appendChild(resultsP);

  });
}

function deleteScore() {    
    window.localStorage.removeItem("highScores");
    results.remove();
}  


clearHighscore.addEventListener("click", deleteScore);
createScoreList();
