import React, {Component} from 'react';
import './index.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DisplayList extends Component {
  render() {
    return ((this.props.list.length == 0) ?

    (<div id="productandcard">
      <Row>
        <Col xs={8}><p> No more cars, dumbass! </p></Col>
        <Col xs={4}></Col>
      </Row>
    </div>):

    (
      <div id="productandcard">
        <Row>
          <Col xs={8}><ProductDisplay list={this.props.list} updateCart={this.props.updateCart}/></Col>
          <Col xs={4}><Cart list={this.props.list} updateCart={this.props.updateCart}/></Col>
        </Row>
      </div>
    ))
  };
}

class ProductDisplay extends Component {
  render() {
    return(
      <div className="row">
        {this.props.list.map(item =>
          <div className="col-md-6 col-lg-4" id="carCard">
        <Card>
          <Card.Img src={item.imgID} id="productImg"/>
          <Card.Body>
            <Card.Title>{item.brand + " " + item.model} </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => this.props.updateCart(item.cartID,1)}>Add to Cart</Button>
          </Card.Footer>
        </Card>
        </div>
      )}
      </div>
    )
  };
}

class Cart extends Component {
  render() {
    return(
      <div class="row" id="cart">
        {this.props.list.map(item =>
          <div class="col-xs-12 col-md-6" id="carCard">
        <Card>
          <Card.Img src={item.imgID} id="productImg"/>
          <Card.Body>
            <Card.Title>{item.brand + " " + item.model} </Card.Title>
            <Card.Text>
              hi.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Add to Cart</Button>{' '}
          </Card.Footer>
        </Card>
        </div>
      )}
      </div>
    )
  };
}
export default DisplayList;
