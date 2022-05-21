import "./Stars.css";
import Lottie from "react-lottie-player";
import Moon from "./../Images/moon.svg";
import scrollIcon from "./../Images/scroll.json";
import Typewriter from 'typewriter-effect';
import React from "react";
import DownArrow from "../Components/DownArrow";

function Stars() {
  return (
    <div id="stars">

      <div className="introText">
        <Typewriter

          options={{
            strings: ['Hello! ✌︎', 'Welcome to my Portfolio', "I'm Scott Milne"],
            autoStart: true,
            loop: true,

          }}
        />
      </div>

      <img className="moonImg" src={Moon} alt=""></img>

      <DownArrow name="DownSolo" />

    </div>
  );
}
export default Stars;
