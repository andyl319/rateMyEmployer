import React from 'react';
import { hashHistory } from 'react-router';

class SearchBar  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tag: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleChange(e) {
      this.setState({ tag: e.currentTarget.value });
    }

    handleSubmit(e) {
      e.preventDefault();

    }

    render () {
      return (
        <form onSubmit={this.handleSubmit} className="search-bar">
          <label className='search-label'>Find</label>
          <input
            className="search-input"
            placeholder="McDonalds, Cheesecake Factory, Super Duper..."
            value={this.state.tag}
            onChange={this.handleChange}/>
          <button type="submit" className="search-submit">
             <span className="fa fa-search fa-2x" aria-hidden="true"></span>
          </button>
        </form>
      );
    }
}

export default SearchBar;
