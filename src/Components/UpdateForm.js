import React from "react";

class UpdateForm extends React.Component {
  state = {
    id: this.props.wizard.id,
    name: "",
    age: 0,
    house: this.props.wizard.house,
    role: "",
    image1: "",
    image2: ""
  };

  changeHandler = event => {
    this.setState({
      house: event.target.value,
      name: this.props.wizard.name,
      age: this.props.wizard.age,
      role: this.props.wizard.role,
      image1: this.props.wizard.image1,
      image2: this.props.wizard.image2
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.submitUpdateHandler(this.state);
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
      <div className="update-form">
        <form onSubmit={this.submitHandler}>
          <label htmlFor="house">
            <h1>Update {this.props.wizard.name}'s 🏠</h1>
          </label>
          <br />
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UpdateForm;
