// Business Logic

function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
};


Pizza.prototype.newPizza = function () {
  const pizzaInput = $("input#pieSize" + "input#toppings").val();
}

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
  $("form#pieSize").submit(function(event) {
    event.preventDefault();
  });
  $("form#toppings").submit(function(event){
    event.preventDefault();
    const outputTotal = newPizza.pizzaCost()
    $("#show-result").text("Your Pizza will cost: $ " + outputTotal);
  });
}); 