/*
* Omit<type, keys>
* Type: Loại (type) mà bạn muốn loại bỏ thuộc tính.
* Keys: Các thuộc tính mà bạn muốn loại bỏ (dưới dạng union).
* loại bỏ các thuộc tính không cần thiết mà không phải định nghĩa lại toàn bộ kiểu hoặc giao diện.
* */

type Users = {
    id: number,
    username: string,
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<Users>;

let nextUserId = 1;

const users: Users[] = [
    { id: nextUserId++, username: "sang", role: "member"},
    { id: nextUserId++, username: "seng", role: "contributor"},
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id);
    if(!foundUser) {
        console.error("User not found!");
        return;
    }
    Object.assign(foundUser, updates);
}

// updateUser(1, { username: "Quynh pham", role: "admin" });

function addNewUser(newUser: Omit<Users, "id" | "user">): Users {
    const user: Users = {
        id: nextUserId++,
        ...newUser
    }
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object from the function at the end.
    users.push(user);
    return user;
}

// Example usage:
addNewUser({ username: "Quynh", role: "member"});

console.log(users);