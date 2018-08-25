
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestMovieDetails} from '../../actions/action';
import { IMG_URL } from '../../constants/misc';
import { IMAGE_PLACEHOLDER } from '../../constants/images';
import { Loader } from '../common/loader';
import { Header } from '../Header/header';
import '../../styles/app.scss';

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: this.props.match
    }
  }
  //-----------------------------------
  // Methods
  //-----------------------------------

  init() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    const {activePath} = this.state;
    const params = {
      movieId: parseInt(activePath.params.movieImdbId),
    }
    this.props.getMovieDetails(params);
  }

  //-----------------------------------
  // Views
  //-----------------------------------



  getLoaderView(){
    return(
      <Loader />
    )
  } 

  getMovieDetailsView() {
    const { movieDetailsResponse } = this.props;
    console.log(movieDetailsResponse);
    const posterImage = movieDetailsResponse.poster_path;
    // const movieDetails = movieDetailsResponse.results
    return(
      <div className= "movie-details-view">
        <div className="poster-wrapper">
          <img className="poster-image" src={`${IMG_URL}${posterImage}` || IMAGE_PLACEHOLDER} alt="Movie Poster"/>
        </div>
        <div className="movie-title">
          <h2 className="title">{movieDetailsResponse.title}</h2>
          <span className="imdb-rating">{movieDetailsResponse.vote_average}</span>
        </div>
        <div className="movie-description-wrapper">
          <div className="movie-overview">
            <h3 className="overview-heading">Overview</h3>
            <p className="overview-content">{movieDetailsResponse.overview}</p>
          </div>
        </div>
      </div>
    )
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  componentDidMount() {
    this.init();
  }

  render() {
    const { movieDetailsResponse } = this.props;
    return (
      <div className="movie-list-view">
        <Header />

        { movieDetailsResponse ? this.getMovieDetailsView() : this.getLoaderView() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  movieDetailsResponse: state.reducer.get('movieDetailsResponse'),

  })

const mapDispatchToProps = dispatch => ({
  getMovieDetails: (params) => dispatch(requestMovieDetails(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
