import React from 'react'

import github from '../images/tealquoise-github.png'
import linkedin from '../images/tealquoise-linkedin.png'
// import resume from '../images/resume.png'

import '../CSS/Footer.css'

function Footer() {
    let githubStyle = { backgroundImage: `url(${github})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    let linkedinStyle = { backgroundImage: `url(${linkedin})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    // let resumeStyle = { backgroundImage: `url(${resume})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px' }
    return (
        <div className="footer-wrapper">
            <div className="icons">
                <a href="https://github.com/amyscoville" target="_blank" rel="noopener noreferrer" className="nav-icon" style={githubStyle}/>
                <a href="https://www.linkedin.com/in/amy-scoville/" target="_blank" rel="noopener noreferrer" className="nav-icon" style={linkedinStyle}/>
            </div>
        </div>
    )
}

export default Footer
