import ProjectPage from "./ProjectPage";
import React from 'react'
import img1 from "../Images/Boids.gif";

function Flock() {
    return (
        <div>
            <ProjectPage
                title="Prey/Predator Flocking"
                img1={img1}
                content1={[
                    "Content 1"
                ]}
                content2="Content 2"
                builtWith={[
                    <li>- Processing</li>]}
                github="https://github.com/ScottMilne/FlockWithPred"
            /></div>
    );
}
export default Flock;
