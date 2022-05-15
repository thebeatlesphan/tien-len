import React from "react";
import classes from "./Players.module.css";
import Cards from "../Cards/Cards";

const Players = (props) => {
  //currentPlayers["player1"] as props which is an array of arrays
  return (
    <div className={classes.player}>
      {props.hand.length > 0 &&
        props.hand.map((x) => (
          <Cards class={classes.poop} value={x[0]} suit={x[1]} key={x[0] + x[1]}></Cards>
        ))}
    </div>
  );
};

export default Players;
