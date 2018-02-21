import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="overlay">
                <div className="home-text">
                    <div className="welcome-text">Hello, I'm <span className="my-name">Amy Scoville</span>.</div>
                    <div className="welcome-text">I'm a full-stack web developer.</div>
                    <Link to="/portfolio" className="see-my-work">See my work <span className="arrow">→</span></Link> 
                </div>
            </div>
        </div>
    )
}

export default Home;
