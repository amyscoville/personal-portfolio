import React from 'react'
import github from '../images/tealquoise-github.png';
import linkedin from '../images/tealquoise-linkedin.png';
import resume from '../images/resume.png';

import '../CSS/Footer.css'

function Footer() {
    let githubStyle = {backgroundImage: `url(${github})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45px', width: '45px'}
        let linkedinStyle = {backgroundImage: `url(${linkedin})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45px', width: '45px'}
        let resumeStyle = {backgroundImage: `url(${resume})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45px', width: '45px'}
    return (
        <div className="footer-wrapper">
            <div className="icons">
                <div className="nav-icon" style={githubStyle}></div>
                <div className="nav-icon" style={linkedinStyle}></div>
                <div className="nav-icon" style={resumeStyle}></div>
            </div>
        </div>
    )
}

export default Footer
