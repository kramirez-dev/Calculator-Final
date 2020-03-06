import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import sendEmail from '../services/email';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

function redirect(e){
 sendEmail(e)
}

class FormEmail extends Component {

  fetchData = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  constructor(props){
    super(props)
    this.state={
        send: true,
        loading: false
      };
  }

  render(){
    return (
      <div>
        <Container>
      <Row>
        <Col>
        <div style={{ textAlign: "center" }}>
          <h2 className="total-price">In-House total cost: <h2 style={{ color: '#0087ff' }}>${this.props.PTCInHouse}</h2></h2>
          <h2 className="total-price">Nearshore total cost: <h2 style={{ color: '#0087ff' }}>${this.props.TCENear}</h2></h2>
          <h2 className="total-price">Offshore total cost: <h2 style={{ color: '#0087ff' }}>${this.props.TCEOff}</h2></h2>
          </div>
          <p className="body-text">Please complete this form below to send you an email with your Total cost of Engagement.</p>
        <Form onSubmit={redirect}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email Address" name="user_email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Company or Name"  name="user_name" minLength="2" required/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PTCInHouse" value={this.props.PTCInHouse}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text" name="TCENear" value={this.props.TCENear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="TCEOff" value={this.props.TCEOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PTCNear" value={this.props.PTCNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PTCOff" value={this.props.PTCOff}/>
          </Form.Group>


          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="POCNear" value={this.props.POCNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="POCOff" value={this.props.POCOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="CVANear" value={this.props.CVANear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="CVAOff" value={this.props.CVAOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="ORACOff" value={this.props.ORACOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="LDCNear" value={this.props.LDCNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="LDCOff" value={this.props.LDCOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="KTCNear" value={this.props.KTCNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="KTCOff" value={this.props.KTCOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PTCostNear" value={this.props.PTCostNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PTCostOff" value={this.props.PTCostOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PLCNear" value={this.props.PLCNear}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="PLCOff" value={this.props.PLCOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="RMCOff" value={this.props.RMCOff}/>
          </Form.Group>

          <Form.Group controlId="formBasicTotal" hidden={true}>
            <Form.Label>Total</Form.Label>
            <Form.Control type="text"   name="RMCNear" value={this.props.RMCNear}/>
          </Form.Group>


          <Row>
          <Col style={{ textAlign: "center" }}>
         <Button variant="primary" type="submit" value="Send"
           disabled={this.state.loading} >
          { !this.state.loading && <span>Send</span> }
          { this.state.loading && <span>Sendig</span> }
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