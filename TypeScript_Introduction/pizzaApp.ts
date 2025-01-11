const menu = [
    { name: "Margherita", price: 8},
    { name: "Pepperoni", price: 10},
    { name: "Hawaiian", price: 10},
    { name: "Veggie", price: 9},
]

let castInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

// Write another utility function, placeOrder, that takes a pizza name parameter and:
// * 1. finds that pizza object in the menu,
// * 2. adds the income to the cashInRegister,
// * 3. pushes a new "order object" to the orderQueue
// *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
// * 4. returns the new order object (just in case we need it later)

function placeOrder(pizzaName) {
   const selectedPizza = menu.filter(pizzaObj => pizzaObj.name === pizzaName);
   if (!selectedPizza) {
       console.log(`${pizzaName} does not exist in the menu`);
       return;
   }
    castInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
    const orderComplete = orderQueue.filter(order => order.id === orderId);
    orderComplete.status = "completed";
    return orderComplete;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12});
addNewPizza({ name: "BBQ Chicken", price: 12});
addNewPizza({ name: "Spicy Sausage", price: 11});

placeOrder("BBQ Chicken");
completeOrder("2");

console.log("Menu:", menu);
console.log("Cash in register:", castInRegister);
console.log("Order queue:", orderQueue);
