import React from 'react'
import Title from "../components/Title";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CodeQuiz from "../code_quiz.png";
import Password from "../real_weather2.png";
import WeatherDashboard from "../weatherdashboard.png"
import FindMyDoctor from "../find_doctor.png"
import Developer from "../developer.png"
import Project from '../components/Project';

function Portfolio() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <Title title="Portfolio" />
                        <h4 className="sm-heading display-6">
                            Check out some of my projects...
                            </h4>
                        <Row>
                            <Col size="md-4">
                                <Project image={Developer} title="DevHire Portal" liveUrl="https://immense-brushlands-05326.herokuapp.com/" gitHub="https://github.com/iskona/DevHire.git" screenshot=""/>
                            </Col>
                            <Col size="md-4">
                                <Project image={CodeQuiz} title="Code Quiz" liveUrl="" gitHub=""/>
                            </Col>
                            <Col size="md-4">
                                <Project image={Password} title="Password Generator" liveUrl="" gitHub=""/>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col size="md-4">
                                <Project image={FindMyDoctor} title="Find My Doctor" liveUrl="" gitHub=""/>
                            </Col>
                            <Col size="md-4">
                                <Project image={WeatherDashboard} title="Weather Dashboard" liveUrl="" gitHub=""/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
