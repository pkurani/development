import React, {Component} from 'react';
import './index.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


class DisplayList extends Component {
  render() {
    return ((this.props.list.length == 0) ?

    (<div id="productandcard">
      <Row>
        <Col xs={8}><p> No more cars, dumbass! </p></Col>
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
              {item.description}
            </Card.Text>
            <Card.Text className="bodyText">
              <ul>
              <li> Car Type: {item.type}</li>
              <li> Price: ${item.price}</li>
              </ul>
            </Card.Text>
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

class Cart extends Component {
  render() {
    return(
      <div className="rounded secondaryColor p-3 mb-2 text-dark" >
        <h1>Cart</h1>
        <div class ="list-group" id="cart">
          {this.props.allCars.filter(i => (this.props.cart[i.cartID] > 0)).map(item =>
            <ListGroup.Item>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.brand + " " + item.model}</h5>
              <h6 className="mb-1">Price: ${item.price}</h6>
            </div>
            <p className="mb-1">{item.description}</p>
            <div className="d-flex justify-content-center">
              <Button onClick={() => this.props.updateCart(item.cartID,0, false)}>
                -
              </Button>
              <div id="quantity">{this.props.cart[item.cartID]}</div>
              <Button onClick={() => this.props.updateCart(item.cartID,1, false)}>
                +
              </Button>
            </div>
            <div className="d-flex justify-content-center" id="removeFromCart">
              <Button onClick={() => this.props.updateCart(item.cartID,0, true)}>
                Remove From Cart
              </Button>
            </div>
            </ListGroup.Item>
        )}
        </div>
        <ListGroup.Item>
        <div className="d-flex w-100 justify-content-between">
        <CheckoutButton total={this.props.total}/>
          <h5 className="mb-1" id="quantity">Total: ${this.props.total}</h5>
        </div>
        </ListGroup.Item>
      </div>
    )
  };
}

class CheckoutButton extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  displayText(total){
    if (total > 0){
      return "Thank you for buying cars from our site! Your total is: $" + total.toString();
    }
    return "You didn't buy anything!";
  }

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Checkout
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Checkout</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.displayText(this.props.total)} </Modal.Body>
          <Modal.Body> (Hope you liked the site)</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default DisplayList;
