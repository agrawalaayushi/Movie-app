// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';

class SearchBar extends Component {

    simpleAction(event){
      this.props.simpleAction();
     }
    
    render() {
      return (
        <div className="search-bar">
          <div className="search-bar-wrapper">
            <input type="text" placeholder={"Search for a movie.."}/>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
   })
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
  