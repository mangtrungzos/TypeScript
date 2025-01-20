/**
 * Challenge 3: Create a Pizza object type. It should include a `name` and a `price` property
 */
type Pizza = {
    id: number,
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let castInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
    { id: nextPizzaId++,name: "Margherita", price: 8},
    { id: nextPizzaId++,name: "Pepperoni", price: 10},
    { id: nextPizzaId++,name: "Hawaiian", price: 10},
    { id: nextPizzaId++,name: "Veggie", price: 9},
]

// Defensive coding
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza;
}

/**
 * Challenge part 1: Make it so we can use a global variable to track the nextPizzaId
 * and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 * Update the menu items to use this as well so we don't have to manually enter ids 1-4
 * like we're currently doing
 */

/*
* Challenge part 1.5: Try to move the logic for adding an ID to the pizza objects
* inside the addNewPizza func, so that we can call addNewPizza with no id, and
* the func will handle that part for us
*
* NOTE: will run into TS warnings that we'll address soon, but the code should still run
* */

addNewPizza({ name: "Chicken Bacon Ranch", price: 12});
addNewPizza({ name: "BBQ Chicken", price: 12});
addNewPizza({ name: "Spicy Sausage", price: 11});

console.log("Menu:", menu);
// console.log("Cash in register:", castInRegister);
// console.log("Order queue:", orderQueue);

