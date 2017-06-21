'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../components/global';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

//-----------------------------------
// Main App
//-----------------------------------
const App = props => (
  <div className="app-container">

    <Header />

    <div className="app-content">
      { props.children }
    </div>

    <Footer />
  </div>
);

App.propTypes = propTypes;

export default App;
