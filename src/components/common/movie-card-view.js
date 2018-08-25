// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { IMG_URL } from '../../constants/misc';
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
      return (
        <div className="movie-card-view">
          <div className="poster-image">
            <img className="poster" src={`${IMG_URL}${posterImage}`} alt="Movie Poster"/>
          </div>
          <div className="movie-info">
            <div className='title' onClick={()=> this.openMovieDetailPage(movieDetails.id)}>{movieDetails.title}</div>
            <div className='releasing-date'>Releasing on {movieDetails.release_date}</div>
            <p className='description'>{movieDetails.overview}</p>
          </div>
        </div>
      );
    }
  }
  
  
  export default connect(null)(MovieCardView);
  