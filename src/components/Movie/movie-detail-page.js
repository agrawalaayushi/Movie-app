
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction, requestUpcomingMovies} from '../../actions/action';
import MovieCardView from '../common/movie-card-view';

class MovieDetailPage extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
    simpleAction(event){
      this.props.simpleAction();
     }
     
    init() {
      this.getUpcomingMovies();
    }

    getUpcomingMovies() {
      this.props.getUpcomingMovies();
    }

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

    getUpcomingMoviesView(){
      const { upcomingMoviesResponse } = this.props;
      const upcomingMovies = upcomingMoviesResponse.results
      return(
        <div className= "movies-details-view">
          <div className="movies-detail-section position-relative">
           Movie Detail Page
          </div>
        </div>
      )
    }

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
          { this.getUpcomingMoviesView() }
        </div>
      );
    }
  }
  
  // const mapStateToProps = state => ({
  //   ...state,
  //   upcomingMoviesResponse: state.get('upcomingMoviesResponse'),
  //  })

  function mapStateToProps(state) {
    return {
      upcomingMoviesResponse: state.reducer.get('upcomingMoviesResponse'),
    };
  }
  
  
  const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  getUpcomingMovies: () => dispatch(requestUpcomingMovies()),
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
  