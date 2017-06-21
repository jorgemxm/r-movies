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
      movies: []
    };

  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.getData();
    }
  }


  getData() {

    // If Filter by Type
    if (this.props.match.params.genre) {
      services.getByGenre(this.props.match.params.genre) // it gets the param :name from the url
      .then(data => {
        this.setState((state, props) => {
          // return { movies: data }
          return {
            movies: _.sortBy(data, [obj => obj.Title])
          }
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


  render() {
    if (!this.state.movies) {
      return <div>:[ There are no movies</div>
    }

    const moviesList = this.state.movies.map( (movie, index) => (
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
