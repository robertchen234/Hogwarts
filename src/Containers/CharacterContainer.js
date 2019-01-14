import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    return (
      <div className="character-container">
        <div className="page page-laser-to-text">
          <input
            id="input"
            type="text"
            maxLength="24"
          />
          <canvas id="canvas" />
        </div>
        <ul className="list">
          {this.props.characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              clickHouseHandler={this.props.clickHouseHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
}
