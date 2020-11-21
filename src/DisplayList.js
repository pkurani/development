import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
//import Button from 'react-bootstrap/Button';

class DisplayList extends React.Component {

  render() {
    return (
      <div>
        {this.props.list.map(item =>
        <li>{item.model}, {item.type}</li>)}
      </div>
    )
  };
}

export default DisplayList
