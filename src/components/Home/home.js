// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';
import Search from '../Search/search';
import { Header } from '../Header/header';
import UpcomingMoviesList from '../Movie/upcoming-movie-list';

class Home extends Component {

    simpleAction(event){
      this.props.simpleAction();
     }
  
    componentWillMount() {
      this.props.history.push('/upcoming');
    }
    
    render() {
      return (
        <div className="App">
          <Header />
          <Search />
          <UpcomingMoviesList />
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  