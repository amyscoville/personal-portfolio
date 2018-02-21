import React from 'react';
import Navbar from './Navbar';

import '../CSS/Portfolio.css'

function Portfolio(props) {
    return (
        <div>
            <Navbar portfolio></Navbar>
            <div className="portfolio-content">
                portfolio page here
            </div>
        </div>
    )
}

export default Portfolio
