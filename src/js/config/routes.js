'use strict';

//-----------------------------------
// React Routes Config
//-----------------------------------
import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

// Router History
//--------------
import { createHashHistory } from 'history';

// Custom Modules
//--------------
import App from '../containers/app';
import { Movies, Movie } from '../components/movies';
import { NotFound } from '../components/global';

const history = new createHashHistory();

// import createBrowserHistory from 'history/lib/createBrowserHistory'
// let history = createBrowserHistory();

// All Routes
//--------------
export default (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Movies } />
      <Route path="movies/:genre" component={ Movies } />
      <Route path="movie/:imdb/:name" component={ Movie } />
      <Redirect from="movie" to="/" />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>
);
