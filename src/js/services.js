'use strict';

//-----------------------------------
// HTTP Requests Services
//-----------------------------------
import http from 'axios';
import helpers from './utils/helpers';

class Services {

  /**
  *
  */
  static getAll() {
    return http.get('/db') // .get('/movies')
    .then(({ data }) => data) // ES6 Object deconstruction === (return response.data)
    .catch(response => console.error('Error', response));
  }


  /**
  *
  */
  static getByIMDB(id) {
    return http.get(`/movies?imdbID=${ id }`)
    .then(({ data }) => data[0]) // ES6 Object deconstruction
    .catch(response => console.error('Error', response));
  }


  /**
  *
  */
  /*
  static getByName(name) {

    return this.getAll()
    .then(response => {

      let results = response.movies.filter(movie => (
        helpers.slugify(movie.Title) === helpers.slugify(name)
      ));

      if (results.length > 0 ) {
        return Promise.resolve(results[0] );
      } else {
        return Promise.reject();
      }
    });
    // If 'this' context is needed inside the callback function
    // NOTE: Not necessary with arrow functions
    // }.bind(this) );``
  }
  */



  /**
  *
  */
  static getByGenre(type) {

    return this.getAll()
    .then(response => {

      const results = response.movies.filter(movie => (
        movie.Genre.split(', ').some(_type => (
          helpers.slugify(_type) === helpers.slugify(type)
        ))
      ));

      return (results.length > 0)
        ? Promise.resolve(results)
        : Promise.reject();

    });
  }

}

export default Services;
