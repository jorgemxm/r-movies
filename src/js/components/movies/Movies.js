'use strict';

//-----------------------------------
// List of Movies
//-----------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

//--------------
import MovieCard from './MovieCard';
// import helpers from '../../utils/helpers';
import services from '../../services';

const propTypes = {
  params: PropTypes.object.isRequired
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

  // componentWillUpdate(nextProps, nextState) {
  //
  // },

  getData() {

    // If Filter by Type
    if (this.props.params.genre) {
      services.getByGenre(this.props.params.genre) // it gets the param :name from the url
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
            movies: data.movies
          }
        });
      });
    }
  }


  render() {

    const movies = this.state.movies.map( (movie, index) => (
      <MovieCard key={ movie.imdbID } { ...movie } />)
    );

    return (
      <div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container level">
              <div className="level-left">
                <div>
                  <h1 className="title">All Movies</h1>
                  <h2 className="subtitle">Subtitle</h2>
                </div>
              </div>
              <div className="level-right">
                <p className="title is-4">
                  <span className="tag is-large is-warning">
                    { this.state.movies.length }
                  </span>
                  <span> Movies</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <div>
          { type &&
          <h2>
            <span className={"label type-" + type.toLowerCase() }>
              {type}
            </span>
          </h2>
          }
        </div> */}

        <div className="component-movies">
          <div className="container">
            <div className="tile is-ancestor movie-tiles-container">
              { movies }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movies.propTypes = propTypes;

export default Movies;
