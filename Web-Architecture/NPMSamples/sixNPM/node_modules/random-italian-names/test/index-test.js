var expect = require('chai').expect;
var nomiItaliani = require('../src/index');

describe('Generate random names', function(){
  /*it('should work!', function(){
    expect(true).to.be.true;
  });*/
  describe('All method', function(){
    it('should return an array of strings', function(){
      expect(nomiItaliani.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array){
        return array.every(function(elem){
          return typeof elem == 'string';
        })
      }
    });
    it('should include \'Marco\' ', function(){
      var name = 'marco';
      expect(nomiItaliani.all).to.include(name);
    });
  });
  describe('Random method', function(){
    it('should return a random name from list', function(){
      var randomName = nomiItaliani.random();
      expect(nomiItaliani.all).to.include(randomName);
    });
    it('should return an array of random names if passed a number', function(){
      var randomNames = nomiItaliani.random(3);
      expect(randomNames).to.have.length(3);
      randomNames.forEach(function(name){
        expect(nomiItaliani.all).to.include(name);
      })
    })
  })
});