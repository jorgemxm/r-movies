'use strict';

import React from 'react';
import { Header, Footer } from './components/global';


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

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default App;
