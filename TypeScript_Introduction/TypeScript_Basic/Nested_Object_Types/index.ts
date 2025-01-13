type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address: Address
}

let person: Person = {
    name: "Ngan",
    age: 22,
    isStudent: true,
    address: {
        street: "Ba Ria Vung Tau Province",
        city: "Vung Tau",
        country: "Viet Nam"
    }
}

console.log(person);
