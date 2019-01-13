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

    window.scrollTo({
      top: 2000,
      left: 100,
      behavior: "smooth"
    });

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
      <div className="create-form form-group">
        <h1>New Wizard</h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className="form-control"
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
            className="form-control"
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <br />
          <label htmlFor="house">House:</label>
          <select
            id="house"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            name="image2"
            type="text"
            placeholder="Enter wizard image2"
            value={this.state.image2}
            onChange={this.changeHandler}
          />
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
