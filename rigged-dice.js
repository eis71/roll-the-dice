const prompt = require(`prompt-sync`)({sigint: true});

let userChoice = Number(prompt("What number should be rigged? "));

if (userChoice > 6){
    console.log("ERROR! INPUT VALID NUMBER 1-6!");
    } else {
        let diceRoll = Math.ceil(Math.random()*7);
            if (diceRoll === 7){
        console.log(userChoice);
            }else {
                 console.log(diceRoll);
    }} 