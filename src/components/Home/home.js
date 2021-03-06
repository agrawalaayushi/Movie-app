import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { requestSearchByKeyword } from '../../actions/action';
import { Header } from '../Header/header';
import SearchBar from '../common/search-bar';
import UpcomingMovieList from '../Movie/upcoming-movie-list';
import '../../styles/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleSearchMovies(query) {
    this.setState({
      searchKeyword: query
    })
    this.props.handleSearchMovies(query);
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    this.props.history.push('/upcoming');
  }
  
  componentWillReceiveProps(newProps) {
    const { searchKeyword } = this.state;
    if(!isEqual(newProps.searchByKeywordResponse, this.props.searchByKeywordResponse)) {
      this.props.history.push(`/${searchKeyword}`);
    }
  }

  render() {
    const { searchByKeywordResponse } = this.props;
    return (
      <div className="movie-home-view">
        <Header />
        <div className="search-bar">
          <div className="search-bar-wrapper">
            <SearchBar
              handleSearchQueryCallback={(query)=> this.handleSearchMovies(query)}         
              />
          </div>
        </div>
        <UpcomingMovieList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  searchByKeywordResponse: state.reducer.get("searchByKeywordResponse")
})

const mapDispatchToProps = dispatch => ({
  handleSearchMovies: (query) => dispatch(requestSearchByKeyword(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
