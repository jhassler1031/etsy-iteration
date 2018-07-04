// Problem 1 ===================================================================
let count = 0;

function addPrice(accum, item) {
  count++;
  return accum + item["price"];
}

let total = (items.reduce(addPrice, 0)/count).toFixed(2);
console.log(total);

// Problem 2 ===================================================================
let filteredArray = [];

function filterByPrice(item) {
  return item["price"] > 14 && item["price"] < 18;
}

filteredArray = items.filter(filterByPrice);
console.log(filteredArray);

// Problem 3 ===================================================================
