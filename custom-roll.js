const prompt = require(`prompt-sync`)({sigint: true});

let userChoice = Number(prompt("How many sides are on the dice? "));

let diceRoll = Math.ceil(Math.random()*userChoice);

console.log(diceRoll);