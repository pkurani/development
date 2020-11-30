import React, {Component} from 'react';
import './index.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


/* Here, the cart is rendered */
class Cart extends Component {
  render() {
    return(
      <div className="rounded secondaryColor p-3 mb-2 text-dark" >
        <h1>Cart</h1>
        <div className="list-group" id="cart">
          {this.props.allCars.filter(i => (this.props.cart[i.cartID] > 0)).map(item =>
            <ListGroup.Item key={item.cartID}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.brand + " " + item.model}</h5>
              <h6 className="mb-1">Price: ${item.price}</h6>
            </div>
            <p className="mb-1">{item.description}</p>
            <div className="d-flex justify-content-center">
              {/* Remove Elements from Cart*/}
              <Button onClick={() => this.props.updateCart(item.cartID,0, false)}>
                -
              </Button>
              <div id="quantity">{this.props.cart[item.cartID]}</div>
              {/* Add Elements to Cart*/}
              <Button onClick={() => this.props.updateCart(item.cartID,1, false)}>
                +
              </Button>
            </div>
            <div className="d-flex justify-content-center" id="removeFromCart">
              {/* Remove all instances of car from cart*/}
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

class CheckoutButton extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

  /* Modal is not rendered */
	handleClose() {
		this.setState({ show: false });
	}

  /* Modal is rendered */
	handleShow() {
		this.setState({ show: true });
	}

  /* Responsible for rendering contents of modal */
  displayText(total){
    if (total > 0){
      return "Thank you for buying cars from our site! Your total is: $" + total.toString();
    }
    return "You didn't buy anything!!!!";
  }

	render() {
		return (
      <div>
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
      </div>
		);
	}
}

export default Cart;
