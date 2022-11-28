const dice = require('dice-francesco-limonelli');
const challenge = function (atkLenght = 3, defLenght = 3) {
    let attackers = Array(atkLenght).fill(0).map(_ => dice.throw()).sort().reverse();
    let defenders = Array(defLenght).fill(0).map(_ => dice.throw()).sort().reverse();
    console.log(attackers);
    console.log(defenders);
    return {
        attackers,
        defenders,
        results: Array(Math.min(atkLenght, defLenght)).fill(0).map((_, index) => attackers[index] > defenders[index] ? "Win atk" : "Win def")
    }
}
console.log(challenge(3, 2));

