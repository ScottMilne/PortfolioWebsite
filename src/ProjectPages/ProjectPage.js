import './ProjectPage.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import Particles from "react-particles-js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import Typewriter from 'typewriter-effect';

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

            <div className="projectDesc frosted">
                <h1 className="projectTitle">{props.title}</h1>

                <div className="row">
                    <img className="img1 column" src={props.img1} />
                    <p className="column">
                        <h2>About Project</h2>
                        {props.content1}</p>
                </div>
                <p >{props.content2}</p>
                <p>
                    <h2>Built With</h2>
                    <ul>
                        {props.builtWith}

                    </ul>
                    <a href='https://github.com/ScottMilne/TurboSync'>Github Repo</a>
                </p>


            </div>


        </div>
    );
}
export default ProjectPage;
