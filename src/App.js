import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  constructor(props) {
      super(props);
      this.state = {
        items: [
          {type: "Sedan", price: 30000, brand: "BMW", model:"3 Series"},
          {type: "Sedan", price: 20000, brand: "Honda",  model:"Civic"},
          {type: "Sedan", price: 35000, brand: "Tesla",  model:"Model 3"},
          {type: "Sedan", price: 19500, brand: "Toyota",  model:"Camry"},
          {type: "Truck", price: 26000, brand: "Ram",  model:"2500"},
          {type: "Truck", price: 29000, brand: "Ram",  model:"3500"},
          {type: "Truck", price: 32000, brand: "Toyota",  model:"Tacoma"},
          {type: "Truck", price: 75000, brand: "Tesla",  model:"Cybertruck"},
          {type: "SUV", price: 43000, brand: "BMW",  model:"X7"},
          {type: "SUV", price: 35000, brand: "Honda",  model:"CR-V"},
          {type: "SUV", price: 40000, brand: "Toyota",  model:"Highlander"},
          {type: "SUV", price: 80000, brand: "Tesla",  model:"Model X"},
          {type: "Sport", price: 100000, brand: "BMW",  model:"M5"},
          {type: "Sport", price: 120000, brand: "BMW",  model:"i8"},
          {type: "Sport", price: 200000, brand: "Tesla",  model:"Roadster"},
          {type: "Sport", price: 320000, brand: "McLaren",  model:"720s"},
        ]
      }; 
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
