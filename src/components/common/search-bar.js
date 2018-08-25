import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleResultSelect = this.handleResultSelect.bind(this)

  }

  //-----------------------------------
  // Methods
  //-----------------------------------
  handleInputChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  handleResultSelect(e, value) {
    if (e.key === 'Enter') {
      this.setState({
        query: e.target.value
      }, () => {
        this.props.handleSearchQueryCallback(this.state.query);
      })
    }
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
      <div className='search-bar'>
        <input
          icon='search'
          placeholder={"Search for a movie.."}
          onChange={this.handleInputChange}
          onKeyPress={this.handleResultSelect}
          value={this.state.query}
        />
      </div>
    )
  }
}

export default (connect(null)(SearchBar));
