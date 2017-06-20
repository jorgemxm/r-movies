//-----------------------------------
// MovieCard
//-----------------------------------

// Dependencies
import React from 'react';
import { Link } from 'react-router';
// import _ from 'lodash';

// Custom Components
import MovieImage from './MovieImage';
import helpers from '../helpers';


/**
* Helper Method
* @param { Array } Genre - List of Tags
*/
const _printTags = Genre => (
  Genre.split(', ').map(tag => (
    <div
      key={ tag }
      className="control">

      <Link
        className="button is-small is-outlined"
        to={ `/movies/${ helpers.slugify(tag).toLowerCase() }/` }
      >
        { tag }
      </Link>
    </div>
  ))
);


// const MovieCard = props => (
const MovieCard = ({
  Title,
  imdbID,
  Runtime,
  Year,
  Poster,
  Plot,
  Genre
}) => (
  <div className={ `tile is-3 is-parent movie-id-${ imdbID }` } >
    <div className="card is-flex is-flex-column">
      <Link
        className="card-image"
        to={ `/movie/${ imdbID }/${ helpers.slugify(Title) }` }
      >
        <MovieImage
          src={ helpers.imagify(Poster) }
          alt={ Title }
        />
      </Link>

      <div className="card-content is-flex is-flex-column">
        <div className="title is-4"><strong>{ Title }</strong></div>
        <div className="subtitle is-6">
          { helpers.formatDuration(Runtime) }
          <small className="is-pulled-right">{ Year }</small>
        </div>

        <div className="content">{ helpers.dotdotdot(Plot) }</div>

        <div className="card-tags control is-grouped">
          { _printTags(Genre) }
        </div>

      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  Title: React.PropTypes.string.isRequired,
  imdbID: React.PropTypes.string.isRequired,
  Runtime: React.PropTypes.string.isRequired,
  Year: React.PropTypes.string.isRequired,
  Poster: React.PropTypes.string.isRequired,
  Plot: React.PropTypes.string.isRequired,
  Genre: React.PropTypes.string.isRequired
};

export default MovieCard;
