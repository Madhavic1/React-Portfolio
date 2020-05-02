import React from 'react'
import Title from "../components/Title";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from '../components/Project';

function Portfolio() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <Title title="Portfolio" />
                        <h4 className="sm-heading display-6 text-white font-weight-normal" style={{fontSize:"large"}}>
                            Check out some of my projects...
                            </h4>
                        <Row>
                            <Col size="md-4">
                                <Project image="/images/developer.png" title="DevHire Portal" liveUrl="https://immense-brushlands-05326.herokuapp.com/" gitHub="https://github.com/iskona/DevHire.git" screenshot="/images/devhire.png"/>
                            </Col>
                            <Col size="md-4">
                                <Project image="/images/Directory.png" title="Employee Directory" liveUrl="https://madhavic1.github.io/React-User-Directory/" gitHub="https://github.com/Madhavic1/React-User-Directory.git" screenshot="/images/empDirectory.png"/>
                            </Col>
                            <Col size="md-4">
                                <Project image="/images/find_doctor.png" title="Find My Doctor" liveUrl="https://sarahm16.github.io/FindMyDoctor/" gitHub="https://github.com/sarahm16/FindMyDoctor.git" screenshot="/images/Find-my-doctor.png"/>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                        <Col size="md-4">
                                <Project image="/images/code_quiz.png" title="Code Quiz" liveUrl="https://madhavic1.github.io/CodeQuiz/" gitHub="https://github.com/Madhavic1/CodeQuiz.git" screenshot="/images/Coding-quiz.png"/>
                            </Col>
                        <Col size="md-4">
                                <Project image="/images/real_weather2.png" title="Weather Dashboard" liveUrl="https://madhavic1.github.io/Weather-Dashboard/" gitHub="https://github.com/Madhavic1/Weather-Dashboard.git" screenshot="/images/weatherdashboard.png"/>
                            </Col>
                            <Col size="md-4">
                                <Project image="/images/notetaker.png" title="Note Taker" liveUrl="https://desolate-depths-02317.herokuapp.com/" gitHub="https://github.com/Madhavic1/Note-Taker.git" screenshot="/images/noteTakerscreenshot.png"/>
                            </Col>
                  
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Portfolio
