// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';
import Search from '../Search/search';
import { Header } from '../Header/header';
import UpcomingMoviesList from '../Movie/upcoming-movie-list';
import { BACKGROUND_IMAGE_GRADIENT } from '../../constants/misc';
import { IMAGE_PLACEHOLDER } from '../../constants/images';
import '../../common.css';


class MovieCardView extends Component {

    openMovieDetailPage(movieImdbId){
      // redirect to movie detail page
      const { history } = this.props;
      history.push(`/${movieImdbId}`);
    }

    render() {
      const { movieDetails } = this.props;
      const posterImage = movieDetails.poster_path || IMAGE_PLACEHOLDER;
      const coverGradient = BACKGROUND_IMAGE_GRADIENT;
      return (
        <div className="movie-card-view">
          <div className='title' onClick={()=> this.openMovieDetailPage(movieDetails.id)}>{movieDetails.title}</div>
          <div className='description'>Releasing on {movieDetails.release_date}</div>
          <div className='description'>Popularity {movieDetails.popularity}</div>
          <div>{movieDetails.overview}</div>
        </div>
      );
    }
  }
  
  
  export default connect()(MovieCardView);
  