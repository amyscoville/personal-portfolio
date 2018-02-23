import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Navbar.css';


export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <Link className="nav-link home" to="/" style={{ display: (this.props.home ? 'none' : 'inline') }}>Home</Link>
                <div className="nav-links">
                    <Link className="nav-link" to="/portfolio" style={{ display: (this.props.portfolio ? 'none' : 'inline') }}>Portfolio</Link>
                    <Link className="nav-link" to="/about" style={{ display: (this.props.about ? 'none' : 'inline') }}>About</Link>
                    <Link className="nav-link" to="/contact" style={{ display: (this.props.contact ? 'none' : 'inline') }}>Contact</Link>
                </div>
            </div>
        )
    }
}
