import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

import Navbar from './Navbar';
import Footer from './Footer';
import PortfolioPiece from './PortfolioPiece'

import portfolio from "../portfolio/portfolio.json";

import '../CSS/Portfolio.css'


class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            imgPath: ''
        }
    }

    toggleModal = (imgPath) => {
        this.setState({
            showModal: !this.state.showModal,
            imgPath
        })
    }

    render() {
        return (
            (this.state.showModal) ?
                <div>
                    <Navbar portfolio></Navbar>
                    <div className="main-portfolio">
                        <h1 className="portfolio-header">PORTFOLIO</h1>
                        <div className="portfolio-content">
                            {portfolio.map((portfolioItem, index) => {
                                return <PortfolioPiece key={index} toggle={this.toggleModal} {...portfolioItem} />
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="modal-wrapper">
                            <Modal className="backdrop-style" keyboard={true} show={this.state.showModal} animation={true}>
                                <div className="image-modal">
                                    <Modal.Dialog>
                                        <Modal.Body className="modal-body" onClick={this.toggleModal}>
                                            <div className="modal-image-wrapper">
                                                <img src={this.state.imgPath} alt="" className="modal-image"/>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button style={{ cursor: "pointer" }} onClick={this.toggleModal} className="close-modal">Close</button>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <Footer />
                </div>
                :
                <div>
                    <Navbar portfolio></Navbar>
                    <div className="main-portfolio">
                        <h1 className="portfolio-header">PORTFOLIO</h1>
                        <div className="portfolio-content">
                            {portfolio.map((portfolioItem, index) => {
                                return <PortfolioPiece key={index} toggle={this.toggleModal} {...portfolioItem} />
                            })}
                        </div>
                    </div>
                    <Footer />
                </div>
        )
    }
}

export default Portfolio

                