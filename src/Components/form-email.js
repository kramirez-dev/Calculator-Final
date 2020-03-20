import React, { useState } from 'react';
import sendEmail from '../services/email';
import swal from 'sweetalert';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container, Accordion, Card, Table } from 'react-bootstrap';

export default function FormEmail({ PTCNear, jr, mid, sr, tech, qa, month,
  PTCOff, POCNear, POCOff, CVANear, CVAOff, ORACOff, ORACNear, KTCNear, KTCOff, PTCostNear, PTCostOff, PLCNear, PLCOff, RMCNear, RMCOff, handleClose,
  PTCInHouse, TCENear, TCEOff }) {

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
              <h3 className="total-price">In-House total cost: <h3 style={{ color: '#0087ff' }}>${PTCInHouse}</h3></h3>
              <h3 className="total-price">Nearshore total cost: <h3 style={{ color: '#0087ff' }}>${TCENear}</h3></h3>
              <h3 className="total-price">Offshore total cost: <h3 style={{ color: '#0087ff' }}>${TCEOff}</h3></h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <Accordion>
                <Accordion.Toggle as={Button} size="sm" variant="primary" eventKey="0" >
                  Team Composition
                   </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row >
                      <Col md={2}></Col>
                      <Col md={8}>
                        <Table className="resp-table2 center" bordered size="sm">
                          <thead className="tex-white">
                            <tr className="color">
                              <th>Role</th>
                              <th>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Lead Developer</td>
                              <td>{tech}</td>
                            </tr>
                            <tr>
                              <td>Senior Developer</td>
                              <td>{sr}</td>
                            </tr>
                            <tr>
                              <td>Mid-Level Developer</td>
                              <td>{mid}</td>
                            </tr>
                            <tr>
                              <td>Junior Developer</td>
                              <td>{jr}</td>
                            </tr>
                            <tr>
                              <td>QA Engineer</td>
                              <td>{qa}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </div>
            <p className="body-text">Please complete the form below to send you an email with the Total Cost of Engagement and the Team Composition</p>
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

              <Form.Group controlId="formBasicTotal" hidden={true}>
                <Form.Control type="text" name="ORACNear" value={ORACNear} />
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
                <Form.Control type="text" name="month" value={month} />
              </Form.Group>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="primary" size="md" type="submit" value="Send"
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

