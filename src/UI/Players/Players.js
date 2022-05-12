import React from "react";
import classes from "./Players.module.css";
import Cards from "../Cards/Cards";

const Players = (props) => {

  return <Cards value={props.value} suit={props.suit}></Cards>;
};

export default Players;
