let age: number[] = [100, 101];

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
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
}

/*
* Challenge: create an array of people objects and manually type it as an array of Person types
* */

let people: Person[] = [person1, person2];