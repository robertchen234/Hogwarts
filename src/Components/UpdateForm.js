import React from "react";

class UpdateForm extends React.Component {
  state = {
    id: this.props.wizard.id,
    name: this.props.wizard.name,
    age: this.props.wizard.age,
    house: this.props.wizard.house,
    role: this.props.wizard.role,
    image1: this.props.wizard.image1,
    image2: this.props.wizard.image2
  };

  changeHandler = event => {
    this.setState({
      id: this.props.wizard.id,
      name: this.props.wizard.name,
      age: this.props.wizard.age,
      house: event.target.value,
      role: this.props.wizard.role,
      image1: this.props.wizard.image1,
      image2: this.props.wizard.image2
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.submitUpdateHandler(this.state);
    this.setState({
      id: 0,
      name: "",
      age: 0,
      house: "",
      role: "",
      image1: "",
      image2: ""
    });
  };

  render() {
    window.scrollTo({
      top: 600,
      left: 100,
      behavior: "smooth"
    });

    return (
      <div className="update-form">
        <form
          className={
            this.state.house === "Gryffindor"
              ? "gryffindor"
              : this.state.house === "Slytherin"
              ? "slytherin"
              : this.state.house === "HufflePuff"
              ? "hufflepuff"
              : "ravenclaw"
          }
          onSubmit={this.submitHandler}
        >
          <label htmlFor="house">
            <h1>Update {this.props.wizard.name}'s 🏠</h1>
          </label>
          <br />
          <select
            id="house"
            className="form-control"
            name="house"
            onChange={this.changeHandler}
            value={this.state.house}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="HufflePuff">HufflePuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UpdateForm;
