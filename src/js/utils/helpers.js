'use strict';

import _ from 'lodash';
import getSlug from 'speakingurl';

//-----------------------------------
// Utility Functions
//-----------------------------------
class Helpers {

  // Add Ellipsis to the given text
  //--------------
  static dotdotdot(text, length = 180) {
    return _.truncate(text, {
      length,               // How many characters are shown by default
      separator: /\W?\s/,   // Truncate by word boundary.
      omission: '…'         // &hellip;
    });
  }


  // Format time-length
  //--------------
  static formatDuration(runtime) {
    const duration = parseInt(runtime, 10);
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60)

    return `${ hours } hrs, ${ minutes } min`;
  }


  // Modify the URL of the image (for testing purposes)
  //--------------
  static imagify(Poster) {

    // Used for Local Images
    //--------------
    const path = '/img/movies-posters/';
    const poster = Poster.replace(/https?:\/\/\w.+-amazon.com\/images\/M\//, '');


    // Used for Development Purposes
    //--------------
    if (process.env.NODE_ENV !== 'production') {
      return path + poster;
    }

    // Used for External Images
    return Poster;

  }


  // Replace Special characters for the given text
  //--------------
  /*
  static normalize(text) {
    if (!text) return '';

    return text
    .replace(/\W+/g, '')
    .toLowerCase();
  }
  */


  // Convert Text string into url-slug
  //--------------
  // https://www.npmjs.com/package/speakingurl
  static slugify(text) {
    // return text
    // .replace(/\s+/g, '-')
    // .replace(/[^a-z0-9 -]/gi, '')
    // .replace(/[ÀÁÂÃÄÅ]/g,"A")
    // .replace(/[àáâãäå]/g,"a")
    // .toLowerCase();
    return getSlug(text);
    // return _.kebabCase(text);
  }

  /*
  static partition(data, n) {
    return _.chain(data)
    .groupBy(function (element, index) {
      return Math.floor(index / n);
    }).toArray().value();
  }
  */
}


export default Helpers;
