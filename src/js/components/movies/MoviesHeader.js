import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.object,
  totalMovies: PropTypes.number.isRequired
};

function MoviesHeader(props) {
  return (
    <div className="hero is-light">
      <div className="hero-body">
        <div className="container level">
          <div className="level-left">
            <div>
              <h1 className="title">All Movies</h1>
              {/* <h2 className="subtitle">Subtitle</h2> */}
            </div>
          </div>

          { props.match.params.genre &&
            <div className="level-item">
              <h3 className="heading">{ props.match.params.genre }</h3>
            </div>
          }

          <div className="level-right">
            <p className="title is-4">
              <span className="tag is-large is-warning">{ props.totalMovies }</span>
              <span> Movies</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

MoviesHeader.propTypes = propTypes;

export default MoviesHeader;
