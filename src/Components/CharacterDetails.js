import React from "react";

const CharacterDetails = props => {

  return (
    <div className="character-details">
      <h1
        onClick={() => props.handleClick(props.characters)}
        className={
          props.character.house === "Gryffindor"
            ? "gryffindor"
            : (props.character.house === "Slytherin"
            ? "slytherin"
            : (props.character.house === "HufflePuff"
            ? "hufflepuff"
            : "ravenclaw"))
        + " pointer"}
      >
        {props.character.house} 👈{" "}
      </h1>
      <h3 className={
          props.character.house === "Gryffindor"
            ? "gryffindor"
            : (props.character.house === "Slytherin"
            ? "slytherin"
            : (props.character.house === "HufflePuff"
            ? "hufflepuff"
            : "ravenclaw"))}>{props.character.name}</h3>
      <h4>Role: {props.character.role}</h4>
      <h4>Age: {props.character.age}</h4>
      <br />
      <figure className="image2">
        <img className="image2" src={props.character.image2} alt="image2" />
      </figure>
      <br />
      <button className={
          props.character.house === "Gryffindor"
            ? "gryffindor"
            : (props.character.house === "Slytherin"
            ? "slytherin"
            : (props.character.house === "HufflePuff"
            ? "hufflepuff"
            : "ravenclaw"))} onClick={() => props.clickHouseHandler(props.character)}>
        🏠 {props.character.house}
      </button>
    </div>
  );
};

export default CharacterDetails;
