export const high = (str: string): string =>{
    return str.split(" ").reduce((highest, word) => {
      let score = word.split("").reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
      return score > highest.score ? {word, score} : highest;
    }, {word: "", score: 0}).word;
  }