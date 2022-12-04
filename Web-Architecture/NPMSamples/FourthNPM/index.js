let deck = [];
let discarded = [];
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const seeds = ["♤", "♧", "♡", "♢"];
exports.initialize = () => {
    //si deve utilizzare il metodo foreach della classe array per inizializzare il deck
    for (let i = 0; i < seeds.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.push(cards[j] + seeds[i]);
        }
    }
}

exports.shuffle = () => {
    return deck.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
}

exports.hasNext = () => {
    return deck.length == 0 && discarded.length == 52 ? deck[deck.length - 2] : "There's no next card";
}

exports.draw = () => {
    if (deck[deck.length - 1] != undefined)
        discarded.push(deck.pop());
    return discarded[discarded.length - 1];
}

exports.getDeck = () => {
    return deck;
}

exports.getDiscard = () => {
    return discarded;
}


