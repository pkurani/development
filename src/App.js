import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from "./FilteredList.js"
import Nav from 'react-bootstrap/Navbar'




function App() {
  const productList = [
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
        ];

  return (
    <div className="App">
  		<FilteredList list={productList} />
      <p>hi</p>
  	</div>

  );
}

export default App;
