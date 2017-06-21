'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

// React Styleguide - (relying on function name inference is discouraged)
// eg: const MovieImage = (props) = {}
function MovieImage(props) {
  return (
    <figure className="movie-image image is-2by3">
      <img
        alt={ props.alt }
        src={ props.src }
      />
    </figure>
  );
}

MovieImage.propTypes = propTypes;

export default MovieImage;
