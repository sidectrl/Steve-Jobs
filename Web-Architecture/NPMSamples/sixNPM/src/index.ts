console.log("Hello world");
const randomName = require("random-italian-names");
const input = require("prompt-sync")();

let currentName: string;

const newGame = () => {
  currentName = randomName.random() as string;
  return currentName.split("").map((letter, index) => {
    return index == 0 ? letter : "_";
  });
};

const play = (test: string) => {
  if (test.length !== currentName.length) {
    throw new Error("Errore di dimensione");
  }
  const response = test.split("").map((letter, index) => {
    return {
      letter, // letter: letter
      currentNameLetter: currentName[index],
      color: letter === currentName[index] ? "green" : "red",
    };
  });
  const missingLetters = response
    .filter((item) => {
      return item.color === "red";
    })
    // .filter((item) => item.color === "red")
    // .filter(({color}) => color === "red")
    .map((item) => item.currentNameLetter);
  //.map(({currentNameLetter}) => currentNameLetter)

  return response.map((item) => {
    if (item.color === "green") {
      return {
        letter: item.letter,
        color: item.color,
      };
    } else {
      return {
        letter: item.letter,
        color: missingLetters.includes(item.letter) ? "yellow" : "red",
      };
    }
  });
};

console.log(newGame());
let n: string | number = 1;
while (Number(n) !== 0) {
  let n = input("");
  if (Number(n) === 0) break;
  const response = play(String(n));
  console.log(response);
  const youWin = response.every((item) => {
    return item.color === "green";
  });
  // const youWin = response.every(({color}) => color === "green");

  if (youWin) {
    console.log("Hai vinto");
    break;
  }
}
console.log("gioco finito");

// every sono tutti minori di 25
// some c'è almeno uno minore di 25

const response = [19, 39, 20, 50, 18].some((item) => {
  console.log("sto invocando la callback");
  return item < 25;
});

export { newGame, play };