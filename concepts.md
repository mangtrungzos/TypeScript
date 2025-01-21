# What we learned:
1. Basic, literal, and custom type
2. Optional properties
3. Unions
4. Type Narrowing
5. Utility Type
6. Generics

* defining custom types

# Omit Type:
* là một utility type được sử dụng để tạo ra một loại mới từ một loại ban đầu bằng cách loại bỏ (omit) một số thuộc tính nhất định. 
```
Omit<T, K>
```
* T là loại (type) ban đầu.
* K là tập hợp các thuộc tính của T mà muốn loại bỏ.
```ts
interface Person {
    name: string;
    age: number;
    email: string;
}

//  tạo một loại mới từ Person mà loại bỏ thuộc tính email:
type PersonWithoutEmail = Omit<Person, 'email'>;
const person: PersonWithoutEmail = {
    name: 'John',
    age: 30
    // email: 'john@example.com' // Lỗi, vì email đã bị loại bỏ
};
```
# Generics Type:
* 1. Generics<T>
* 2. Add flexibility to existing functions, types, etc.
* 3. Act like function parameters, but for types.

* Generics (kiểu tổng quát) cho phép bạn tạo các thành phần có thể làm việc với nhiều loại dữ liệu khác nhau mà không làm mất đi tính an toàn của kiểu dữ liệu.
* Không cần phải xác định trước kiểu dữ liệu cụ thể.
```ts
// basic syntax:
function identity<T>(arg: T): T {
  return arg;
}
```
* T là một tham số kiểu (type parameter).
* identity là một hàm nhận vào một đối số có kiểu là T và trả về giá trị có cùng kiểu T
```
Use with:
* Array
* Interface
* Class
* Constaints (ràng buộc)
```
* Benefits: 
1. An toàn kiểu dữ liệu: Phát hiện lỗi về kiểu ngay tại thời điểm biên dịch.
2. Tái sử dụng: Viết một lần, dùng cho nhiều loại dữ liệu khác nhau.
3. Linh hoạt: Dễ dàng thay đổi kiểu mà không cần viết lại mã.

```ts
function indentify<T>(value: T): T {
    return value;
}

// Dùng Generics
identity(123);          // OK: T là number
identity("Hello");      // OK: T là string
identity(true);         // OK: T là boolean

// Nếu cố tình truyền sai kiểu
identity<number>("Test"); // Error: "Test" không phải là number
```
# Union Type (|):
*Type alias là một cách để đặt tên cho một kiểu dữ liệu cụ thể.*
* Kết hợp các kiểu.
* Định nghĩa một biến hoặc giá trị có thể thuộc một trong nhiều kiểu dữ liệu khác nhau.
* type = ... | ... | ...;
```ts
type ID = number | string;

let userId: ID = 2002; // valid
userId = "Ngan"; // valid
```
* Check type in Union type - `typeof`
```ts
function values(value: number | string) {
  if (typeof value === "number") {
    console.log(`Number: ${value}`);
  } else {
    console.log(`String: ${value}`);
  }
}
```
# Alias Type:
*type alias là một cách để đặt tên cho một kiểu dữ liệu cụ thể.*
*Or là một cách để gán một tên cho một kiểu dữ liệu*

* Type để định nghĩa một union type và đặt tên cho nó.
```ts
type ID = number | string;

let userId: ID = 123;    // valid
userId = "abc";          // valid
// ID là một bí danh (alias) cho kiểu number | string. 
// Bất kỳ giá trị nào thuộc kiểu này đều hợp lệ cho biến userId.
```
* Example usage:
```ts
// User là một alias cho union type
type Admin = {
  id: number;
  role: "admin";
};

type Member = {
  id: number;
  role: "member";
  group: string;
};

type User = Admin | Member;

const user1: User = { id: 1, role: "admin" };               // Hợp lệ
const user2: User = { id: 2, role: "member", group: "A" };  // Hợp lệ
// const user3: User = { id: 3, role: "guest" };            // Lỗi
```
```ts
// Union type in function
type Input = number | string;

function processInput(input: Input): void {
    if (typeof input === "number") {
        console.log(`Number: ${input}`);
    } else {
        console.log(`String: ${input}`);
    }
}

processInput(123);    // Output: Number: 123
processInput("abc");  // Output: String: abc
```
