'use strict'

import React from 'react';
import { Header, Footer } from './components/global';


//-----------------------------------
// Main App - (Stateless Component)
//-----------------------------------
const App = (props) => (
    <div className="app-container">
        <Header />

        <div className="app-content">
            { props.children }
        </div>

        <Footer />
    </div>
)


export default App;
