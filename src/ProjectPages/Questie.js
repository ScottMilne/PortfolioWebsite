import ProjectPage from "./ProjectPage";
import React from 'react'

function Questie() {
    return (
        <div>
            <div
                className="FlockHead"
                style
                ={{
                height: '100vh',
                background: "linear-gradient(#44A08D 0% , #093637 100%)"
            }}></div>
            <ProjectPage
                headerImage="../Imgs/placeholder.jpg"
                secondImage="../Imgs/placeholder.jpg"
                introBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna eros, veh
  icula porta turpis ac, tempor fringilla mauris. Vestibulum eget consequat purus,
   at molestie metus. Donec vel purus id sem fringilla facilisis. Donec ornare era
  t et est venenatis molestie. Maecenas ultricies augue eu lacinia iaculis."
                techUsed={['Java', 'Android Studio']}
                sourceCodeLink="https://github.com/ScottMilne/QuestApp"/></div>
    );
}
export default Questie;
