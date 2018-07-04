// Problem 1 ===================================================================
function addPrice(accum, item) {
  return accum + item.price;
}

let total = (items.reduce(addPrice, 0)/items.length).toFixed(2);
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
let gbpArray = [];

function filterByGBP(item) {
  return item["currency_code"] === "GBP";
}

function printGBPItems(item) {
  console.log(`${item["title"]} costs £${item["price"]}`);
}

gbpArray = items.filter(filterByGBP)
gbpArray.forEach(printGBPItems);

// Problem 4 ===================================================================
let woodArray = [];

function getWood(item) {
  return item.materials.indexOf("wood") !== -1;
}

function printWoodItem(item) {
  console.log(`${item.title} is made of wood.`)
}

woodArray = items.filter(getWood);
woodArray.forEach(printWoodItem);

// Problem 5 ===================================================================
let multiMaterialItems = [];

function getMultiMaterialItem(item) {
  return item.materials.length > 7;
}

function printMaterials(item) {
  console.log(item);
}

function printMultiMaterialItems(item) {
  console.log(`${item.title} has ${item.materials.length} materials:`);
  item.materials.forEach(printMaterials);
}

multiMaterialItems = items.filter(getMultiMaterialItem);
multiMaterialItems.forEach(printMultiMaterialItems);

// Problem 6 ===================================================================
let selfMade = [];

function getSelfMade(item) {
  return item.who_made === "i_did";
}

selfMade = items.filter(getSelfMade);
console.log(`${selfMade.length} were made by their sellers`);
