import React from "react";
import HowToPlay from "../HowToPlay/HowToPlay";
import classes from "./Start.module.css";

const start = (props) => {
  return (
    <>
      <h1 className={classes.title}>TIEN LEN</h1>
      <button className={`${classes.start}`} onClick={props.onClick}>
        START
      </button>
      <HowToPlay ></HowToPlay>
    </>
  );
};

export default start;
