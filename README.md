# usyd-bootcamp-Week4-Homework-Noriyuki-Ishii

## JavaScript Quiz App

This application is a combination of multiple-choice questions and interactive challenges. I have built a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It will also feature a clean and polished user interface and be responsive powered by Bootstrap, ensuring that it adapts to multiple screen sizes.

## Tech used

- HTML
- CSS
- JavaScript
- Bootstrap

## Deployment

https://noriyuki-ishii-820.github.io/usyd-bootcamp-Week4-Homework-Noriyuki-Ishii/

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## psudo code I used for initial brainstorming

1. user clicks the 'start quiz button'
2. the intro page disappears and the first question appears + time coundown from 100. reduce 1 by every second
3. the first quiz appears with 4 options
4. if user picks the right question, go to the next quiz
5. if user picks the wrong question, go to the next quiz and reduce score by 10
6. when the score becames 0 OR user answers all 10 questions, show the score
7. add the score into the highscore list


## personal notes
- starts with 75 seconds
- Correct or incorrect for few seconds  = setTimeOut    1000 miliseocnds = 1 sec. 
- if incorrect, time reduces by 20
- store the highscore in local storage
- Go back is to index.html
- See Highscore is highscore.html
- Highscore goes from top to bottom
- use hide to hide the intro page
- when time = 0, stop the quiz and show the final page
- Questions are in array with a title
 var questions = [
        {
        Title: "do you like JS?"
        choices: ["yes", "no", "maybe"]
        answer: "no";
        } 


## last update September 2020