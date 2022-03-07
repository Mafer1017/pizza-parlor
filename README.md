# Pizza Parlor

##### By: Marcus Ferreira

#### A website that allows users to create pizzas and see the cost.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Setup/Installation Requirements

* Clone or download this repository onto your desktop
* Navigate to top-level of directory
* Open index.html in the browser of your choice

## Tests:

#### Describe: Pizza()

- Test: "It should return a Pizza object with two properties for size and toppings
- Code: const myPizza = new Pizza("large", ["pepperoni", "pineapple"])
- Expected Output: Pizza {size: 'large', toppings: ['pepperoni', 'pineapple'], cost: 0}
---
#### Describe: Pizza.prototype.pizzaCost

- Test: "It should return a price of 20 when the user inputs a large size"
- Code: const myPizza = new Pizza("large", [])
- myPizza.pizzaCost()
- Expected Output: 20
---
- Test: "It should return a price of 15 when the user inputs a medium size."
- Code: const myPizza = new Pizza("medium", [])
- myPizza.pizzaCost()
- Expected Output: 15
---
- Test: "It should add cost to the pizza depending on the number of toppings added."
- Code: const myPizza = new Pizza("large", ["pepperoni", "pineapple"])
- myPizza.pizzaCost()
- Expected Output: 22
---

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 2021 Marcus Ferreira