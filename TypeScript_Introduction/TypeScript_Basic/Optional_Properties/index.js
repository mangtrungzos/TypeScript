"use strict";
// Much of the time, we’ll find ourselves dealing with objects that might have a property set.
// In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names
// It means: the property can be present or absent without causing any errors.
let person1 = {
    name: "Ngan",
    age: 22,
    isStudent: true,
};
let person2 = {
    name: "Ngan",
    age: 22,
    isStudent: true,
    address: {
        street: "Ba Ria Vung Tau Province",
        city: "Vung Tau",
        country: "Viet Nam"
    }
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
displayInfo(person1);
