#! /usr/bin/env node              
import inquirer from "inquirer";
import chalk from "chalk";
import { calculate } from "./calculation.js";

let prompt = await inquirer.prompt([
    {
        name: "number_1",
        type: "number",
        message: chalk.white.bold.italic("Enter First Number")
    }
    ,
    {
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Divide", "Multiply", "Modulus"]

    }
    ,
    {
        name: "number_2",
        type: "number",
        message: chalk.white.bold.italic("Enter Second Number")
    }

])

if (!prompt.number_1 || !prompt.number_2) {
    console.log(chalk.red.bold.italic("\nInput Field Is Empty"));
} else {

    let calculation = calculate(prompt.number_1, prompt.operator, prompt.number_2)

    console.log(chalk.blue.bold.italic(
        "\nFirst Number Is " + prompt.number_1 +
        " Second Number Is  " + prompt.number_2 +
        " after " + prompt.operator +
        " Answer Is " + calculation
    ));
}