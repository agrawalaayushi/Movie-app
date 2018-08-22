
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction, requestUpcomingMovies} from '../../actions/action';
import Search from '../Search/search';
import { Header } from '../Header/header';

class UpcomingMovieList extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
    simpleAction(event){
      this.props.simpleAction();
     }
     
    init() {
      this.getUpcomingMovies();
    }

    getUpcomingMovies() {
      this.props.getUpcomingMovies();
    }

    componentDidMount() {
      this.init();
    }
    
    componentWillReceiveProps(newProps) {
      console.log(newProps)
    }

    render() {
      return (
        <div className="App">
          {/* <UpcomingMoviesList /> */}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    getUpcomingMovies: () => dispatch(requestUpcomingMovies()),
   })
  
  export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieList);
  