// Much of the time, we’ll find ourselves dealing with objects that might have a property set.
// In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names
// It means: the property can be present or absent without causing any errors.

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}

let person1: Person = {
    name: "Ngan",
    age: 22,
    isStudent: true,
}

let person2: Person = {
    name: "Ngan",
    age: 22,
    isStudent: true,
    address: {
        street: "Ba Ria Vung Tau Province",
        city: "Vung Tau",
        country: "Viet Nam"
    }
}

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1);

