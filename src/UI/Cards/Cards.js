import React from "react";
import classes from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.topCorner}>
        <span className={classes[props.suit]}>{props.value}</span>
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
