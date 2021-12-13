import ProjectPage from "./ProjectPage";
import React from 'react'
import img1 from "../Images/TurboHead.png";
import img2 from "../Images/TurboDemo.gif";

function LipSync() {
    return (
        <div>
            <ProjectPage
                title="TurboSync"
                img1 = {img1}
                img2 = {img2}
                content1="TurboSync is a lip-syncing application I developed while at university with a group of other students. The app takes in the users recording, processes it and then gives back a phonetically accurate animation."/></div>
    );
}
export default LipSync;
