import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PortfolioPiece from './PortfolioPiece'

import portfolio from "../portfolio/portfolio.json";

import '../CSS/Portfolio.css'


function Portfolio(props) {
    return (
        <div>
            <Navbar portfolio></Navbar>
            <div className="main-portfolio">
                <h1 className="portfolio-header">PORTFOLIO</h1>
                <div className="portfolio-content">
                    {portfolio.map(portfolioItem => {
                        return <PortfolioPiece {...portfolioItem}/>
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
