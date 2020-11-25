import './App.css';
import FilteredList from "./FilteredList.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const productList = [
          {type: "Sedan", price: 30000, brand: "BMW", model:"3 Series", imgID: "/images/BMW_3_Series.png" , cartID: 0, description: "A sleek, stylish car for all your personal and buisness needs"},
          {type: "Sedan", price: 20000, brand: "Honda",  model:"Civic", imgID:"/images/Honda_Civic.png" , cartID: 1, description: "Afforable sedan for those looking for a new upgrade"},
          {type: "Sedan", price: 35000, brand: "Tesla",  model:"Model 3", imgID:"/images/Tesla_Model_3.png" , cartID: 2, description: "An electric car that can take you as far as you can imagine"},
          {type: "Sedan", price: 19500, brand: "Toyota",  model:"Camry", imgID:"/images/Toyota_Camry.png" , cartID: 3, description: "Affordable, reliable car that should last you until little Johnny and Sally graduate college"},
          {type: "Truck", price: 26000, brand: "Ram",  model:"2500", imgID: "/images/Ram_2500.png" , cartID: 4, description: "Baseline truck for those interested in the realm of pickups"},
          {type: "Truck", price: 29000, brand: "Ram",  model:"3500", imgID: "/images/Ram_3500.png" , cartID: 5, description: "If this can't haul everything you need to haul, you should just buy a freight train"},
          {type: "Truck", price: 32000, brand: "Toyota",  model:"Tacoma", imgID: "/images/Toyota_Tacoma.png" , cartID: 6, description: "Dependable truck for those looking to get a better mpg"},
          {type: "Truck", price: 35000, brand: "Ford",  model:"F150", imgID:"/images/Ford_F150.png" , cartID: 7, description: "Have you seen the ads for these? Do I need to say more?"},
          {type: "SUV", price: 43000, brand: "BMW",  model:"X7", imgID: "/images/BMW_X7.png" , cartID: 8, description: "For those looking to flex while driving their kids to Disneyland"},
          {type: "SUV", price: 35000, brand: "Honda",  model:"CR-V", imgID:"/images/Honda_CR-V.png" , cartID: 9, description: "Dependable SUV for all your family-related needs"},
          {type: "SUV", price: 40000, brand: "Toyota",  model:"Highlander", imgID: "/images/Toyota_Highlander.png" , cartID: 10, description: "Another dependable SUV that is guarenteed to make driving fun"},
          {type: "SUV", price: 80000, brand: "Tesla",  model:"Model X", imgID:"/images/Tesla_Model_X.png" , cartID: 11, description: "Electric SUV for those who want to let everyone know they love Elon Musk"},
          {type: "Sport", price: 200000, brand: "Porsche",  model:"Spyder", imgID: "/images/Porsche_Spyder.png" , cartID: 12, description: "Only type of spyder that would make you happy"},
          {type: "Sport", price: 100000, brand: "BMW",  model:"M5", imgID: "/images/BMW_M5.png" , cartID: 13, description: "A car that will cause most other cars (and checkbooks) a run for their money"},
          {type: "Sport", price: 120000, brand: "BMW",  model:"i8", imgID: "/images/BMW_i8.png" , cartID: 14, description: "Essentially a German-engineered Lamborgini. I've gotten a ticket every time I've driven this car"},
          {type: "Sport", price: 230000, brand: "Lamborgini",  model:"Huracan", imgID: "/images/Lamborgini_Huracan.png" , cartID: 15, description: "Just look at the picture. Now look at it again. Need I say more?"}
        ];

  return (
    <div className="App">
  		<FilteredList list={productList} />
  	</div>

  );
}

export default App;
