function logArray<T>(items: T[]) {
    items.forEach(item => console.log(item));
}

console.log(logArray([1, 2, 3]));  // Mảng số
console.log(logArray(["a", "b", "c"]));  // Mảng chuỗi
