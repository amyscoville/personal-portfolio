import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import headshot from '../images/headshot.jpg';
import '../CSS/About.css';

function About(props) {
    return (
        <div className="about-wrapper">
            <Navbar about></Navbar>
            <h1 className="about-header">ABOUT</h1>
            <div className="about-content-wrapper">
                <img src={headshot} alt="headshot" className="headshot"/>
                <div className="about-text">
                    <p className="about-paragraph">I'm a full stack web developer with experience in JavaScript, HTML5, CSS3, React, Redux + Thunk, AngularJS, Express, MongoDB, and Mongoose. My passion lies in helping people live their most meaningful lives by providing solutions that simplify their lives.</p>
                    <p className="about-paragraph">When I'm not coding, you can usually find me hiking, curled up with a book, eating chocolate, or dancing.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
