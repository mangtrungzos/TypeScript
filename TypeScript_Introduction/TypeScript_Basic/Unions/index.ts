// `unions` là một kiểu dữ liệu cho phép một biến hoặc một đối tượng có thể nhận nhiều kiểu khác nhau.
// Điều này rất hữu ích khi bạn cần linh hoạt về kiểu dữ liệu mà biến hoặc tham số có thể nhận.

// syntax: |
let value: string | number;
value = "Ngan";
value = 2002;


// role just can be "guest", "member", "admin" and it's can't just be any string
type User = {
    username: string,
    role: "guest" | "member" | "admin"
}
type UserRole = "guest" | "member" | "admin";

let userRole: UserRole = "member";
