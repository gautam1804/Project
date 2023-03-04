import React from "react";

const Team = (props) => {

    return (

        <div className="card">

            <div className="imgBox">
                <img className="imgB" src={props.img} alt={props.alt}  />
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>

            </div>
        </div>

    );

}

export default Team;