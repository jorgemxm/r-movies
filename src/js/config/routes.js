'use strict'

//-----------------------------------
// React Routes Config
//-----------------------------------
import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

// Custom Modules
//--------------
import App from '../app';
import { Movies, Movie } from '../components/movies';
import { NotFound } from '../components/global';

// Router History
//--------------
import { createHashHistory } from 'history';
let history = new createHashHistory();

// import createBrowserHistory from 'history/lib/createBrowserHistory'
// let history = createBrowserHistory();

// All Routes
//--------------
export default (
    <Router history={ history }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Movies } />
            <Route path="movies/:type" component={ Movies } />
            <Route path="movie/:imdb/:name" component={ Movie } />
            <Redirect from="movie" to="/" />
            <Route path="*" component={ NotFound } />
        </Route>
    </Router>
)
