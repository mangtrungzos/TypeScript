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
