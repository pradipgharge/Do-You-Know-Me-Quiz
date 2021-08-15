var readlineSync = require("readline-sync");
const chalk = require('chalk');
var emoji = require('node-emoji')

//Accept user name
var userName = readlineSync.question("Please enter your name: ");
console.log(chalk.red.bgGreen.bold(chalk.red("\n Welcome " + userName.toUpperCase()) + ", Let's play DO YOU KNOW PRADIP ? \n"));

//Explain the rules
console.log(chalk.bold("Following are the rules of this quiz game:\n"));
console.log(chalk.cyanBright("1.There are fifteen questions in this game.\n2.For every correct answer you will be awarded 2 points \n3.For every wrong answer 1 point will be deducted.\n4.There is no time limit, but it shouldn't take you long if you know me well!"));

var userScore = 0;
console.log("-----------------------------------------------------------------------------\n")
console.log(chalk.black.bold.bgYellowBright(" HERE COME THE QUESTIONS--- \n"))

//play-function
function play(questionNo, question, answer) {
    var userAnswer = readlineSync.question(questionNo + ". " + question);
    console.log(chalk.yellowBright("\nYou entered:" + userAnswer))
  
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green.bold("You are right!" + emoji.get("full_moon_with_face")));
      userScore = userScore + 2;
    }
    else {
      console.log(chalk.redBright.bold("You are wrong!" + emoji.get("disappointed_relieved")));
      console.log(chalk.cyanBright("\nThe correct answer is:", answer));
      userScore = userScore - 1;
    }
  
    console.log(chalk.whiteBright.bgBlue("\n Your current score is: "+ userScore +" "));
    console.log("\n---------------------------------------------")
  }

  //array of objects
var questions = [
    {
      question: "What is my favourite color ? ",
      answer: "green",
    },
  
    {
      question: "What is my favourite dish ? ",
      answer: "chole bhature",
    },
  
    {
      question: "What is my favourite football club ? ",
      answer: "real madrid",
    },
  
    {
      question: "What is my favourite movie ? ",
      answer: "shawshank redemption",
    },
  
    {
      question: "Which city do I live in ? ",
      answer: "pune",
    },
  
    {
      question: "Who is my favourite sports person ? ",
      answer: "Cristiano Ronaldo",
    },
  
    {
      question: "What is my pet's name ? ",
      answer: "jarvis",
    },
  
  
    {
      question: "Who is my biggest inspiration ? ",
      answer: "steve jobs",
    },
  
  
    {
      question: "What is my favourite programming language ? ",
      answer: "javascript",
    },
  
  
    {
      question: "What is my mother tongue ? ",
      answer: "marathi",
    },
  
  
    {
      question: "Who is my favourite superhero ? ",
      answer: "ironman",
    },
  
  
    {
      question: "What is my favourite hobby ? ",
      answer: "playing video games",
    },
  
  
    {
      question: "What is my favourite book ? ",
      answer: "atomic habits",
    },
  
  
    {
      question: "Do I like summer or winter ? ",
      answer: "winter",
    },
  
  
    {
      question: "What is my first school's name ? ",
      answer: "happy hours",
    }
  
  ];


  //function call
for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(i + 1, currentQuestion.question, currentQuestion.answer);
  }
  
  
  //displaying user's final score
  console.log(chalk.bgRed.white.bold(" Time for the result: ") + "\n\nYour final score is: " + userScore, "\n");
  
  
  //record of highscores
  var highScores = [
    {
      playerName: "Aai(mom)",
      score: 30,
      medal: emoji.get("first_place_medal")
    },
  
    {
      playerName: "pradipgharge",
      score: 28,
      medal: emoji.get("second_place_medal")
    },
  
    {
      playerName: "sankethgharge",
      score: 24,
      medal: emoji.get("third_place_medal")
    }
  ];
  
  
  //displaying highscores
  console.log(chalk.black.bold.bgYellowBright("-----Checkout the highscores------ \n"));
  for (i = 0; i < highScores.length; i++) {
    console.log(chalk.cyanBright("Player name: ") + highScores[i].playerName + highScores[i].medal);
    console.log(chalk.greenBright("Score: ") + highScores[i].score);
    console.log("-----------------\n");
  }
  
  