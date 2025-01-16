// partial type: is a shallow type
// Shallow type: Partial chỉ làm việc với thuộc tính ở cấp đầu tiên, không áp dụng với các đối tượng lồng nhau.
// Partial đảm bảo rằng kiểu tùy chọn (optional) luôn được đồng bộ với kiểu gốc.
// Thay vì phải tự định nghĩa lại một kiểu với các thuộc tính tùy chọn -> use partial

// cập nhật một phần dữ liệu của một đối tượng:

type Users = {
    id: number,
    username: string,
    role: "member" | "contributor" | "admin"
}

type UpdateUser = Partial<Users>;

const users: Users[] = [
    { id: 1, username: "Ngan", role: "admin"},
    { id: 2, username: "sang", role: "member"},
    { id: 3, username: "crush", role: "member"},
    { id: 4, username: "seng", role: "contributor"},
];

function updateUser(id: any, updates: UpdateUser) {
    // updates: can contain one or more User properties

    // Find the user in the array by the id
    const foundUser = users.find(user => user.id === id);
    // console.log(foundUser);
    if (!foundUser) {
        console.error("User not found!");
        return;
    }
    // Use Object.assign to update the found user in place
    Object.assign(foundUser, updates);
}

// Example updates:
updateUser(1, { username: "ngan", role: "admin" }); // Just update username and role
updateUser(3, { role: "contributor" }); // update role

console.log(users);