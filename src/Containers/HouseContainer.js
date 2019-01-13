import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    return (
      <div className="houseContainer">
        <div className="list">
          {this.props.houses.map(house => (
            <House
              key={house}
              house={house}
              characters={this.props.characters}
              clickHouseHandler={this.props.clickHouseHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
