import React, { useState } from "react";
import classes from "./HowToPlay.module.css";

const HowToPlay = () => {
  const [instructions, setInstructions] = useState(false);

  const instructionsHandler = () => {
    setInstructions((prevState) => !prevState);
  };

  return (
    <>
      <button className={classes.button} onClick={instructionsHandler}>
        How To Play
      </button>
      {instructions && (
        <div className={classes.modal}>
          <button className={classes.close} onClick={instructionsHandler}>
            X
          </button>
          <div className={classes.steps}>
            <ol className={classes.list}>
              <h2>HOW TO PLAY</h2>
              <li>
                Start the first hand with a legal combination if you have the 3
                of spades.
              </li>
              <li>
                Take turns clockwise trying to beat the previous combination.
              </li>
              <li>
                Pass if you can't beat the combination or if you don't want to
                play.
              </li>
              <li>
                Continue playing until no one can beat the combination on the
                table.
              </li>
            </ol>
            <ul>
              <h2>COMBINATIONS</h2>
              <li>Solo</li>
              <li>Doubles</li>
              <li>Triples</li>
              <li>TriplesQuads</li>
              <li>Runs</li>
              <li>Double Runs</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToPlay;
