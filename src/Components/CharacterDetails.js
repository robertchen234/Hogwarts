import React from "react";

const CharacterDetails = props => {
  const { name, house, role, age, image2 } = props.character;

  return (
    <div className="character-details">
      <h1
        onClick={() => props.handleClick(props.characters)}
        className="pointer"
      >
        {house} 👈{" "}
      </h1>
      <h3>{name}</h3>
      <img src={image2} className="image2" alt="image2" />
      <br />
      <button onClick={() => props.clickHouseHandler(props.character)}>🏠 {house}</button>
      <h4>Role: {role}</h4>
      <h4>Age: {age}</h4>
    </div>
  );
};

export default CharacterDetails;
