import React from 'react'
import { Link } from 'react-router-dom'

import github from '../images/tealquoise-github.png'
import linkedin from '../images/tealquoise-linkedin.png'
import resume from '../images/resume.png'

import '../CSS/Footer.css'

function Footer() {
    let githubStyle = { backgroundImage: `url(${github})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    let linkedinStyle = { backgroundImage: `url(${linkedin})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    let resumeStyle = { backgroundImage: `url(${resume})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    return (
        <div className="footer-wrapper">
            <div className="icons">
                <a href="https://github.com/amyscoville" target="_blank" className="nav-icon" style={githubStyle}/>
                <a href="https://www.linkedin.com/in/amy-scoville/" target="_blank" className="nav-icon" style={linkedinStyle}/>
                {/* <Link className="nav-icon" to="/resume" style={resumeStyle}/> */}
            </div>
        </div>
    )
}

export default Footer
