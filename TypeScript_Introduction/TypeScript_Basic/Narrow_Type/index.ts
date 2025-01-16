/*
* Challenge 7: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 *
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 *
 * (narrow type - check type with typeof obligate in narrow type)
* */

function getPizzaDetail(identifier: string | number) {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name === identifier.toLowerCase());
    } else if(!identifier) {
        throw new Error(``)
    } else {
        return menu.find(pizza => pizza.id === identifier)
    }
}