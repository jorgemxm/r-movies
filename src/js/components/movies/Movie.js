'use strict'

//-----------------------------------
// Movie Item
//-----------------------------------
import React from 'react';

import MovieImage from './MovieImage';
import helpers from '../helpers';
import services from '../../services';

export const Movie = React.createClass({

    getInitialState() {
        return {
            tabs: {
                active: 1
            },
            comments: {
                data: [],
                show: true,
                newComment: {
                    anonymous: false,
                    body: '',
                    date: '',
                    email: ''
                }
            },
            movie: {
                "Title": "",
                "Year": "",
                "Rated": "",
                "Released": "",
                "Runtime": "",
                "Genre": "",
                "Director": "",
                "Writer": "",
                "Actors": "",
                "Plot": "",
                "Language": "",
                "Country": "",
                "Awards": "",
                "Poster": "",
                "Metascore": "",
                "imdbRating": "",
                "imdbVotes": "",
                "imdbID": "",
                "Type": "",
                "Response": ""
            }
        }
    },

    /**
    *
    */
    componentDidMount() {
        this.getData();
    },

    /**
    *
    */
    // componentWillReceiveProps(nextProps) {
    // },

    /**
    *
    */
    // shouldComponentUpdate(nextProps, nextState) {
    // },

    /**
    *
    */
    getData() {
        if ( this.props.params.imdb ) {
            services.getByIMDB( this.props.params.imdb )
                .then( function (response) {
                    this.setState({
                        movie: response
                    })
                }.bind(this));
        }

        // if ( this.props.params.name ) {
        //     services.getByName(this.props.params.name) // it gets the param :name from the url
        //         .then( function ( response ) {
        //             this.setState({
        //                 movie: response
        //             })
        //         }.bind(this));
        // }
    },

    /**
    *
    */
    tabGet() {
        return this.state.tabs.active;
    },

    /**
    *
    */
    tabSet(event, tabIndex) {
        // this.setState({ tabs: { active: event.target.dataset.tab } }); // Get the value of `data-tab="1" from the HTML element`
        this.setState({ tabs: { active: tabIndex } })
    },

    /**
    *
    */
    render() {

        let movie = this.state.movie;

        if ( movie.Title === '' ) { return ( <div className="movie container"></div> ) }

        return (
            <div className="movie container">
                <div className="columns">

                    <div className="column is-4">
                        {/* Thumbnail */}
                        <MovieImage
                            src={ helpers.imagify( movie.Poster ) }
                            alt={ movie.Title }
                        />
                    </div>

                    <div className="column is-8">
                        <br/>
                        <h1 className="title is-1">{ movie.Title }</h1>

                        {/* Tabs */}
                        <div className="tabs is-boxed">
                            <ul>
                                <li className={ this.tabGet() == 1 ? 'is-active' : '' } >
                                    {/* data-tab="1" */}
                                    <a className="show"
                                        onClick={ event => this.tabSet(event, 1) } >
                                        Info
                                    </a>
                                </li>
                                <li className={ this.tabGet() == 2 ? 'is-active' : '' } >
                                    {/* data-tab="2" */}
                                    <a className="show"
                                        onClick={ event => this.tabSet(event, 2) } >
                                        Trailer
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="tabs-content content">

                            {/* Tab #1 */}
                            <div className={ this.tabGet() == 1 ? "show-it" : "hide-it" }>

                                <div className="message">
                                    <div className="message-body">{ movie.Plot }</div>
                                </div>

                                <ul>
                                    <li>{ helpers.formatMovieDuration( movie.Runtime ) }</li>
                                    <li>{ movie.Year } <small>({ movie.Released })</small></li>
                                    <li>Director: { movie.Director }</li>
                                    <li>Language: { movie.Language }</li>
                                    <li>Country: { movie.Country }</li>
                                    <li>Actors: { movie.Actors }</li>
                                    <li>Awards: { movie.Awards }</li>
                                </ul>

                                <div className="icon control is-grouped">
                                    <i className="control fa fa-star"></i>
                                    <span> { movie.imdbRating }</span>
                                </div>
                            </div>

                            {/* Tab #2 */}
                            <div className={ this.tabGet() == 2 ? "show-it" : "hide-it" }>
                                Movie Trailer
                            </div>

                        </div>
                    </div>

                    {/* Comments */}
                    {/* <Comments
                        name={ this.state.movie.Title }
                        comments={ this.state.comments }
                    /> */}
                </div>
            </div>
        )
    }
});
