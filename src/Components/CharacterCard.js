import React from "react";

class CharacterCard extends React.Component {
  state = {
    isClick: false
  };

  isClick = () => {
    this.setState({ isClick: !this.state.isClick });
  };

  render() {
    return (
      <li className="character-card">
        <h3
          className={
            this.props.character.house === "Gryffindor"
              ? "gryffindor"
              : this.props.character.house === "Slytherin"
              ? "slytherin"
              : this.props.character.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"
          }
        >
          {this.props.character.name}
        </h3>

        {this.state.isClick ? (
          <div onClick={this.isClick} className="character-div pointer">
            <h4>Role: {this.props.character.role}</h4>
            <h4>Age: {this.props.character.age}</h4>
          </div>
        ) : (
          <figure>
            <img className="pointer"
              onClick={this.isClick}
              src={this.props.character.image1}
              alt="image1"
            />
          </figure>
        )}

        <br />
        <button
          className={
            this.props.character.house === "Gryffindor"
              ? "gryffindor"
              : this.props.character.house === "Slytherin"
              ? "slytherin"
              : this.props.character.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"
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
