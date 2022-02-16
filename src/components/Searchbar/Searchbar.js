import React from "react";


class Searchbar extends React.Component {
  state = {
    image: null,
    name: '',
  };

  handleChangeName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ name: value });
    };
    
  

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    // this.disabledButton();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChangeName}
            autoFocus
            placeholder="Search images and photos"
            value={name}
          />
        </form>
      </header>
    );
  }
}


export default Searchbar