import React from 'react'
import '../CSS/PortfolioPiece.css'

function ProtfolioPiece(props) {
    let {name, folder, mainImg, filenames, description, github} = props;
    return (
        <div className="portfolio-piece-wrapper">
            <h2>{name}</h2>
            <img src={require(`../images/project-screenshots/${folder}/${mainImg}`)} alt="" className="main-image"/>
            <p>{description}</p>
            <div className="smaller-imgs-wrapper">
                {filenames.map((file, index) => {
                    return <img key={index} src={require(`../images/project-screenshots/${folder}/${file}`)} alt="" className="smaller-images"/>
                })}
            </div>
            <a href={github} target="_blank" className="github-link">{github}</a>
        </div>
    )
}

export default ProtfolioPiece;
