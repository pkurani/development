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
        <Col sm={7}><p> No more cars, dumbass! </p></Col>
        <Col sm={5}></Col>
      </Row>
    </div>):

    (
      <div id="productandcard">
        <Row>
          <Col sm={7}><ProductDisplay list={this.props.list} updateCart={this.props.updateCart}/></Col>
          <Col sm={5}>
          {this.props.total}
          </Col>
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
          <div className="col-sm-12 col-md-6 carCard">
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
            <Button variant="primary" onClick={() => this.props.updateCart(1,1)}>Add to Cart</Button>
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
      <div class="row">
        {this.props.list.map(item =>
          <div class="col-sm-12 col-md-6" id="carCard">
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
