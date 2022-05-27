import "./App.css";
import MainPage from "./Components/MainPage";
import ProjectCard from "./Components/ProjectCard";
import Stars from "./Stars/Stars";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import React from 'react'
import { SocialIcon } from "react-social-icons";
import Lips from './Images/lips.png';
import Boids from "./Images/Boids.png";
import Particles from "./Components/Particles";
import Questie from "./Images/Questie.png";
import DownArrow from "./Components/DownArrow";
import UpArrow from "./Components/UpArrow";

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
                <Particles />

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
                            subheader='Im a Junior Web Developer and recent graduate from Abertay university based in Dundee, Scotland.' 
                            foot={<DownArrow/>}
                            head={<UpArrow/>}
                        />

                        
                    </FullpageSection>
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
                        head={<UpArrow/>}
                    />
                    </FullpageSection>

                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default Home;
