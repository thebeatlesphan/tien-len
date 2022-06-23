import React, { useState } from "react";
import classes from "./Table.module.css";
import Players from "../Players/Players";
import Start from "../StartButton/Start";
import Yay from "../StartButton/Yay";

// initialize deck
const suits = ["hearts", "clubs", "spades", "diamonds"];
const values = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const deck = [];
for (const suit of suits) {
  for (const value of values) {
    deck.push([value, suit]);
  }
}

// sort cards by low to high ranking
let suitRanking = {
  spades: 0,
  clubs: 1,
  diamonds: 2,
  hearts: 3,
};

const sortValues = (array) => {
  return array.sort((a, b) => a[0] - b[0]);
};

const sortSuits = (array) => {
  return array.sort((a, b) => {
    if (a[0] === b[0]) {
      return suitRanking[a[1]] - suitRanking[b[1]];
    } else return 0;
  });
};

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

// algorithm for dealing to all four players
const pullCard = (deck) => {
  return deck.shift();
};
const dealCards = (deck) => {
  let copyDeck = [...deck];
  let copyPlayers = {
    player1: hand,
    player2: hand,
    player3: hand,
    player4: hand,
  };

  while (copyDeck.length > 0) {
    let x = pullCard(copyDeck);
    copyPlayers["player1"] = [...copyPlayers["player1"], x];
    let t = pullCard(copyDeck);
    copyPlayers["player2"] = [...copyPlayers["player2"], t];
    let y = pullCard(copyDeck);
    copyPlayers["player3"] = [...copyPlayers["player3"], y];
    let z = pullCard(copyDeck);
    copyPlayers["player4"] = [...copyPlayers["player4"], z];
  }

  copyPlayers = {
    player1: sortSuits(sortValues(copyPlayers["player1"])),
    player2: sortSuits(sortValues(copyPlayers["player2"])),
    player3: sortSuits(sortValues(copyPlayers["player3"])),
    player4: sortSuits(sortValues(copyPlayers["player4"])),
  };
  return copyPlayers;
};

const DEFAULT_STATE = {
  deck: [],
  players: {
    player1: [],
    player2: [],
    player3: [],
    player4: [],
  },
  gamestate: false,
};

const Table = () => {
  const [game, setGame] = useState(DEFAULT_STATE);
  const [gameState, setGameState] = useState(false);

  const gameHandler = () => {
    const tempDeck = shuffleDeck(deck);

    setGame({
      deck: tempDeck,
      players: dealCards(tempDeck),
      gamestate: true,
    });
  };
  console.log(game);

  return (
    <>
      <div className={classes.table}>
        {!game["gamestate"] && <Start onClick={gameHandler} />}
        {game["gamestate"] && <Yay />}
        <div className={classes.playerSeat}>
          {game["gamestate"] && game["players"]["player1"] && (
            <Players hand={game["players"]["player1"]} />
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
