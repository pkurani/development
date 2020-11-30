import React, {Component} from 'react';
import './index.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from "./Cart.js"



class DisplayList extends Component {
  render() {
    return ((this.props.list.length == 0) ?
    (<div id="productandcard">
    {/* If total list == 0, indicate that no cars match the selected filters while rendering the cart as well */}
      <Row>
        <Col xs={8}><p> No cars match the filters selected. </p></Col>
        <Col xs={4}><Cart allCars={this.props.allCars} updateCart={this.props.updateCart} cart={this.props.cart} total={this.props.total}/></Col>
      </Row>
    </div>):

    (
      <div id="productandcard">
        <Row>
          <Col xs={8}><ProductDisplay list={this.props.list} updateCart={this.props.updateCart}/></Col>
          <Col xs={4}><Cart allCars={this.props.allCars} updateCart={this.props.updateCart} cart={this.props.cart} total={this.props.total}/></Col>
        </Row>
      </div>
    ))
  };
}

/* ProductDisplay renders all products based on filters/sorters */
class ProductDisplay extends Component {
  render() {
    return(
      <div className="row">
        {/* Renders each card here */}
        {this.props.list.map(item =>
          <div className="col-md-6 col-lg-4" key={item.imgID} id="carCard">
        <Card>
          <Card.Img src={item.imgID} id="productImg"/>
          <Card.Body>
            <Card.Title>{item.brand + " " + item.model} </Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
              <ul className="bodyText">
              <li> Car Type: {item.type}</li>
              <li> Price: ${item.price}</li>
              </ul>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => this.props.updateCart(item.cartID,1, false)}>Add to Cart</Button>
          </Card.Footer>
        </Card>
        </div>
      )}
      </div>
    )
  };
}
export default DisplayList;
