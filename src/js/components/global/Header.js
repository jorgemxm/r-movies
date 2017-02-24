'use strict'

import React from 'react';
import { Link } from 'react-router';

//-----------
export const Header = (props) => (
    <nav className="nav has-shadow" role="navigation">
        <div className="container">
            <div className="nav-left">
                <Link className="nav-item is-brand" to="/">
                    <span className="icon is-medium button is-warning">
                        <i className="fa fa-bolt"></i>
                    </span>
                    <strong className="">R-Movies</strong>
                </Link>
            </div>

            <div className="column component-search --nav-center">
                <div className="control is-grouped nav-item">
                    <div className="control is-grouped is-expanded">
                        <input className="input" type="text" placeholder="Find a Movie..." />
                        <button className="button">
                            <span className="text-hide">Search</span>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

            <span id="nav-toggle" className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div id="nav-menu" className="nav-right nav-menu">
                <div className="nav-item">
                    <Link className="button" to="/">By Title</Link>
                    <Link className="button" to="/">By Year</Link>
                </div>

                <Link className="is-hidden nav-item" to="/trailers">
                    <span>Trailers</span>
                    <span className="tag is-small is-success">New!</span>
                </Link>
            </div>
        </div>
    </nav>
)
