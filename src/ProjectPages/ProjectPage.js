import './ProjectPage.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import Particles from "react-particles-js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

function ProjectPage(props) {


    return (

        <div className="projectPage">
            <Navbar
                item1={[
                    <li className="aboutNav">
                        <h3>
                            <a href="/">
                                <i>Home</i>
                            </a>
                        </h3>
                    </li>]} />

            <div className="particles">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 500,
                            },
                            color: {
                                value: "#fff",
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000",
                                },
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                width: 100,
                                height: 100,
                            },
                            move: {
                                enable: false,
                            },
                            opacity: {
                                value: 1,
                                random: false,
                                anim: {
                                    enable: true,
                                    speed: 0.2,
                                    opacity_min: 0,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 2,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 2,
                                    size_min: 0,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: false,
                            },
                        },
                    }}
                />
            </div>

            <Fullpage>
                <FullPageSections>
                    <FullpageSection>
                        <div className="projectDesc frosted">
                            <h1 className="projectTitle">{props.title}</h1>
                            <img className="img1" src={props.img1} />
                            <p>{props.content1}</p>
                            <div>Scroll for more ↓</div>
                        </div>
                    </FullpageSection >
                    <FullpageSection>
                        <div className="projectDesc2 frosted">
                            <img className="img2" src={props.img2} />
                            <p>When the app takes in the users voice it creates a transcript and then saves both the transcript and the audio. Both files are then passed to the rhubarb command line tool which spits out a json file containing the needed lip timings. When the user presses the play button the timings are looped through.
                                
                            </p>
                        </div>
                    </FullpageSection >
                </FullPageSections>
            </Fullpage>

        </div>
    );
}
export default ProjectPage;
