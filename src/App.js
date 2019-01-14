import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
import UpdateForm from "./Components/UpdateForm";
import HouseContainer from "./Containers/HouseContainer";
import CreateForm from "./Components/CreateForm";
import SearchForm from "./Components/SearchForm";

class App extends Component {
  state = {
    characters: [],
    houses: [],

    showForm: false,
    wizard: {},

    searchTerm: "",
    filteredCharacters: [],

    wizardUpdate: {}
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then(res => res.json())
      .then(data =>
        this.setState({
          characters: data,
          filteredCharacters: data
        })
      );

    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => this.setState({ houses: data }));
  }

  clickHouseHandler = wizard => {
    this.setState({
      showForm: !this.state.showForm,
      wizard: wizard
    });
  };

  changeSearchHandler = event => {
    let search = event.target.value;

    let searchCharacters = [...this.state.characters].filter(
      character =>
        character.name.toLowerCase().includes(search.toLowerCase()) ||
        character.house.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
      searchTerm: event.target.value,
      filteredCharacters: searchCharacters
    });
  };

  submitCreateHandler = wizard => {
    let newCharacters = [...this.state.characters, wizard];

    fetch("http://localhost:3001/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(wizard)
    }).then(
      this.setState({
        characters: newCharacters,
        filteredCharacters: newCharacters
      })
    );
  };

  submitUpdateHandler = wizard => {
    // let wizardArray = [wizard];
    // let editedCharacters = [...this.state.characters].map(
    //   character =>
    //     wizardArray.find(wizard => wizard.name === character.name) || character
    // );

    let editedCharacters = [...this.state.characters].map(character => {
      return character.id === wizard.id ? wizard : character;
    });
    this.setState({
      showForm: !this.state.showForm,
      characters: editedCharacters,
      filteredCharacters: editedCharacters,
      wizardUpdate: wizard
    });
  };

  componentDidUpdate(prevP, prevS) {
    if (prevS.wizardUpdate !== this.state.wizardUpdate) {
      fetch(`http://localhost:3001/characters/${this.state.wizardUpdate.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.wizardUpdate)
      });
    }
  }

  render() {
    return (
      <div className="app">
        <SearchForm
          value={this.state.searchTerm}
          changeSearchHandler={this.changeSearchHandler}
        />
        <CreateForm submitCreateHandler={this.submitCreateHandler} />
        <CharacterContainer
          characters={this.state.filteredCharacters}
          clickHouseHandler={this.clickHouseHandler}
        />
        {this.state.showForm ? (
          <UpdateForm
            wizard={this.state.wizard}
            submitUpdateHandler={this.submitUpdateHandler}
          />
        ) : null}
        <HouseContainer
          houses={this.state.houses}
          characters={this.state.filteredCharacters}
          clickHouseHandler={this.clickHouseHandler}
        />
      </div>
    );
  }
}

export default App;
