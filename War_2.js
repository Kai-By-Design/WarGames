
class Player {
  constructor (name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

  description() {
    return `${this.name}: ${this.score}`;
  }

  // objectFrom() {
  //   return {
  //     name: this.name,
  //     score: this.score,
  //     hand: this.hand
  //   }
  // }
  // Test commit
  console.log('test')
}
// console.log(`This is objectFrom() ${test.objectFrom()}`)

class Card {
  constructor (suit, name, value){
    this.suit = suit;
    this.name = name;
    this.value = value;
  }

  description() {
    return `${this.name} of ${this.suit}`;
  }
}

// class Deck will create a new collection of Cards
class Deck {
  constructor () {
    this.cards = [];
    // createDeck will generate a 52 card deck
    let inputSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let inputNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    let inputValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (let i = 0; i < inputSuits.length; i++) {
      for (let j = 0; j < inputNames.length; j++){
        this.cards.push(new Card(inputSuits[i], inputNames[j], inputValues[j]));
      }
    }
    this.shuffleDeck();
  }

  // shuffles 52 card deck - input new deck, output shuffled deck
  shuffleDeck () {
    let counter = this.cards.length, temp, i;

    while(counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.cards[counter];
      this.cards[counter] = this.cards[i];
      this.cards[i] = temp;
    }
    // return this.deck;
  }


  // console.log(this.deck);
  // shuffles 52 card deck - input new deck, output shuffled deck
  // shuffleDeck() {
}

class Game {
  constructor() {
    this.deck = new Deck();
    this.players = [];
  }

  assignPlayers () {
    let player_1 = prompt("Enter Player 1 Name");
    let player_2 = prompt("Enter Player 2 Name");
    this.players = [new Player(player_1), new Player(player_2)];
  }

  dealDeck (){
    let i = 0;
    for (const cardElement of this.deck.cards) {
      if (i % 2 !== 0) {
      this.players[0].hand.push(cardElement);
      } else {
        this.players[1].hand.push(cardElement);
      }
      ++i;
    }
  }

