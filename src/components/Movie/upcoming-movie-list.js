
// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction, requestUpcomingMovies} from '../../actions/action';
import { Header } from '../Header/header';
import MovieCardView from '../common/movie-card-view';

class UpcomingMovieList extends Component {
  constructor(props){
    super(props);
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
          {...this.props}
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
        <div className= "movies-upcoming-view">
          <div className="movies-upcoming-section position-relative">
            {/* <div className="center">
              {orgConnectionsResponse.count > 6 && isAdminConnectionCollapsed && <Button className='view-more app-btn' onClick={()=> this.toggleAdminConnectionView(maxLimit, offset)} type= "button">{t('common.viewMore')}</Button>}
              {!isAdminConnectionCollapsed && <Button className='view-more app-btn' onClick={()=> this.toggleAdminConnectionView(minLimit, offset)} type= "button">{t('common.viewLess')}</Button>}
            </div> */}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieList);
  