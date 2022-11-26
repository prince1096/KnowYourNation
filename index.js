var readlineSync = require("readline-sync");
var score = 0
function welcome() {
  var userId = readlineSync.question("May I have your name? ")
  console.log("Welcome " + userId + "!!")
  console.log("Hey " + userId + " Let's play Know Your Nation Quiz")
}
//array of objects

var questions = [{
  question: "Which is the highest award in India? ",
  answer: "Bharat Ratna"
}, {
  question: "Our National Tree is the : ",
  answer: "Banyan Tree"
},
{
  question: "National Motto of India  ",
  answer: "Satyameva Jayate"
},
{
  question: "What is the name of India's National Aquatic Animal ",
  answer: "River Dolphin"
},
{
  question: "Which state has highest literacy rate ",
  answer: "Kerala"
}

];


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay!You were right🙂")
    score++;
  }
  else {
    console.log("You are wrong😣")

  }

  console.log("Current score:  ", score)
  console.log("..................")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

welcome();
game();

var highScore = [
  {
    name: "Krishna",
    score: 5,
  },

  {
    name: "Prince",
    score: 4,
  },

  {
    name: "Yashi",
    score: 4,
  }
]


function scores() {
  console.log("You scored: ", score);

  console.log("Check out the high scores, if You beat it send me a screenshot and I will update it");

  highScore.map(score => console.log(score.name, " : ", score.score))
}


scores()