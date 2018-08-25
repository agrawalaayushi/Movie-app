
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestMovieDetails} from '../../actions/action';
import MovieCardView from '../common/movie-card-view';
import { Loader } from '../common/loader';
import { Header } from '../Header/header';

class MovieDetailPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  //-----------------------------------
  // Methods
  //-----------------------------------

  init() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.props.getUpcomingMovies();
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  getMovieCard(card, index) {
    return(
      <MovieCardView
        key={index}
        movie={card.movie}
        movieDetails={card}
        showmovieDetailsModalCallback={(movieDetails)=> this.handleShowmovieDetailsModal(movieDetails)}
      />
    )
  };

  getLoaderView(){
    return(
      <Loader />
    )
  } 

  getMovieDetailsView() {
    const { movieDetailResponse } = this.props;
    // const movieDetails = movieDetailResponse.results
    return(
      <div className= "movies-details-view">
        <Header />
        <div className="movies-detail-section position-relative">
          Movie Detail Page
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
  
  componentWillReceiveProps(newProps) {
  }

  render() {
    const { movieDetailResponse } = this.props;
    return (
      <div className="movie-list-view">
        <Header />

        { movieDetailResponse ? this.getMovieDetailsView() : this.getLoaderView() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  movieDetailResponse: state.reducer.get('movieDetailResponse'),

  })

const mapDispatchToProps = dispatch => ({
  getUpcomingMovies: () => dispatch(requestMovieDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
