import React from "react";
import { StarFill } from "react-bootstrap-icons";

import './styles.scss';

const Match = ({ 
  id, type, primaryText, secondaryText, description, image, starred, onClick
}) => {
  return (
    <div className="match-container" onClick={onClick}>
      <img aria-label="Image" src={image}/>
      <div className="info">
        <h2 aria-label="Name">{primaryText}</h2>
        <h5>{secondaryText}</h5>
        <span>{description}</span>
      </div>
      {starred && <StarFill color="gold"/>}
    </div>
  )
};

export default Match;