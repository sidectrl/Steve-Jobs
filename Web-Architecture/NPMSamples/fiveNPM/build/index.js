"use strict";
const computerChoices = ["paper", "scissors", "rock", "lizard", "spock"];
const play = (player1, player2 = computerChoices.sort(() => 0.5 - Math.random())[0]) => {
    console.log("You: " + player1 + "\nenemy: " + player2);
    if (player1 === player2) {
        return "Draw";
    }
    else if ((player1 === "paper" && player2 === "rock")
        || (player1 === "paper" && player2 === "spock")
        || (player1 === "scissors" && player2 === "paper")
        || (player1 === "scissors" && player2 === "lizard")
        || (player1 === "rock" && player2 === "scissors")
        || (player1 === "rock" && player2 === "lizard")
        || (player1 === "lizard" && player2 === "spock")
        || (player1 === "lizard" && player2 === "paper")
        || (player1 === "spock" && player2 === "scissors")
        || (player1 === "lizard" && player2 === "rock")) {
        return "You win";
    }
    else {
        return "Game Over";
    }
};
console.log(play("paper"));
