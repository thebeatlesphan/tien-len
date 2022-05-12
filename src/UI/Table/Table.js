import React, { useState } from "react";
import classes from "./Table.module.css";
import Cards from "../Cards/Cards";
import Players from "../Players/Players";

// initialize deck
const suits = ["spades", "clubs", "diamonds", "hearts"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const deck = [];
for (const suit of suits) {
  for (const value of values) {
    deck.push([value, suit]);
  }
}

// algorithm for shuffling deck
const shuffleDeck = (deck) => {
  let copyDeck = [...deck]; // very important to spread
  for (let i = 0; i < deck.length; i++) {
    let temp = copyDeck[i];
    let randomPosition = Math.floor(Math.random() * 52);
    let randomCard = copyDeck[randomPosition];
    copyDeck[i] = randomCard;
    copyDeck[randomPosition] = temp;
  }
  return copyDeck;
};

// four players object
let hand = [];
let players = {
  player1: hand,
  player2: hand,
  player3: hand,
  player4: hand,
};

const Table = () => {
  const [currentDeck, newDeck] = useState(deck);
  const [currentPlayers, updatePlayers] = useState(players);

  const shuffleCardsHandler = () => {
    newDeck((prevDeck) => shuffleDeck(prevDeck));
  };

  const dealDeckHandler = () => {
    let copyDeck = currentDeck;
    let copyPlayers = currentPlayers;

    while (copyDeck.length > 0) {
      for (let hand in copyPlayers) {
        let dealing = copyDeck.shift();
        copyPlayers[hand].push(dealing);
      }
    }
    console.log(copyPlayers);
    console.log("done dealing...");
  };

  return (
    <>
      <div className={classes.table}>
        <button className={classes.shuffle} onClick={shuffleCardsHandler}>
          shuffle
        </button>
        <button className={classes.deal} onClick={dealDeckHandler}>
          deal
        </button>
      </div>
      {currentDeck.map((x) => (
        <Cards value={x[0]} suit={x[1]} key={x[0] + x[1]}></Cards>
      ))}
    </>
  );
};

export default Table;
