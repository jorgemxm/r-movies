'use strict';

import React from 'react';
// import PropTypes from 'prop-types';

import { Header, Footer } from '../components/global';

//-----------------------------------
// Main App
//-----------------------------------
const App = props => (
  <div className="app-container">
    <Header />

    <div className="app-content"> </div>

    <Footer />
  </div>
);

// App.propTypes = propTypes;

export default App;
