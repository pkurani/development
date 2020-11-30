# Development

This project was created using a Bootstrap Framework. Pictures are courtesy of [Kelly Blue Book](https://www.kbb.com/)

## Organization of your components

All components exist in the following classes (in the following order):
App.js --> FilteredList.js -->  DisplayList.js -->  Cart.js

### App.js
App.js is the "main component" that serves as a container for all the other components to exist.
This component includes the list of products that is used by other components, and creates the only instance of a FilteredList component

### FilteredList.js
FilteredList.js includes two components --> A FilteredList component (which is used in the App component) and a TopHeaderBar component (which is only used in the FilteredList component). This component is used to display the NavBar, and is used to store the states that allow users to filter and sort through the list of products without refreshing the page.

The FilteredList component also contains all the states/functions used for filtering and sorting. FilteredList renders the DisplayList Component.

### DisplayList.js
FilteredList.js includes two components --> A DisplayList component (which is used in the FilteredList component) and a ProductDisplay component (which is only used in the DisplayList component). DisplayList is responsible for rendering the list of products (and an error message if no products exist with the filters choosen), along with the cart. The ProductDisplay component is responsible for rendering the cards that fit the selected filters and sorters.

### Cart.js
Cart.js includes the "Cart" component and the CheckoutButton component. Although this could have been included in DisplayList.js, the amount of code used to create the card made it necessary to create another .js file for it. The Cart Component (which is used in the DisplayList component) contains the logic to display the cart and its information, while the CheckoutButton component (used in the Cart component) is used to render the Checkout Button along with the modal that appears when the users clicks checkout.

## How data is passed down through components

As mentioned previously, the App component contains the list of products, while the FilteredList component contains the state data. The list of products is passed into FilteredList in the App component. From there, FilteredList passes down the following information to its children (which are its states):

type
brand
sorted
cart (which is an array that displays how many products are in cart for each car)
cartTotal

All the information is passed down to DisplayList, while the categories used to filter/sort are passed down to TopHeaderBar. From DisplayList, the list of all cars, the current cart, and the total are passed down to the Cart Component. Finally, since the modal that pops up is rendered by the CheckoutButton component, the users total is passed from the Cart component to the CheckoutButton component.



## How user interactions can trigger changes in the state of components

Interactions are used to triggers changes in the states of the FilteredList component. The functions to change state are listed in the FilteredList component. The functions are then passed down to the "children" components. If a certain interaction is toggled i.e sorting, filtering, or adding to cart, the functions are called from the corresponding component, and the state is changes in the  FilteredList component. This allows changes to be saved and the page to be updated without needing to be refreshed.
