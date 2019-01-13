import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form">
        <input className="form-control"
          type="text"
          placeholder="Search wizards by name or house"
          value={this.props.value}
          onChange={this.props.changeSearchHandler}
        />
      </div>
    );
  }
}

export default SearchForm;
