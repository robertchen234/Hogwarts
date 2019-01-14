import React from "react";

const HouseCard = props => {
  return (
    <li className="house-card">
      <h1 className={
            props.house === "Gryffindor"
              ? "gryffindor"
              : (props.house === "Slytherin"
              ? "slytherin"
              : (props.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"))
          }>{props.house}</h1>
      <figure className="image2">
        <img
          src={props.character.image2}
          className="image2 pointer"
          alt="image2"
          onClick={() => props.handleClick(props.character)}
        />
      </figure>
    </li>
  );
};

export default HouseCard;
