
var expect = chai.expect;

describe('MyFunctions', function() {
  describe('#doSomething', function() {
    it('generate a shuffled deck', function() {
      const deck = new Deck ();
      const inputSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const inputNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
      const inputValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      const unshuffled = [];
      for (let i = 0; i < inputSuits.length; i++) {
        for (let j = 0; j < inputNames.length; j++){
          unshuffled.push(new Card(inputSuits[i], inputNames[j], inputValues[j]));
        }
      }

      expect(deck.cards).to.not.deep.equal(unshuffled);
    });
  })

  //Progress Test - Currently Unresolved
    // it('generate two players with 3 properties - name: string, score: number, hand: []', function () {
    //   expect(function() {
    //     let makeNewPlayers =
    //     newplayers(5, 5);
    //   }).to.throw(Error);
    // })
  // describe('#gameplay', function(){
  //   it('play game - be more detailed', function(){
  //     let game = new Game();
  //     game.assignPlayers();
  //     // assignPlayers () {
  //       let player_1 = 'Ted';
  //       let player_2 = 'Jenny';
  //       this.players = [new Player(player_1), new Player(player_2)];
  //     // };


  //     game.dealDeck();
  //     game.gamePlay();



  //     expect(game.players.length).to.equal(2);
  //   });
  // })

  describe('#CreatePLayers', function() {
    it('generates ONE new player with 3 properties - name: string, score: number, hand: []', function() {
      const players = new Player ('Ted');

      expect(players).to.be.a('object');
      expect(players.name).to.equal("Ted");
      expect(players.score).to.be.a('number');
      expect(players.score).to.equal(0);
      expect(players.hand).to.be.a('array');
      expect(players.hand.length).to.equal(0);
    });
  })

  describe('#assignPlayers', function() {
    it('generates 2 new players with 3 properties - name: string, score: number, hand: []', function() {
      // const players = new Player ('Ted');
        let player_1 = 'Ted';
        let player_2 = 'Jenny';
        const players = [new Player(player_1), new Player(player_2)];

      expect(players).to.be.a('array');
      expect(players[0].name).to.equal("Ted");
      expect(players[0].score).to.be.a('number');
      expect(players[0].score).to.equal(0);
      expect(players[0].hand).to.be.a('array');
      expect(players[0].hand.length).to.equal(0);

      expect(players).to.be.a('array');
      expect(players[1].name).to.equal("Jenny");
      expect(players[1].score).to.be.a('number');
      expect(players[1].score).to.equal(0);
      expect(players[1].hand).to.be.a('array');
      expect(players[1].hand.length).to.equal(0);
    });
  })

})



// var expect = require('chai').expect
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(beverages).to.have.property('tea').with.lengthOf(3);

/*
var expect = chai.expect;

describe('MyFunctions', function() {
  describe('#doSomething', function() {
    it('should concatenate the two parameters', function() {
      var x = doSomething('Hello', 5);
      expect(x).to.equal('Hello5');
    });

    it('should throw an error if the first parameter is not a string', function () {
      expect(function() {
        doSomething(5, 5);
      }).to.throw(Error);
    })
  })
})
*/



///////  week 6 Class Exercise  ////////////
// var expect = chai.expect;


// celsius(fahrenheit) {
//   const fahrenheitInC = ((fahrenheit - 32)*5)/9;
//   return fahrenheitInC
// }

// class Temperature {
//   constructor (fahrenheit) {
//     if(fahrenheit <= 212 && fahrenheit >= -459) {
//       this.fahrenheit = fahrenheit;
//     }else {
//       console.log("number should be betwen 212 and -459")
//     }
//     // this.temps = [];
//   }
//   celsius() {
//     const fahrenheitInC = ((this.fahrenheit - 32)*5)/9;
//     this.temps.push(fahrenheitInC);
//     // return fahrenheitInC
//   }

//   kelvin() {
//     const celsius = this.celsius();
//     return celsius + 273.15
//   }
// }

// const temp = new Temperature(80);
// console.log(temp.celsius().toFixed(2))
// console.log(temp.kelvin().toFixed(2))

// describe('MyFunctions', function() {
//   describe('#doSomething', function() {
//     it('should convert celcius to farenheight', () => {
//       var x = doSomething(1);
//       expect(x).to.equal('Hello5');
//     });

//     it('should throw an error if the first parameter is not a string', function () {
//       expect(function() {
//         doSomething(5, 5);
//       }).to.throw(Error);
//     })
//   })
// })