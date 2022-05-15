import React from "react";
import classes from "./Cards.module.css";

const Cards = (props) => {
  const cardValue = {
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: "J",
    12: "Q",
    13: "K",
    14: "A",
    15: "2",
  };

  return (
    <div className={`${classes.card} ${props.class}`}>
      <div className={classes.topCorner}>
        <span className={classes[props.suit]}>{cardValue[props.value]}</span>
        <span className={classes[props.suit]}>{props.suit}</span>
      </div>
      <div className={classes.center}></div>
      <div className={classes.botCorner}>
        <span className={classes[props.suit]}>{props.value}</span>
        <span className={classes[props.suit]}>{props.suit}</span>
      </div>
    </div>
  );
};

export default Cards;