  gamePlay(){
    let p1Hand = this.players[0].hand;
    let p2Hand = this.players[1].hand;
    let p1Score = this.players[0].score;
    let p2Score = this.players[1].score;
    // let {hand: p1Hand, score: p1Score, name: p1Name} = this.players[0].objectFrom();
    // console.log('hand', p1Hand);
    // let currentScore = '0';
    let roundWinner = "Game hasn't started yet!";
    console.log('-   Game of War Begins   -')

    for(let i = 0; i < this.players[1].hand.length; i++) {
      //identify current cards
      // let p1Card = `${p1Hand[i].name} of ${p1Hand[i].suit}`;
      // let p2Card = `${p2Hand[i].name} of ${p2Hand[i].suit}`;
      console.log(`${this.players[0].name}: ${p1Hand[i].description()}  VS  ${this.players[1].name}: ${p2Hand[i].description()}`);
      // console.log(`${this.players[0].name}: ${p1Hand[i]}  VS  ${this.players[1].name}: ${p2Hand[i].description()}`);

      if(p1Hand[i].value === p2Hand[i].value){
        roundWinner = 'Tie Round';
      } else if(p1Hand[i].value > p2Hand[i].value){
        roundWinner = this.players[0].name;
        p1Score ++;
      } else {
        roundWinner = this.players[1].name;
        p2Score ++;
      };
          // console.log(`Winner of Round ${i+1}: ${roundWinner}`);

        //Log Scores Each Round
      console.log(`
      ${roundWinner} won round ${i+1}!
      Scores:
      ${this.players[0].name}: ${p1Score}
      ${this.players[1].name}: ${p2Score}
      `);
      // console.log(`
      // ${roundWinner} won round ${i+1}!
      // Scores:
      // ${this.players[0].description()}
      // ${this.players[1].description()}
      // `);
    };
    // Log Winner
    if(p1Score === p2Score) {
      console.log(`
      Everyone Wins Game!!!`);
    } else if(p1Score > p2Score) {
      console.log(`
      ${this.players[0].name} Wins Game!!!`);
    } else {
      console.log(`
      ${this.players[1].name} Wins Game!!!`);
    };
  }

}

let game = new Game();
game.assignPlayers();
game.dealDeck();
game.gamePlay();
// console.log(game);

/////////////////// --------------
/*
class GamePLay () {
  constructor(){
  }

  dealDeck () {
    // creates a new deck
    let newDeck = new Deck();
    // console.log(newDeck);
    newDeck.createDeck();
    // newDeck.shuffleDeck();
    // console.log('check', newDeck.deckOfCards);
    // console.log(dealDeck(newDeck.deckOfCards, new Player('Kevin'), new Player('Jenny')));

  for (let i = 0; i < newDeck.deckOfCards.length; i++) {
    if (i % 2 == 0) {
      // console.log(deck[i]);
      playerTwo.hand.push (newDeck.deckOfCards[i]);
    } else {
      playerOne.hand.push (newDeck.deckOfCards[i]);
      // console.log(deck[i]);
    }
  }
  console.log(playerOne.hand);
  return [playerOne , playerTwo];
  }
}

dealDeck(newDeck.deckOfCards, new Player('Kevin'), new Player('Jenny'));
// console.log(dealDeck(newDeck.deckOfCards, new Player('Kevin'), new Player('Jenny')));
*/

/////////////////// --------------

/*
gamePlay(){
    // let i = 0;
    // console.log(this.game.players[0].hand[0]);
    // console.log(this.game.players[0].hand[0]);
    // console.log(this.players[0].hand[0]);
    let p1Hand = this.players[0].hand;
    let p2Hand = this.players[1].hand;
    let p1Score = this.players[0].score;
    let p2Score = this.players[1].score;
    // let currentScore = '0';
    let roundWinner = "Game hasn't started yet!";

    for(let i = 0; i < this.players[1].hand.length; i++) {
      //identify current cards
      let p1Card = `${p1Hand[i].name} of ${p1Hand[i].suit}`;
      let p2Card = `${p2Hand[i].name} of ${p2Hand[i].suit}`;
      console.log(`${players[0].name}: ${p1Card}  VS  ${players[1].name}: ${p2Card}`);
      // //loop through the decks
      // if(i < 26){
      //   if(p1Hand[i].value === p2Hand[i].value){
      //     roundWinner = 'Tie Round';
      //   } else if(p1Hand[i].value > p2Hand[i].value){
      //     roundWinner = players[0].name;
      //     p1Score ++;
      //   }; /*else ( */
      //     // roundWinner = players[1].name;
      //     // p2Score += 1;
      //   // );
      //   console.log(`Winner of Round: ${roundWinner}`);
      // } else {
      //   if(p1Score < p2Score) {
      //     console.log(players[0].name + 'Wins');
      //   } else {
      //     console.log(players[1].name + 'Wins');
      //   }
      //   // console.log(``)
      //   };
      // //compare card values at index
      // //add 1 point per




      /*
      //test for round in loop => update round winner, winning
      if(this.players[1].hand.[i] > 0){

        if(p1Hand[i].value === p2Hand.value) {
        roundWinner = 'Tie Round';
        if(p1Score === p2Score) {
          currentScore = 'Game is Tied';
        } else if(p1Score > p2Score) {
          currentScore = `${this.players[0].name} is Winning!`;
        } else if(p1Hand[i].value < p2Hand.value) {
          roundWinner = `${this.players[1].name} won round!`
          }
        }

      }
      */

//       console.log(`
//       ${this.players[0].name} won this round!
//       Scores:
//       ${this.players[0].name}: ${p1Score}
//       ${this.players[1].name}: ${p2Score}`);
//     }
// */