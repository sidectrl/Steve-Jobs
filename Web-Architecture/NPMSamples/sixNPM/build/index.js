"use strict";
const randomName = require("random-italian-names");
const input = require("prompt-sync");
let currentName;
const newGame = () => {
    currentName = "polpo";
    return currentName.split("").map((letter, index) => {
        return index == 0 ? letter : "_";
    });
};
const play = (test) => {
    if (test.length !== currentName.length) {
        throw new Error("Errore di dimensione");
    }
    const response = test.split("").map((letter, index) => {
        return {
            letter: letter,
            color: letter === currentName[index] ? 'green' : 'red',
            currentNameLetter: currentName[index],
        };
    });
    const missingLetters = response.filter(({ color }) => color === "red").map((item) => item.currentNameLetter);
    console.log("missingletters: ", missingLetters);
    return response;
};
console.log(newGame());
let n = 1;
while (Number(n) !== 0) {
    let n = input("");
    if (Number(n) === 0)
        break;
    const response = play(String(n));
    console.log(response);
    const youWin = response.every((item) => {
        return item.color === "green";
    });
    if (youWin) {
        break;
    }
    console.log(response);
}
console.log("gioco finito");
