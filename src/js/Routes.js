'use strict';

//-----------------------------------
// React Routes Config
//-----------------------------------
import React from 'react';
import PropTypes from 'prop-types';

import {
  // BrowserRouter,
  HashRouter,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

// Custom Modules
//--------------
// import App from '../containers/app';
import { Header, Footer } from './components/global';
import { Movies, Movie } from './components/movies';
import { NotFound } from './components/global';


// All Routes
//--------------
const Routes = props => (
  <HashRouter>
    <div className="app--container">
      <Header />

      <main className="app--main">
        <Switch>
          {/* <Route exact path="/" component={ Movies } /> */}
          <Route exact path="/" render={ props => (
            <Redirect to={ { pathname: '/movies', state: { from: props.location } } } />
          ) } />
          {/* <Route path="/movies" component={ Movies } /> */}
          {/* <Route path="/movie" component={ Movie } /> */}
          <Route exact path='/movies' component={ Movies } />
          <Route path='/movies/:genre' component={ Movies }/>
          <Route path="/movie/:imdb/:title" component={ Movie } />
          <Route path="" component={ NotFound } /> {/* <Route path="*" /> */}
        </Switch>
      </main>

      <Footer />
    </div>
  </HashRouter>
)

Routes.propTypes = {
  location: PropTypes.object
}

export default Routes;
