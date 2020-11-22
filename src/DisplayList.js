import React, {Component} from 'react';
import './index.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'

class DisplayList extends React.Component {

  render() {
    return (
      <div class="row">
        {this.props.list.map(item =>
          <div class="col-sm-4">
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
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </div>
      )}
      </div>
    )
  };
}
export default DisplayList
