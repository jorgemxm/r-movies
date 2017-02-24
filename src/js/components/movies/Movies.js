'use strict'

//-----------------------------------
// List of Movies
//-----------------------------------
import React from 'react';
import { Link } from 'react-router';

//--------------
import MovieImage from './MovieImage';
import helpers from '../helpers';
import services from '../../services';


export const Movies = React.createClass({
    getInitialState() {
        return {
            movies: []
        }
    },

    componentDidMount() {
        this.getData();
    },

    componentWillReceiveProps(nextProps) {
        if ( nextProps ) {
            this.getData();
        }
    },

    // componentWillUpdate(nextProps, nextState) {
    //
    // },

    getData() {

        // If Filter by Type
        if (this.props.params.type) {
            services.getByType(this.props.params.type) // it gets the param :name from the url
                .then( function (data) {
                    this.setState({
                        // movies: data
                        movies: _.sortBy(data, [ obj => obj.Title ])
                    })
                }.bind(this));
        }

        // Default Route / All Movies
        else {
            services.getAll()
                .then( function (data) {
                    this.setState({
                        movies: data.movies,
                    })
                }.bind(this));
        }
    },


    render() {
        let printTags = ( Genre ) => (
            Genre.split(', ').map( (tag, index) => (
                <p className="control" key={ index }>
                    <Link className="button is-small is-outlined"
                        to={ `/movies/${ helpers.slugify(tag).toLowerCase() }/` }
                        >
                        { tag }
                    </Link>
                </p>
            ) )
        );

        let movies = this.state.movies.map((movie, index) => (

            <div className="tile is-3 is-parent"
                key={ index }>

                <div className="card is-flex is-flex-column">

                    <Link className="card-image"
                            to={`/movie/${ movie.imdbID }/${ helpers.slugify(movie.Title) }` } >

                        <MovieImage
                            src={ helpers.imagify(movie.Poster) }
                            alt={ movie.Title }
                        />
                    </Link>

                    <div className="card-content is-flex is-flex-column">
                        <div className="title is-4"><strong>{ movie.Title }</strong></div>
                        <div className="subtitle is-6">
                            { helpers.formatMovieDuration( movie.Runtime ) }
                            <small className="is-pulled-right">{ movie.Year }</small>
                        </div>

                        <div className="content">{ helpers.dotdotdot( movie.Plot ) }</div>

                        <div className="card-tags control is-grouped">
                            { printTags(movie.Genre) }
                        </div>

                        {/* <MovieName
                            name={ movie.Title }
                            id={ movie.imdbID }
                            species={ movie.imdbID } /> */}

                    </div>

                </div>
            </div>
        ));

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
                                    <span className="tag is-large is-warning">{ this.state.movies.length }</span>
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
        )
    }
});
