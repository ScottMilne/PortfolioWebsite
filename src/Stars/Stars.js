import "./Stars.css";
import Lottie from "react-lottie-player";
import Moon from "./../Images/moon.svg";
import scrollIcon from "./../Images/scroll.json";
import Typewriter from 'typewriter-effect';
import React from "react";

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

      <div className="spaceman">
        {/*
        <Lottie className="spaceShip" loop animationData={Ship} play />
        */}
      </div>

      <div className="landingTitle">
        <img className="moonImg" src={Moon} alt=""></img>
      </div>

      <div className="starArrowContainer" onClick={e => document.getElementById('aboutSection').scrollIntoView()}>
        <Lottie className="scrollIcon" loop animationData={scrollIcon} play />
      </div>
    </div>
  );
}
export default Stars;
