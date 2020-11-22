import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DisplayList from "./DisplayList.js"
import 'bootstrap/dist/css/bootstrap.min.css';


//import Button from 'react-bootstrap/Button';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Select Car Type"
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

  render() {
        return (
          <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Kool Kars</Navbar.Brand>
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
              </Nav>`
          </Navbar>

          <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>
          </div>
        )
  }
}


export default FilteredList
