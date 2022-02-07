import React from 'react'
import Particles from "react-particles-js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import { SocialIcon } from "react-social-icons";
import scrollIcon from "./../Images/scroll.json";
import Lottie from "react-lottie-player";
import "./MainPage.css";

function MainPage(props) {
    AOS.init();
    return (
        <div id={props.id} className="fullPage">

            <div className="leftText frosted">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(props.typewrite)
                            .start();
                    }}
                />
                {props.subTypewrite}
            </div>

            <div className="rightText frosted">
                <h1>{props.header}</h1>
                <h2>{props.subheader}</h2>
                {props.content}
            </div>


        </div>
    );
}
export default MainPage;
