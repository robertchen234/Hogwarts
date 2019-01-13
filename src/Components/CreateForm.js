import React from "react";

class CreateForm extends React.Component {
  state = {
    name: "",
    age: 30,
    house: "Gryffindor",
    role: "",
    image1: "",
    image2: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.submitCreateHandler(this.state);
    this.setState({
      name: "",
      age: 0,
      house: "",
      role: "",
      image1: "",
      image2: ""
    });
  };

  render() {
    return (
      <div className="create-form">
        <h1>New Wizard</h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter wizard name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <br />
          <label htmlFor="house">House:</label>
          <select
            id="house"
            name="house"
            value={this.state.house}
            onChange={this.changeHandler}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="HufflePuff">HufflePuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
          <br />
          <label htmlFor="role">Role:</label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Enter wizard role"
            value={this.state.role}
            onChange={this.changeHandler}
          />
          <br />
          <label htmlFor="image1">Image 1:</label>
          <input
            id="image1"
            name="image1"
            type="text"
            placeholder="Enter wizard image1"
            value={this.state.image1}
            onChange={this.changeHandler}
          />
          <br />
          <label htmlFor="image2">Image 2:</label>
          <input
            id="image2"
            name="image2"
            type="text"
            placeholder="Enter wizard image2"
            value={this.state.image2}
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
