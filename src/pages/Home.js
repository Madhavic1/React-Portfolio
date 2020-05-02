import React from 'react'
import Container from '../components/Container'

function Home() {
    return (
        <div>
            <Container >
            <main id="home">
                <h1 className="lg-heading text-white font-weight-normal">
                    Madhavi
            <span className="text-warning"> Mullapudi</span>
                </h1>
                <h3 className="sm-heading text-white font-weight-light">
                    Full Stack Web Developer
                 </h3>

                <div className="icons">
                    <a href="https://github.com/Madhavic1/" target="_blank" rel="noopener noreferrer" title="Github" style={{color:"white"}}>
                        <i className="fab fa-github fa-2x" ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/madhavi-mullapudi-b1a71320" target="_blank"  style={{color:"white"}} rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="Madhavi-Mullapudi-Resume.pdf" target="_blank"  rel="noopener noreferrer"  style={{color:"white"}} title="Resume">
                        <i className="fa fa-file-pdf-o fa-2x"></i>
                    </a>
                </div>
            </main>
            </Container>
        </div>
    )
}

export default Home
