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
      <h4>Role: {role}</h4>
      <h4>Age: {age}</h4>
      <br />
      <figure className="image2">
        <img className="image2" src={image2} alt="image2" />
      </figure>
      <br />
      <button onClick={() => props.clickHouseHandler(props.character)}>
        🏠 {house}
      </button>
    </div>
  );
};

export default CharacterDetails;
