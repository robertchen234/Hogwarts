import React, { Component } from "react";
import HouseCard from "./HouseCard";
import CharacterDetails from "./CharacterDetails";

class House extends Component {
  state = {
    characters: this.props.characters,
    character: [],
    isHouse: true
  };

  // componentDidUpdate(prevP, prevS) {
  //   if(prevS.characters !== this.state.characters) {
  //     let houseCharacters = this.props.characters.filter(character => {
  //       return character.house === this.props.house;
  //     });

  //     this.setState({
  //       characters: houseCharacters
  //     });
  //   }
  // }

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
            <h1
              className={
                this.props.house === "Gryffindor"
                  ? "gryffindor"
                  : this.props.house === "Slytherin"
                  ? "slytherin"
                  : this.props.house === "HufflePuff"
                  ? "hufflepuff"
                  : "ravenclaw"
              }
            >
              {this.props.house}
            </h1>
            <ul className="list">
              {this.props.characters.map(character => {
                return (
                  <HouseCard
                    key={character.id}
                    character={character}
                    handleClick={this.handleClick}
                  />
                );
              })}
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
