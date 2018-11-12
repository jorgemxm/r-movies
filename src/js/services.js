'use strict';

//-----------------------------------
// HTTP Requests Services
//-----------------------------------
import http from 'axios';
import helpers from './utils/helpers';

class Services {

  /**
  * Fetch All Movies
  * @return { Array } All Movies. Array of Objects
  */
  static getAll() {
    return http.get('/api/movies')
      .then(({ data }) => data) // ES6 Object deconstruction === (return response.data)
      .catch(response => console.error('Error: No Data', response));
  }



  /**
  * Fetch Movie Data for the given IMDB-ID
  * @param { String } imdbID - Movie ID
  * @return { Object } Movie Data that matches the IMDB-id
  */
  static getByIMDB(imdbID) {
    return http.get(`/api/movies?imdbID=${ imdbID }`)
      .then(({ data }) => data[0])
      .catch(response => console.error('Error: There is no Movie with that id', response));
  }



  /**
  * Fetch Movies By Genre
  * @param { String } type - Movie Genre eg: animation, adventure etc.
  * @return { Array } Movies filtered by Genre
  */
  static getByGenre(type) {

    return this.getAll()
      .then(response => {

        const results = response.filter(movie => (
          movie.Genre.split(', ').some(_type => (
            helpers.slugify(_type) === helpers.slugify(type)
          ))
        ));

        return (results.length > 0)
          ? Promise.resolve(results)
          : Promise.reject();

      })
      .catch(response => console.error('Error: No movies with that Genre were Found', response));
  }

}

export default Services;
