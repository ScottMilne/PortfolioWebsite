import "./Education.css";
import Timeline from "./myTimeline/myTimeline";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import Typewriter from 'typewriter-effect';

function Education() {
  AOS.init();
  return (
    <div id="educationSection" className="fullpage">
      <div className="topText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Timeline')
              .start();
          }}
        />
      </div>

      <div className="timeline">
        <Timeline />
      </div>
    </div>
  );
}
export default Education;
