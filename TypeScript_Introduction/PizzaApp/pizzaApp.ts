/**
 * Challenge 3: Create a Pizza object type. It should include a `name` and a `price` property
 */
type Pizza = {
    id: number,
    name: string,
    price: number,
}

/*
* Challenge 5: Add an order type. It should have `id`, `pizza`, and `status` properties.
* Look through the code if you need a reminder as to what data types those should be
*
* Challenge 6: using literal types and unions, update the Order status so that
* it can only ever be "ordered" or "completed"
* */

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1,name: "Margherita", price: 8},
    { id: 2,name: "Pepperoni", price: 10},
    { id: 3,name: "Hawaiian", price: 10},
    { id: 4,name: "Veggie", price: 9},
]

let castInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

/*
* Challenge 4: teach TS that the pizzaObj is supposed to be a pizza type
* Then like before, look through the code to see if there are any new
* Ts warnings to deal with, and fix those issues.
* */

// Defensive coding
function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

/* Challenge 1: Write another utility function, placeOrder, that takes a pizza name parameter and:
* 1. finds that pizza object in the menu,
* 2. adds the income to the cashInRegister,
* 3. pushes a new "order object" to the orderQueue
*    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
* 4. returns the new order object (just in case we need it later)
* */

// Defensive coding
function placeOrder(pizzaName: string) {
    // Defensive coding
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName); // replace find to filter
   if (!selectedPizza) {
       console.log(`${pizzaName} does not exist in the menu`);
       return;
   }
    // Defensive coding
    castInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

/**
 * Challenge 2: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId: number) {
    const orderComplete = orderQueue.find(order => order.id === orderId);
    // Defensive coding
    if(!orderComplete) {
        console.error(`${orderId} was not found in the orderQueue`);
        return;
    }
    orderComplete.status = "completed";
    return orderComplete;
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12});
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12});
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11});

placeOrder("BBQ Chicken");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", castInRegister);
console.log("Order queue:", orderQueue);
