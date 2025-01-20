// Generics Type:

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kitchen", "bright copper kettles", "warm woolen mittens"];

const voters = [{ name: "Ngan", age: 22 }, { name: "Sang" , age: 22 }];

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));