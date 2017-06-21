//-----------------------------------
// MovieCard
//-----------------------------------

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Custom Components
import MovieImage from './MovieImage';
import helpers from '../../utils/helpers';

const propTypes = {
  Title: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired
};


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

MovieCard.propTypes = propTypes;

export default MovieCard;
