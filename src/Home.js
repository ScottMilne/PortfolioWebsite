import "./App.css";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/ProjectCard";
import Stars from "./Stars/Stars";
import Projects from "./Projects/Projects";
import Particles from "react-particles-js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AnimatedCursor from "react-animated-cursor"
import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from "react-social-icons";
import Lips from './Images/lips.png';
import Boids from "./Images/Boids.png";
import Questie from "./Images/Questie.png";
import scrollIcon from "./Images/scroll.json";
import Lottie from "react-lottie-player";

function Home() {

    return (
        <div>
            {
                /*           
                <AnimatedCursor
                innerSize={14}
                outerSize={14}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={4}
                trailingSpeed={1}
                />
                 */
            }



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

                    <FullpageSection><Stars /></FullpageSection>

                    <FullpageSection>
                        <MainPage
                            id="aboutSection"
                            typewrite='About Me'
                            subTypewrite={
                                <div className="socials">
                                    <SocialIcon
                                        className="socialTag"
                                        url="https://github.com/ScottMilne"
                                        bgColor="white"
                                    />
                                    <SocialIcon
                                        className="socialTag"
                                        url="https://www.linkedin.com/in/scott-milne-1215b51ba/"
                                    />
                                    <SocialIcon
                                        className="socialTag"
                                        bgColor="#25D366"
                                        label="Email"
                                        url="mailto:scott.milne6@gmail.com"
                                    />
                                </div>
                            }
                            header='Scott Milne'
                            subheader='Im a Junior Web Developer and recent graduate from Abertay university based in Dunfermline, Scotland.'

                        />
                    </FullpageSection>
                    <div className="arrowContainer" onClick={e => document.getElementById('aboutSection').scrollIntoView()}>
                        <Lottie className="scrollIcon" loop animationData={scrollIcon} play />
                    </div>
                    <FullpageSection><MainPage
                        id='projectSection'
                        typewrite='Projects'
                        content={
                            <div className="cards">
                                <ProjectCard id="lipsyncCard" link='/Projects/LipSync' img={Lips} title="TurboSync" desc="A web app designed to produce phonetically accurate lip movements from mic
                            input"/>
                                <ProjectCard id="FlockCard" link='/Projects/Flock' img={Boids} title="Flocking With Predators" desc="A flocking algorithm with predators chasing prey" />
                                <ProjectCard id="QuestieCard" link='/Projects/Questie' img={Questie} title="Questie" desc="A mobile app that allows users to create and complete quests" />
                            </div>
                        }
                    />
                    </FullpageSection>

                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default Home;
