import React from "react";

class CharacterCard extends React.Component {
  render() {
    const { name, house, image1 } = this.props.character;
    const { clickHouseHandler } = this.props;
    return (
      <li className="character-card">
        <h3>{name}</h3>
        <img src={image1} className="image1" alt="image1" />
        <br />
        <button onClick={() => clickHouseHandler(this.props.character)}>
          🏠 {house}
        </button>
      </li>
    );
  }
}

export default CharacterCard;
