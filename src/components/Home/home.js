// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';
import Search from '../Search/search';
import { Header } from '../Header/header';
import UpcomingMovieList from '../Movie/upcoming-movie-list';
import '../../styles/app.scss';


class Home extends Component {

    simpleAction(event){
      this.props.simpleAction();
     }
  
    componentWillMount() {
      this.props.history.push('/upcoming');
    }
    
    render() {
      return (
        <div className="movie-home-view">
          <Header />
          <Search />
          <UpcomingMovieList {...this.props} />
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
  