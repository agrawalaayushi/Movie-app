// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';
import { BACKGROUND_IMAGE_GRADIENT, IMG_URL } from '../../constants/misc';
import { IMAGE_PLACEHOLDER } from '../../constants/images';
import '../../styles/common.css';


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
          <div className='releasing-date'>Releasing on {movieDetails.release_date}</div>
          <div className='description'>{movieDetails.overview}</div>
          <img src={`${IMG_URL}${posterImage}`} />
        </div>
      );
    }
  }
  
  
  export default connect()(MovieCardView);
  