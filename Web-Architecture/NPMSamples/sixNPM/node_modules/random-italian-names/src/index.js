var uniqueRandomArray = require('unique-random-array');
var italianNames = require('./nomi-italiani.json');
var getRandomNames = uniqueRandomArray(italianNames);
// Esporto un oggetto - uso CommonJS per i moduli
module.exports = {
  all: italianNames,
  random: random
};

function random(number){
  if (number === undefined){
    return getRandomNames();
  } else {
    var randomNames =[];
    for(var i = 0; i < number; i++){
      randomNames.push(getRandomNames());
    }
    return randomNames;
  }
}