// Problem 1 ===================================================================
let count = 0;

function addPrice(accum, item) {
  count++;
  return accum + item["price"];
}

let total = (items.reduce(addPrice, 0)/count).toFixed(2);
console.log(`The average price is $${total}`);

// Problem 2 ===================================================================
let filteredArray = [];

function filterByPrice(item) {
  return item["price"] > 14 && item["price"] < 18;
}

function printItemName(item) {
  console.log(item["title"])
}

filteredArray = items.filter(filterByPrice);
console.log("Items that cost between $14.00 USD and $18.00 USD:")
filteredArray.forEach(printItemName);

// Problem 3 ===================================================================
