// Business Logic

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
  }
  return this.cost;
};


// User Interface Logic ------

$(document).ready(function() {
  $("form#pieSize").submit(function(event) {
    event.preventDefault();
  });
}); 