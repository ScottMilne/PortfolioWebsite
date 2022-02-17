import './ProjectPage.css';

import React from 'react'
import Particles from "react-particles-js";


function ProjectPage(props) {


    return (

        <div className="projectPage">
            <div class="link fixed frosted"><h2><a href='../'>←</a></h2></div>

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
                <p >
                    {props.content2}
                    <img className="img2" src={props.img2} />
                </p>
                <p className="builtWith">
                    <h2>Built With</h2>
                    <ul>
                        {props.builtWith}

                    </ul>

                </p>

                <div class="link border"><a href={props.github}>Github Link</a></div>


            </div>


        </div>
    );
}
export default ProjectPage;
