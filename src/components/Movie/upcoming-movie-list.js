
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestUpcomingMovies} from '../../actions/action';
import MovieCardView from '../common/movie-card-view';

class UpcomingMovieList extends Component {
  constructor(props) {
    super(props);
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
  // View
  //-----------------------------------
  getMovieCard(card, index) {
    return(
      <MovieCardView
        {...this.props}
        key={index}
        movie={card.movie}
        movieDetails={card}
        showmovieDetailsModalCallback={(movieDetails)=> this.handleShowmovieDetailsModal(movieDetails)}
      />
    )
  };

  getUpcomingMoviesView() {
    const { upcomingMoviesResponse } = this.props;
    const upcomingMovies = upcomingMoviesResponse.results
    return(
      <div className= "movies-upcoming-view">
        <div className="movies-upcoming-section position-relative">
          <h2 className="content-heading">Upcoming Movies</h2>
          { upcomingMovies.length > 0 ?
            <div className={"movie-card-wrp"}>
              { upcomingMovies.map((item, index) =>( this.getMovieCard(item, index) )) }
            </div> :
            <div className= "data-not-available-wrp">
              <p className="data-not-available">Movies not available</p>
            </div>
          }
        </div>
      </div>
    )
  }

  //-----------------------------------
  // LifeCycle
  //-----------------------------------

  componentDidMount() {
    this.init();
  }
  
  componentWillReceiveProps(newProps) {
    console.log(newProps)
  }

  render() {
    const { upcomingMoviesResponse } = this.props;
    return (
      <div className="movie-list-view">
        { upcomingMoviesResponse && this.getUpcomingMoviesView() }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  upcomingMoviesResponse: state.reducer.get('upcomingMoviesResponse'),
 })

const mapDispatchToProps = dispatch => ({
getUpcomingMovies: () => dispatch(requestUpcomingMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieList);
