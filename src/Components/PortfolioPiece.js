import React from 'react'

import '../CSS/PortfolioPiece.css'

function PortfolioPiece(props) {
    let {name, folder, mainImg, filenames, description, github, toggle} = props;
    return (
        <div className="portfolio-piece-wrapper">
            <h2 className="port-piece-header">{name}</h2>
            <img src={require(`../images/project-screenshots/${folder}/${mainImg}`)} alt="" onClick={() => {toggle(require(`../images/project-screenshots/${folder}/${mainImg}`))}} className="main-image"/>
            <p>{description}</p>
            <div className="smaller-imgs-wrapper">
                {filenames.map((file, index) => {
                    return <img key={index} src={require(`../images/project-screenshots/${folder}/${file}`)} alt="" onClick={() => {toggle(require(`../images/project-screenshots/${folder}/${file}`))}} className="smaller-images"/>
                })}
            </div>
            <a href={github} target="_blank" className="github-link">{github}</a>
        </div>
    )
}

export default PortfolioPiece
