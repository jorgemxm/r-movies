'use strict';

//-----------------------------------
// Movie Item
//-----------------------------------
import React, { Component } from 'react';

import MovieImage from './MovieImage';
import helpers from '../helpers';
import services from '../../services';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot: '',
        Language: '',
        Country: '',
        Awards: '',
        Poster: '',
        Metascore: '',
        imdbRating: '',
        imdbVotes: '',
        imdbID: '',
        Type: ''
      }
    };

    this.tabSet = this.tabSet.bind(this);
  }

  /**
  *
  */
  componentDidMount() {
    this.getData();
  }

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
    if (this.props.params.imdb) {
      services.getByIMDB(this.props.params.imdb)
      .then(response => {
        this.setState((state, props) => {
          return {
            movie: response
          }
        });
      });
    }
  }

  /**
  *
  */
  tabGet() {
    return this.state.tabs.active;
  }

  /**
  *
  */
  // tabSet(event, tabIndex) {        // Using: onClick={ event => this.tabSet(event, 2) }
  // tabSet(tabIndex, name, event) {  // Using: onclick={ tabSet.bind(this, name, event) }
  tabSet(event) {                     // Using: onclick={ tabset } data-index="1 or 2..etc"

    // Get the value of `data-index="1"` from the HTML element
    const tabIndex = event.target.dataset.index;

    // this.setState({ tabs: { active: tabIndex } });
    this.setState((state, props) => {
      return { tabs: { active: Number(tabIndex) } }
    });
  }

    /**
    *
    */
  render() {

    const movie = this.state.movie;

    if (movie.Title === '') { return <div className="movie container" />; }

    return (
      <div className="movie container">
        <div className="columns">

          <div className="column is-4">
            {/* Thumbnail */}
            <MovieImage
              src={ helpers.imagify(movie.Poster) }
              alt={ movie.Title }
            />
          </div>

          <div className="column is-8">
            <h1 className="title is-1">
              { movie.Title }
            </h1>
            {/* Tabs */}
            <div className="tabs is-boxed">
              <ul>
                <li className={ (this.tabGet() === 1) ? 'is-active' : '' } >
                  {/* data-tab="1" */}
                  <button
                    className={ `button ${ this.tabGet() === 1 ? 'is-warning is-outlined' : '' }` }
                    data-index="1"
                    onClick={ this.tabSet }
                    > Info
                  </button>
                </li>
                <li className={ (this.tabGet() === 2) ? 'is-active' : '' } >
                  {/* data-tab="2" */}
                  <button
                    className={ `button ${ this.tabGet() === 2 ? 'is-warning is-outlined' : '' }` }
                    data-index="2"
                    onClick={ this.tabSet }
                    > Trailer
                  </button>
                </li>
              </ul>
            </div>


            <div className="tabs-content content">

              {/* Tab #1 */}
              <div data-context="1" className={ this.tabGet() === 1 ? 'show-it' : 'hide-it' }>

                <div className="message">
                  <div className="message-body">{ movie.Plot }</div>
                </div>

                <ul>
                  <li>{ helpers.formatDuration(movie.Runtime) }</li>
                  <li>{ movie.Year } <small>({ movie.Released })</small></li>
                  <li>Director: { movie.Director }</li>
                  <li>Language: { movie.Language }</li>
                  <li>Country: { movie.Country }</li>
                  <li>Actors: { movie.Actors }</li>
                  <li>Awards: { movie.Awards }</li>
                </ul>

                <div className="icon control is-grouped">
                  <i className="control fa fa-star" />
                  <span> { movie.imdbRating }</span>
                </div>
              </div>

              {/* Tab #2 */}
              <div data-context="2" className={ this.tabGet() === 2 ? 'show-it' : 'hide-it' }>
                <span className="icon is-large"> <i className="fa fa-ticket" /> </span> &nbsp;
                <span className="icon is-large"> <i className="fa fa-film" /> </span> &nbsp;
                <span className="icon is-large"> <i className="fa fa-youtube-play" /> </span> &nbsp;
                <span className="icon is-large"> <i className="fa fa-imdb" /> </span> &nbsp;
                <span className="icon is-large"> <i className="fa fa-commenting" /> </span> &nbsp;
                <br /><br />Movie Trailer
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
    );
  }
}

Movie.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default Movie;
