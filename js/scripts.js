// Business Logic ------


function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
};

Pizza.prototype.pizzaCost = function () {
  if (this.size === "small") {
    this.cost += 12;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else if (this.size === "large") {
    this.cost += 20;
  }if(this.toppings.includes("pepperoni")) {
    this.cost += 1;
  };
  if(this.toppings.includes("extraCheese")) {
    this.cost += 1;
  };
  if(this.toppings.includes("olives")) {
    this.cost += 1;
  };
  if(this.toppings.includes("pineapple")) {
    this.cost += 1;
  };
  if(this.toppings.includes("peppercinis")) {
    this.cost += 1;
  };     
  if(this.toppings.includes("sausage")) {
    this.cost += 1;
  };
  if(this.toppings.includes("jalapenos")) {
    this.cost += 1;
  };
  return this.cost;
};

// User Interface Logic ------

$(document).ready(function() {
  $("form#pizzaOptions").submit(function(event) {
    event.preventDefault();
    let size = $('input[name=pieSize]:checked').val()
    let toppings = $('input[name=topping]:checked').val()
    });
    let newPizza = new Pizza(size, toppings)
    let price = newPizza.pizzaCost();
    $("button#submit").click(function() {
    
    $("#show-result").text("Your Pizza will cost: $ " + price);
  });