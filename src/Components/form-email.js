import React, { useState } from 'react';
import sendEmail from '../services/email';
import swal from 'sweetalert';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

export default function FormEmail({ PTCNear,
  jr,
  mid,
  sr,
  tech,
  qa,
  engMan,
  month,

  PTCOff,
  POCNear,
  POCOff,
  CVANear,
  CVAOff,
  ORACOff,
  //LDCNear,
  //LDCOff,
  KTCNear,
  KTCOff,
  PTCostNear,
  PTCostOff,
  PLCNear,
  PLCOff,
  RMCNear,
  RMCOff,
  handleClose,

  PTCInHouse,
  TCENear,
  TCEOff }) {

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    if (sendEmail(e) === true) {
      setLoading(false)
      swal("Email Sent!", "", "success").then(() => {
        handleClose()
      });
    } else {
      setLoading(false)
      swal("Error sending the Email!").then(() => {
        handleClose()
      });
    }
  }

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <h2 className="total-price">In-House total cost: <h2 style={{ color: '#0087ff' }}>${PTCInHouse}</h2></h2>
              <h2 className="total-price">Nearshore total cost: <h2 style={{ color: '#0087ff' }}>${TCENear}</h2></h2>
              <h2 className="total-price">Offshore total cost: <h2 style={{ color: '#0087ff' }}>${TCEOff}</h2></h2>
            </div>
            <p className="body-text">Please complete this form below to send you an email with the Total Cost of Engagement.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" name="user_email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Name, Company" name="user_name" minLength="2" required />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PTCInHouse" value={PTCInHouse} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="TCENear" value={TCENear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="TCEOff" value={TCEOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PTCNear" value={PTCNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PTCOff" value={PTCOff} />
              </Form.Group>


              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="POCNear" value={POCNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="POCOff" value={POCOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="CVANear" value={CVANear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="CVAOff" value={CVAOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="ORACOff" value={ORACOff} />
              </Form.Group>
{/*
              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="LDCNear" value={LDCNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="LDCOff" value={LDCOff} />
              </Form.Group>
*/}

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="KTCNear" value={KTCNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="KTCOff" value={KTCOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PTCostNear" value={PTCostNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PTCostOff" value={PTCostOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PLCNear" value={PLCNear} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="PLCOff" value={PLCOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="RMCOff" value={RMCOff} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="RMCNear" value={RMCNear} />
              </Form.Group>


              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="jr" value={jr} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="mid" value={mid} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="sr" value={sr} />
              </Form.Group>
              
              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="tech" value={tech} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="qa" value={qa} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="engMan" value={engMan} />
              </Form.Group>

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="month" value={month} />
              </Form.Group>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="primary" type="submit" value="Send"
                    disabled={isLoading}
                    onSubmit={handleClose}
                  >
                    {isLoading ? 'Sending…' : 'Send'}
                  </Button>
                </Col>
              </Row>
            </Form>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

