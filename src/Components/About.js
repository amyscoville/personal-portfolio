import React from 'react';
import Navbar from './Navbar';

import headshot from '../images/headshot.jpg';
import '../CSS/About.css';

function About(props) {
    return (
        <div className="about-wrapper">
            <Navbar about></Navbar>
            <h1 className="about-header">ABOUT</h1>
            <div className="about-content-wrapper">
                <img src={headshot} alt="headshot" className="headshot"/>
                <div>
                    <p className="about-paragraph">Here is a place I will say something about myself and it will be clever and witty and also make people want to hire me. In just one or two sentences.</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Redux + Thunk</li>
                        <li>AngularJS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
