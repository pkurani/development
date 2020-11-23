import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DisplayList from "./DisplayList.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



//import Button from 'react-bootstrap/Button';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.state = {
      type: "Select Car Type",
      brand: "Select Car Brand",
      sorted: "Sort By",
      cart: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      cartTotal: 0
    };
  }

  onSelectFilterSize = event => {
  	this.setState({
  		type: event
  	})
  };

  matchesFilterSize = item => {
	   // all items should be shown when no filter is selected
  	if(this.state.type === "All" || this.state.type === "Select Car Type") {
  		return true
  	} else if (this.state.type === item.type) {
  		return true
  	} else {
  		return false
  	}
  }

  onSelectCarBrand = event => {
  	this.setState({
  		brand: event
  	})
  };

  matchesCarBrand = item => {
	   // all items should be shown when no filter is selected
  	if(this.state.brand === "All" || this.state.brand === "Select Car Brand") {
  		return true
  	} else if (this.state.brand === item.brand) {
  		return true
  	} else {
  		return false
  	}
  }

  onSelectSorted = event => {
  	this.setState({
  		sorted: event
  	})
  };

  sortBy(list, currState){
    if (currState === "Price Low to High"){
      return list.sort((a, b) => {
            return a.price - b.price;
        });
    } else if  (currState === "Price High to Low") {
      return list.sort((a, b) => {
            return b.price - a.price;
        });
    } else{
      return list;
    }
  }

  updateCart(index, addOrRemove){
    console.log(this.state.cart);
    if (addOrRemove === 0 && this.state.cart[index] > 0){
      this.state.cart[index] = this.state.cart[index] - 1;
      this.state.cartTotal = this.state.cartTotal - this.props.list[index].price
    } else{
      this.state.cart[index] = this.state.cart[index] + 1;
      this.state.cartTotal = this.state.cartTotal + this.props.list[index].price
    }
  }

  render() {
    const fandsProducts = this.sortBy(this.props.list.filter(this.matchesFilterSize).filter(this.matchesCarBrand), this.state.sorted)
        return (
          <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Cool Cars</Navbar.Brand>
              <Nav className="mr-auto">
                 <NavDropdown title={this.state.type} id="nav-dropdown">
                   <NavDropdown.Item eventKey="disabled" disabled>Select Car Type</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item eventKey="All" onSelect={this.onSelectFilterSize}>All</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Sedan" onSelect={this.onSelectFilterSize}>Sedan</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Truck" onSelect={this.onSelectFilterSize}>Truck</NavDropdown.Item>
                   <NavDropdown.Item eventKey="SUV" onSelect={this.onSelectFilterSize}>SUV</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Sport" onSelect={this.onSelectFilterSize}>Sport</NavDropdown.Item>
                 </NavDropdown>

                 <NavDropdown title={this.state.brand} id="nav-dropdown">
                   <NavDropdown.Item eventKey="disabled" disabled>Select Car Brand</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item eventKey="All" onSelect={this.onSelectCarBrand}>All</NavDropdown.Item>
                   <NavDropdown.Item eventKey="BMW" onSelect={this.onSelectCarBrand}>BMW</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Ford" onSelect={this.onSelectCarBrand}>Ford</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Honda" onSelect={this.onSelectCarBrand}>Honda</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Lamborgini" onSelect={this.onSelectCarBrand}>Lamborgini</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Porsche" onSelect={this.onSelectCarBrand}>Porsche</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Ram" onSelect={this.onSelectCarBrand}>Ram</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Tesla" onSelect={this.onSelectCarBrand}>Tesla</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Toyota" onSelect={this.onSelectCarBrand}>Toyota</NavDropdown.Item>
                 </NavDropdown>

                 <NavDropdown title={this.state.sorted} id="nav-dropdown">
                   <NavDropdown.Item eventKey="disabled" disabled>Sort By</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item eventKey="Don't Sort" onSelect={this.onSelectSorted}>Don't Sort</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Price Low to High" onSelect={this.onSelectSorted}>Price Low to High</NavDropdown.Item>
                   <NavDropdown.Item eventKey="Price High to Low" onSelect={this.onSelectSorted}>Prive High to Low</NavDropdown.Item>
                 </NavDropdown>

              </Nav>`
          </Navbar>

          <DisplayList list={fandsProducts} updateCart={this.updateCart} cart={this.state.cart} total={this.state.cartTotal}/>

          </div>
        )
  }
}


export default FilteredList
