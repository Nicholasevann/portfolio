import React from "react";
import './YoutubeComponent.css';
const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img  src={props.urlImage} alt=''/>

      
      </div>
      <p>{props.thumb}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default YoutubeComp;
