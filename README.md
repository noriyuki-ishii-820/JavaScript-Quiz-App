# usyd-bootcamp-Week4-Homework-Noriyuki-Ishii

psudo code:

1. user clicks the 'start quiz button'
2. the intro page disappears and the first question appears + time coundown from 100. reduce 1 by every second
3. the first quiz appears with 4 options
4. if user picks the right question, go to the next quiz
5. if user picks the wrong question, go to the next quiz and reduce score by 10
6. when the score becames 0 OR user answers all 10 questions, show the score
7. add the score into the highscore list


#notes
- starts with 75 seconds
- Correct or incorrect for few seconds  = setTimeOut    1000 miliseocnds = 1 sec. 
- if incorrect, time reduces by 20
- store the highscore in local storage
- Go back is to index.html
- See Highscore is highscore.html
- Highscore goes from top to bottom
- 

- Questions are in array with a title
 var questions = [
{
    Title: "do you like JS?"
    choices: ["yes", "no", "maybe"]
    answer: "no";

} if choice.no = answer 

     
 ]


 - use hide to hide the intro page
- when time = 0, stop the quiz and show the final page
- 