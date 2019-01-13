import React, { Component } from "react";
import HouseCard from "./HouseCard";
import CharacterDetails from "./CharacterDetails";

class House extends Component {
  state = {
    characters: [],
    character: [],
    isHouse: true
  };

  componentDidMount() {
    let houseCharacters = this.props.characters.filter(character => {
      return character.house.toLowerCase() === this.props.house.toLowerCase();
    });

    this.setState({
      characters: houseCharacters
    });
  }

  handleClick = character => {
    this.setState({
      character: character,
      isHouse: !this.state.isHouse
    });
  };

  render() {
    return (
      <div className="house">
        {this.state.isHouse ? (
          <div>
            <h1>{this.props.house}</h1>
            <ul className="list">
              {this.state.characters.map(character => (
                <HouseCard
                  key={character.name}
                  character={character}
                  handleClick={this.handleClick}
                />
              ))}
            </ul>
          </div>
        ) : (
          <CharacterDetails
            key={this.state.characters.name}
            characters={this.state.characters}
            character={this.state.character}
            handleClick={this.handleClick}
            clickHouseHandler={this.props.clickHouseHandler}
          />
        )}
      </div>
    );
  }
}

export default House;
