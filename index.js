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