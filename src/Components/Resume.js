import React from 'react'
import { Document, Page } from 'react-pdf'

import Navbar from './Navbar'
import Footer from './Footer'

import resume from '../images/resume.pdf'

import '../CSS/Resume.css'


function Resume() {
    const pageNumber = 1;
    return (
        <div className="resume-wrapper">
            <Navbar />
            <Document file={resume} className="main-resume">
                <Page pageNumber={pageNumber} width="800" className="page"/>
            </Document>
            <Footer />
        </div>
    )
}

export default Resume
