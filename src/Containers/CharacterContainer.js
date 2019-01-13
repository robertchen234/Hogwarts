import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    return (
      <div className="character-container">
        <h1>Wizards</h1>
        <ul className="list">
          {this.props.characters.map(character => (
            <CharacterCard
              key={character.name}
              character={character}
              clickHouseHandler={this.props.clickHouseHandler}
            />
          ))}
        </ul>
      </div>
    );
  }
}
