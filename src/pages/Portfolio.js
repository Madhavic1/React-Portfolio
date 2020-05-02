import React from 'react'
import Title from "../components/Title";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from '../components/Project';
import DevHire  from "../developer.png"
import EmployeeDirectory from "../Directory.png"
import FindMyDoctor from "../find_doctor.png"
import CodeQuiz from "../code_quiz.png"
import WeatherDashboard from "../real_weather2.png"
import NoteTaker from "../notetaker.png"
import Devhirescreenshot from "../devhire.png"
import EmployeeDirectoryscreenshot from "../empDirectory.png"
import FindMyDoctorScreenshot from "../Find-my-doctor.png"
import CodeQuizScreenShot from "../Coding-quiz.png"
import WeatherDashboardScreenShot from "../weatherdashboard.png"
import NoteTakerscreenshot from "../noteTakerscreenshot.png"

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
                                <Project image={DevHire} title="DevHire Portal" liveUrl="https://immense-brushlands-05326.herokuapp.com/" gitHub="https://github.com/iskona/DevHire.git" screenshot={Devhirescreenshot}/>
                            </Col>
                            <Col size="md-4">
                                <Project image={EmployeeDirectory} title="Employee Directory" liveUrl="https://madhavic1.github.io/React-User-Directory/" gitHub="https://github.com/Madhavic1/React-User-Directory.git" screenshot={EmployeeDirectoryscreenshot}/>
                            </Col>
                            <Col size="md-4">
                                <Project image={FindMyDoctor} title="Find My Doctor" liveUrl="https://sarahm16.github.io/FindMyDoctor/" gitHub="https://github.com/sarahm16/FindMyDoctor.git" screenshot={FindMyDoctorScreenshot}/>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                        <Col size="md-4">
                            <Project image={CodeQuiz} title="Code Quiz" liveUrl="https://madhavic1.github.io/CodeQuiz/" gitHub="https://github.com/Madhavic1/CodeQuiz.git" screenshot={CodeQuizScreenShot}/>
                            </Col>
                        <Col size="md-4">
                                <Project image={WeatherDashboard} title="Weather Dashboard" liveUrl="https://madhavic1.github.io/Weather-Dashboard/" gitHub="https://github.com/Madhavic1/Weather-Dashboard.git" screenshot={WeatherDashboardScreenShot}/>
                            </Col>
                            <Col size="md-4">
                                <Project image={NoteTaker} title="Note Taker" liveUrl="https://desolate-depths-02317.herokuapp.com/" gitHub="https://github.com/Madhavic1/Note-Taker.git" screenshot={NoteTakerscreenshot}/>
                            </Col>
                  
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Portfolio
