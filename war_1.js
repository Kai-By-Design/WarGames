//Goal: Create a card game, War.
// 1. Create a 52 card Deck
// 2. Shuffle, then Divide 52 card Deck evenly into two player's 26 card hands.
// 3. Play the top card of each player's hand.
// 4. Score 1 point to the player that wins the flip with the highest score


// class Card will create a card with 3 attributes:
// 1. suit (club, heart, diamond, spade),
// 2. character (numbers 2-10, J, Q, K, A)
// 3. value (Numbers 2-14)
// https://www.youtube.com/watch?v=h3ehO5QMNu4


/*
Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
Deal 26 Cards to two Players from a Deck.
Iterate through the turns where each Player plays a Card
The Player who played the higher card is awarded a point
Ties result in zero points for either Player
After all cards have been played, display the score.
Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

class Player {
  constructor (name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

}

class Card {
  constructor (suit, name, value){
    this.suit = suit;
    this.name = name;
    this.value = value;
  }
}

// class Deck will create a new collection of Cards
class Deck {
  constructor () {
    this.deckOfCards = [];
  }
  // createDeck will generate a 52 card deck
  createDeck() {
    // input card parameters
    let inputSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let inputNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    let inputValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (let i = 0; i < inputSuits.length; i++) {
      for (let j = 0; j < inputNames.length; j++){
        this.deckOfCards.push(new Card(inputSuits[i], inputNames[j], inputValues[j]));
      }
    }
    return this.deckOfCards;
    // for (let suit of inputSuits) {
    //   for (let value of diffCardValues) {
    //     this.deckOfCards.push(new Card(inputSuits, inputValues));
    //   }
    // }
    // console.log('testing', this.deck);
  }
  // console.log(this.deck);
  // shuffles 52 card deck - input new deck, output shuffled deck
  /////////////////
  // shuffleDeck() {
  //   let counter = this.deckOfCards.length, temp, i;

  //   while(counter) {
  //     i = Math.floor(Math.random() * counter--);
  //     temp = this.deck[counter];
  //     this.deckOfCards[counter] = this.deckOfCards[i];
  //     this.deckOfCards[i] = temp;
  //   }
  //   return this.deckOfCards;
  // }
  /////////////////

}
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
// Deals

// class GamePLay () {


// }
// console.log('double check', newDeck);

// console.log(gameOn);


/*
let inputSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// let inputNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let inputValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let newDeck = new Deck();
deck.createDeck(inputSuits, inputValues);
// console.log(deck);
// console.log(deck.createDeck(inputSuits, inputValues));
// console.log(deck.dealDeck());
// console.log(deck.shuffleDeck());
deck.shuffleDeck();
// console.log(deck.dealDeck());
let gameOn = dealDeck(deck, 'Kevin', 'Jenny');
console.log(gameOn);

// const card1 = new Card('club', '2',  2);
// console.log(card1);
// let show = card1.displayValue ();
// console.log(show);
*/

/*
// class ShuffleDeck will take in Deck and output a randomized deck
class ShuffleDeck () {

}


class GameAttributes () {
  constructor {
    this.playerCount = playerCount;
  }
}

class Hand () {

}


////



  // playRound (playerOneDeck, PlayerTwoDeck) {

  // }




  // dealDeck (deck) {
  //   let hand = [];
  //   while (hand.length < 26) {
  //     hand.push(this.deck.pop());
  //   }
  //   return hand;

  // }


  // dealDeck (deck) {
  //   let hand = [];
  //   while (hand.length < 26) {
  //     hand.push(this.deck.pop());
  //   }
  //   return hand;

  // }
*/



/*


class Player {
  constructor (name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

}

class Card {
  constructor (suit, value){
    this.suit = suit;
    // this.character = character;
    this.value = value;
  }

}

// class Deck will create a new collection of Cards
class Deck {
  constructor () {
    this.deck = [];
  }
  // createDeck will generate a 52 card deck
  createDeck(diffSuits, diffCardValues) {
    for (let suit of diffSuits) {
      for (let value of diffCardValues) {
        this.deck.push(new Card(suit, value));
      }
    }
    // console.log('testing', this.deck);
    return this.deck;
  }
  // console.log(this.deck);
  // shuffles 52 card deck - input new deck, output shuffled deck
  shuffleDeck () {
    let counter = this.deck.length, temp, i;

    while(counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

}

let inputSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// let inputNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let inputValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let newDeck = new Deck();
// console.log(newDeck);
newDeck.createDeck(inputSuits, inputValues);
newDeck.shuffleDeck();
// console.log('check', newDeck);


// console.log(deck.dealDeck());
// console.log(deck);
// console.log(deck.createDeck(inputSuits, inputValues));
// console.log(deck.dealDeck());
// console.log(deck.shuffleDeck());


function dealDeck (deck, playerOne, playerTwo) {
  // playercheck = playerTwo.hand;
  // playerTwo.hand = [];
  // deck = newDeck;
  console.log('test', deck.length);
  // deck.shuffleDeck();
  console.log(deck[0]);
  for (let i = 0; i < deck.length; i++) {
    if (i % 2 == 0) {
      console.log(deck[i]);
      playerTwo.hand.push (deck[i]);
    } else {
      playerOne.hand.push (deck[i]);
      console.log(deck[i]);
    }
  }
  console.log(playerOne.hand);

  // console.log('test 3', playerTwo.hand.length);
  // console.log(this.deck[0]);
  // console.log(`PlayerOne: ${playerOne} `);
  // console.log(playerOne);
  // let output = `PlayerOne: ${playerOne}   -    -   PlayerTwo:  ${ playerTwo}`;
  // let output = [playerOne, playerTwo];
  // console.log(output);
  // console.log('test 2:', playerTwo);
  return [playerOne , playerTwo];
  // let hand = [[],[]];
  // if (hand[0].length < 26) {
  //   hand[0].push(this.deck.pop());
  // }
  // return hand;

}
// console.log('double check', newDeck);
console.log(dealDeck(newDeck, new Player('Kevin'), new Player('Jenny')));
// console.log(gameOn);
*/