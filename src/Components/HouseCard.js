import React from "react";

const HouseCard = props => {
  return (
    <li className="house-card">
      <h1>{props.house}</h1>
      <img
        src={props.character.image2}
        className="image2 pointer"
        alt="image2"
        onClick={() => props.handleClick(props.character)}
      />
    </li>
  );
};

export default HouseCard;
