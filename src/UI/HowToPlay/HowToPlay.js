import React, { useState } from "react";
import classes from "./HowToPlay.module.css";

const HowToPlay = () => {
  const [instructions, setInstructions] = useState(false);
  return (
    <>
      <button className={classes.button}>How To Play</button>
      {!instructions}

      {/* <div className={classes.modal}>

      </div> */}
    </>
  );
};

export default HowToPlay;
