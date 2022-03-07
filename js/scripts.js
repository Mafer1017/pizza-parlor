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
  };
  this.cost += this.toppings.length;
  return this.cost
};

// User Interface Logic ------

$(document).ready(function() {
  $("form#pizzaOptions").submit(function(event) {
    event.preventDefault();
    let size = $('input:radio[name=pieSize]:checked').val()
    let selectedToppings = new Array();
    $('input:checkbox[name=topping]:checked').each(function() {
      selectedToppings.push(this.value);
    });
    let newPizza = new Pizza(size, selectedToppings)
    newPizza.pizzaCost();
    $(".totalCost").text("$" + newPizza.cost);
  });
});