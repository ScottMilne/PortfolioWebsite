import React from 'react'

function ProjectCard(props) {
    return (
        <div
            className="card"
            onClick={() => {
                window.location = props.link;
            }}>
            <div className="imageOverlap">
                <img src={props.img} className="cardImage" alt="" />
                <div className="card__overlay">
                    <div className="overlay__text">
                        <h3>{props.title}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;
