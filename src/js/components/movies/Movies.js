'use strict';

//-----------------------------------
// List of Movies
//-----------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

//--------------
import MoviesHeader from './MoviesHeader';
import MovieCard from './MovieCard';
// import helpers from '../../utils/helpers';
import services from '../../services';

const propTypes = {
  match: PropTypes.object.isRequired
};



class Movies extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: [],
      searchTerm: ''
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);

  }


  componentDidMount() {
    this.getData();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.getData();
    }
  }


  getData() {
    let sortedMovies;

    // If Filter by Genre
    if (this.props.match.params.genre) {
      services.getByGenre(this.props.match.params.genre)
      .then(data => {

        // Sort Movies by title ASC
        sortedMovies = _.sortBy(data, [obj => obj.Title]);

        // Update Movies State with the new Array
        this.setState((state, props) => {
          return {
            movies: sortedMovies
          };
        });
      });
    }


    // Default Route / All Movies
    else {
      services.getAll()
      .then(data => {
        this.setState((state, props) => {
          return {
            movies: data
          }
        });
      });
    }
  }

  updateSearchTerm(event) {
    // this.setState((state, props) => { searchTerm: event.target.value }); // TODO Review --> Warning: This synthetic event is reused for performance reasons...
    this.setState({ searchTerm: event.target.value });
  }


  render() {

    if (!this.state.movies) {
      return <div>:[ There are no movies</div>
    }

    // NOTE: When filtering, .toLowerCase() is used in all strings in order to avoid "case-sensitve" searchs
    const moviesList = this.state.movies
      .filter(movie => `${ movie.Title } ${ movie.Plot }`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0 )
      .map( movie => (
        <MovieCard key={ movie.imdbID } { ...movie } />
      ));

    return (
      <div className="page--movies">

        <MoviesHeader
          totalMovies={ this.state.movies.length }
          { ...this.props }
        />

        <div className="component-movies">
          <div className="container">

            <div className="search-box block">
              <input
                className="input"
                type="text"
                placeholder="Find a Movie..."
                value={ this.state.searchTerm }
                onChange={ this.updateSearchTerm }
              />
            </div>

            <div className="tile is-ancestor movie-tiles-container">
              { moviesList }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movies.propTypes = propTypes;

export default Movies;
