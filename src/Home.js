import "./App.css";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/ProjectCard";
import Stars from "./Stars/Stars";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Particles from "react-particles-js";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AnimatedCursor from "react-animated-cursor"
import React from 'react'
import { Link } from 'react-scroll'
import { SocialIcon } from "react-social-icons";
import Lips from './Images/lips.png';
import Boids from "./Images/Boids.png";
import Questie from "./Images/Questie.png";

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

            <Navbar
                item1={[
                    <li className="aboutNav">
                        <h3>
                            <Link activeClass="activeNavItem" to="aboutSection" spy={true} smooth={true} offset={-100}>
                                <i>About</i>
                            </Link>
                        </h3>
                    </li>]}
                item2={[
                    <li className="projectsNav">
                        <h3>
                            <Link activeClass="activeNavItem" to="projectSection" spy={true} smooth={true} offset={-100}>
                                <i>Projects</i>
                            </Link>
                        </h3>
                    </li>]}
            />
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
                                        label="Our portfolio"
                                        bgColor="#2b2b2b"
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
                            subheader='Junior Web Developer'
                            content={
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
                                        tincidunt lorem. Suspendisse malesuada sapien vel aliquam
                                        scelerisque. Orci varius natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Curabitur sit amet nisi massa.
                                        Aenean eleifend velit vel elementum vehicula. Nullam blandit enim id
                                        nisi pulvinar, ac pellentesque mi fringilla. Sed vitae tempor velit.
                                        Morbi vel ligula augue. Suspendisse potenti. Quisque semper metus
                                        tellus, vitae pulvinar libero rutrum a. Integer ac elementum sem,
                                        vel porttitor dolor. Nullam eget tincidunt enim, nec pulvinar quam.
                                        Curabitur nec odio pulvinar, tempor magna vitae, placerat lorem.
                                        Duis neque est, malesuada sed ullamcorper nec, venenatis mattis
                                        felis.
                                    </li>
                                    <li>
                                        Nulla facilisi. Vestibulum molestie est vitae tortor sodales
                                        dapibus. Aliquam erat volutpat. Nullam imperdiet tellus et ante
                                        eleifend aliquam. Nunc in urna volutpat, porta quam et, facilisis
                                        risus.
                                    </li>
                                </ul>}
                        />
                    </FullpageSection>
                    <FullpageSection><MainPage
                        id='projectSection'
                        typewrite='Projects'
                        content={
                            <div className="cards">
                                <ProjectCard id="lipsyncCard" link='/Projects/LipSync' img={Lips} title="LipSync" desc="A web app designed to produce phonetically accurate lip movements from mic
                            input"/>
                                <ProjectCard id="FlockCard" link='/Projects/Flock' img={Boids} title="Flocking With Predators" desc="A flocking algorithm with predators chasing prey"/>
                                <ProjectCard id="QuestieCard" link='/Projects/Questie' img={Questie} title="LipSync" desc="A mobile app that allows users to create and complete quests"/>
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
