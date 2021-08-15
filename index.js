var readlineSync = require("readline-sync");
const chalk = require('chalk');
var emoji = require('node-emoji')

//Accept user name
var userName = readlineSync.question("Please enter your name: ");
console.log(chalk.red.bgGreen.bold(chalk.red("\n Welcome " + userName.toUpperCase()) + ", Let's play DO YOU KNOW PRADIP ? \n"));