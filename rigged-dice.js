const prompt = require(`prompt-sync`)({sigint: true});

let userChoice = Number(prompt("What number should be rigged? "));
let diceRoll = Math.ceil(Math.random()*7);
if (diceRoll === 7){
    console.log(userChoice);
} else {
    console.log(diceRoll);
}