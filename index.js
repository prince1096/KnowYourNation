var readlineSync = require("readline-sync");
var score = 0
function welcome() {
  var userId = readlineSync.question("May I have your name? ")
  console.log("Welcome " + userId + "🖐")
  console.log("Hey " + userId + " Let's play Know Your Nation Quiz")
}
//array of objects

var questions = [{
  question: "Which is the highest award in India? \na.Padam Award \nb.Param Vir Chakra \nc.Bharat Ratna \nd.Vir Chakra \nEnter your answer : ",
  answer: "c"
}, {
  question: "Our National Tree is the : \na.Shisham tree \nb.Banyan tree \nc.Mango tree \nd.Teak tree \nEnter your answer : ",
  answer: "b"
},
{
  question: "National Motto of India? \na.One Nation One Culture \nb.Peace Work Fatherland \nc.Unity Work Progress \nd.Satyameva Jayate \nEnter your answer : ",
  answer: "d"
},
{
  question: "What is the name of India's National Aquatic Animal? \na.Shark \nb.Whale \nc.Dolphin \nd.Sunfish \nEnter your answer : ",
  answer: "c"
},
{
  question: "Which state has highest literacy rate? \na.Kerala \nb.Bihar \nc.Tamilnade \nd.Gujrat \nEnter your answer : ",
  answer: "a"
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
  console.log(" ")
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