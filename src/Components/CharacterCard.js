import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <li className="character-card">
        <h3
          className={
            this.props.character.house === "Gryffindor"
              ? "gryffindor"
              : (this.props.character.house === "Slytherin"
              ? "slytherin"
              : (this.props.character.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"))
          }
        >
          {this.props.character.name}
        </h3>
        <figure>
          <img src={this.props.character.image1} alt="image1" />
        </figure>

        <br />
        <button className={
            this.props.character.house === "Gryffindor"
              ? "gryffindor"
              : (this.props.character.house === "Slytherin"
              ? "slytherin"
              : (this.props.character.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"))
          }
          onClick={() => this.props.clickHouseHandler(this.props.character)}
        >
          🏠 {this.props.character.house}
        </button>
      </li>
    );
  }
}

export default CharacterCard;
