// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';
import Search from '../Search/search';
import { Header } from '../Header/header';
import UpcomingMoviesList from '../Movie/upcoming-movie-list';
import '../../common.css';


class MovieCardView extends Component {

    render() {
      const { movieDetails } = this.props;
      return (
        <div className="movie-card-view">

        </div>
      );
    }
  }
  
  
  export default connect()(MovieCardView);
  