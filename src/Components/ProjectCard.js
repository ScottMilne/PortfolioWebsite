import React from 'react'

function ProjectCard(props) {
    return (
        <div
            className="card"
            onClick={() => {
                window.location = props.link;
            }}>
            <figure className="card">
                <img src={props.img} alt="img13" />
                <figcaption>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </figcaption>
            </figure>
        </div >
    );
}
export default ProjectCard;
