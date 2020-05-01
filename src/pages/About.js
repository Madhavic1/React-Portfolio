import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Image from "../components/Image";
import ProfilePic from "../madhavi.png"
import Title from "../components/Title";
import AboutText from "../components/AboutText";

function About() {
  return (
 
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-12">
            <Title title="About Me" />
            <Image profilepic={ProfilePic} width="200" />
            <AboutText />
          </Col>
        </Row>
      </Container>
    
  );
}

export default About;
