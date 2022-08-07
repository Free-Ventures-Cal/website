import React from "react";
import "./../styles/App.css";
import "./../styles/Fellowship.css";

function Speaker(props) {
  let descriptionText =
    props.position || props.company ? (
      <h3>
        {props.position} @ {props.company}
      </h3>
    ) : (
      ""
    );

  return (
    <div class="speaker-card-wrapper">
      <div class="speaker-card">
        <div class="speaker-card-header">
          <img src={props.image} alt="" />
          <div class="speaker-card-description">
            <h2>{props.name}</h2>
            {descriptionText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
