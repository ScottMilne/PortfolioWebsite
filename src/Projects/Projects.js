import "./Projects.css";
import Lips from "./../Images/lips.png";
import Boids from "./../Images/Boids.png";
import Knight from "./../Images/Questie.png";
import React from "react";
import AOS from "aos";
import Typewriter from 'typewriter-effect';
import "aos/dist/aos.css";

function Projects() {
    AOS.init();

    return (
        <div id="projectsSection" className="fullpage">
            <div className="leftText">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Projects')
                            .start();
                    }}
                />
            </div>

            <div className="projects frosted">
                <div
                    className="card"
                    onClick={() => {
                        window.location = '/Projects/LipSync';
                    }}>
                    <div className="imageOverlap">
                        <img src={Lips} className="cardImage" alt="" />
                        <div className="card__overlay">
                            <div className="overlay__text">
                                <h3>Lip Sync</h3>
                                <p>
                                    A web app designed to produce phonetically accurate lip movements from mic
                                    input.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => {
                        window.location = '/Projects/Flock';
                    }}>
                    <img src={Boids} className="cardImage" alt="" />
                    <div className="card__overlay">
                        <div className="overlay__text">
                            <h3>Flocking with predators</h3>
                            <p>A flocking algorithm with predators chasing prey.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="card"
                    onClick={() => {
                        window.location = '/Projects/Questie';
                    }}>
                    <img src={Knight} className="cardImage" alt="" />
                    <div className="card__overlay">
                        <div className="overlay__text">
                            <h3>Questie</h3>
                            <p>
                                A mobile app that allows users to create and complete quests
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;
