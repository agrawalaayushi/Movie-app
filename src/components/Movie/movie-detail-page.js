
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestMovieDetails} from '../../actions/action';
import MovieCardView from '../common/movie-card-view';
import { Loader } from '../common/loader';
import { Header } from '../Header/header';

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
      movieId: parseInt(activePath.params.movieImdbId)
    }
    this.props.getMovieDetails(params);
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
    const { movieDetailsResponse } = this.props;
    // const movieDetails = movieDetailsResponse.results
    return(
      <div className= "movies-details-view">
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
