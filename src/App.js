import './App.css';
import FilteredList from "./FilteredList.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const productList = [
          {type: "Sedan", price: 30000, brand: "BMW", model:"3 Series", imgID: "/images/BMW_3_Series.png"},
          {type: "Sedan", price: 20000, brand: "Honda",  model:"Civic", imgID:"/images/Honda_Civic.png"},
          {type: "Sedan", price: 35000, brand: "Tesla",  model:"Model 3", imgID:"/images/Tesla_Model_3.png"},
          {type: "Sedan", price: 19500, brand: "Toyota",  model:"Camry", imgID:"/images/Toyota_Camry.png"},
          {type: "Truck", price: 26000, brand: "Ram",  model:"2500", imgID: "/images/Ram_2500.png"},
          {type: "Truck", price: 29000, brand: "Ram",  model:"3500", imgID: "/images/Ram_3500.png"},
          {type: "Truck", price: 32000, brand: "Toyota",  model:"Tacoma", imgID: "/images/Toyota_Tacoma.png"},
          {type: "Truck", price: 35000, brand: "Ford",  model:"F150", imgID:"/images/Ford_F150.png"},
          {type: "SUV", price: 43000, brand: "BMW",  model:"X7", imgID: "/images/BMW_X7.png"},
          {type: "SUV", price: 35000, brand: "Honda",  model:"CR-V", imgID:"/images/Honda_CR-V.png"},
          {type: "SUV", price: 40000, brand: "Toyota",  model:"Highlander", imgID: "/images/Toyota_Highlander.png"},
          {type: "SUV", price: 80000, brand: "Tesla",  model:"Model X", imgID:"/images/Tesla_Model_X.png"},
          {type: "Sport", price: 200000, brand: "Porsche",  model:"Spyder", imgID: "/images/Porsche_Spyder.png"},
          {type: "Sport", price: 100000, brand: "BMW",  model:"M5", imgID: "/images/BMW_M5.png"},
          {type: "Sport", price: 120000, brand: "BMW",  model:"i8", imgID: "/images/BMW_i8.png"},
          {type: "Sport", price: 230000, brand: "Lamborgini",  model:"Huracan", imgID: "/images/Lamborgini_Huracan.png"}
        ];

  return (
    <div className="App">
  		<FilteredList list={productList} />
  	</div>

  );
}

export default App;
