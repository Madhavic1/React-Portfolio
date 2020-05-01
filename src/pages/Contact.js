import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <Title title="Contact" />
            <ContactDetails label="Email:" value="madhavi.0108@gmail.com" />
            <ContactDetails label="Phone:" value="425-614-5151" />
            <ContactForm />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
