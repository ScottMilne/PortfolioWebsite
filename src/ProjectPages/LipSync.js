import ProjectPage from "./ProjectPage";
import React from 'react'
import img1 from "../Images/TurboHead.png";
import img2 from "../Images/TurboDemo.gif";

function LipSync() {
    return (
        <div>
            <ProjectPage
                title="TurboSync"
                img1={img1}
                img2={img2}
                content1={[
                    "TurboSync is a lip-syncing application I developed while at university with a group of other students.",
                    <br />,
                    "The aim of the project was to develop a prototype application to help the deaf community during covid, the project aims were laid out in a brief given to us by the university. The need for masks has greatly impacted the deaf community as many people hard of hearing use lip reading to get by. TurboSync provides a concept for how this issue might be resolved."
                ]}
                content2="The app works by taking in the user's recording, processes it through the Rhubarb software, collects the data from Rhubarb, and then displays a phonetically accurate animation of lips moving."
                builtWith={[
                    <li>- Rhubarb</li>,
                    <li>- PHP</li>,
                    <li>- JavaScript</li>]}
                github="https://github.com/ScottMilne/TurboSync"
            /></div>

    );
}
export default LipSync;
