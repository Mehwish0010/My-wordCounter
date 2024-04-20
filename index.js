#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Please mention the sentence for counting the number of words :"
    }]);
const words = answers.sentence.trim().split(" ");
console.log(chalk.yellowBright(words));
console.log(chalk.bgCyan(`This sentence consists of ${words.length} words`));
