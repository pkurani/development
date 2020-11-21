import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DisplayList from "./DisplayList.js"

//import Button from 'react-bootstrap/Button';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "All"
    };
  }

  onSelectFilterSize = event => {
  	this.setState({
  		type: event
  	})
  };

  matchesFilterSize = item => {
	   // all items should be shown when no filter is selected
  	if(this.state.type === "All") {
  		return true
  	} else if (this.state.type === item.type) {
  		return true
  	} else {
  		return false
  	}
  }

  render() {
        return (
          <div>
          <Nav className="mr-auto">
             <NavDropdown title={this.state.type} id="basic-nav-dropdown">
               <NavDropdown.Item eventKey="All" onSelect={this.onSelectFilterSize}>All</NavDropdown.Item>
               <NavDropdown.Item eventKey="Sedan" onSelect={this.onSelectFilterSize}>Sedan</NavDropdown.Item>
               <NavDropdown.Item eventKey="Truck" onSelect={this.onSelectFilterSize}>Truck</NavDropdown.Item>
               <NavDropdown.Item eventKey="SUV" onSelect={this.onSelectFilterSize}>SUV</NavDropdown.Item>
               <NavDropdown.Item eventKey="Sport" onSelect={this.onSelectFilterSize}>Sport</NavDropdown.Item>
             </NavDropdown>
          </Nav>`
          <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>
          </div>
        )
  }
}


export default FilteredList
