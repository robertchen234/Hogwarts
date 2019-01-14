import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  // componentDidUpdate(house) {
  //   return this.props.characters.filter(character => {
  //     console.log("character:", character, "house:", house);
  //     return character.house === house;
  //   });
  // };

  // componentDidUpdate() {

  //   console.log("housecontainer", this.props.characters)
  // }

  render() {

    return (
      <div className="houseContainer">
        <div className="list">
          {this.props.houses.map(house => {
            let filteredHouseCharacters = this.props.characters.filter(
              character => {
                return character.house === house;
              }
            );
            return (
              
              <House
                key={house}
                house={house}
                clickHouseHandler={this.props.clickHouseHandler}
                characters={filteredHouseCharacters}
              />
            );
          })
          
          }
        </div>
      </div>
    );
  }
}
