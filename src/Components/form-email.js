import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import sendEmail from '../services/email';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

class FormEmail extends Component {

  constructor(props){
    super(props)
    this.state={
        send: true
      };
  }

  render(){
    return (
      <div>
        <Container>
      <Row>
        <Col>
          <h1 className="body-title">More Info</h1>
          <h2 className="total-price">In-House total cost :<br></br>${this.props.PTCInHouse}</h2>
          <h2 className="total-price">Nearshore total cost :<br></br>${this.props.TCENear}</h2>
          <h2 className="total-price">Offshore total cost :<br></br>${this.props.TCEOff}</h2>
          <p className="body-text">Please complete this form below to send an email with your cost and keep contact</p>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name | Company</Form.Label>
            <Form.Control type="text" placeholder="Enter Company or Name"  name="user_name" required/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" placeholder="Total price"  name="total" value={this.props.PTCInHouse}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" placeholder="Total price"  name="total2" value={this.props.TCENear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" placeholder="Total price"  name="total3" value={this.props.TCEOff}/>
          </Form.Group>

          <Row>
          <Col>
         <Button variant="primary" type="submit" value="Send">
              Submit
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
}

export default FormEmail