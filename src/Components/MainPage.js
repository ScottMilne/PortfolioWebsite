import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import "./MainPage.css";
import DownArrow from './DownArrow';

function MainPage(props) {
    AOS.init();
    return (
        <div id={props.id} className="fullPage">
            {props.head}
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

            {props.foot}
        </div>
    );
}
export default MainPage;
