'use strict'

import React from 'react';

const MovieImage = (props) => (
    <figure className="movie-image image is-2by3">
        <img alt={ props.alt }
            src={ props.src } />
    </figure>
);

MovieImage.propTypes = {
    alt: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
};


export default MovieImage;
