export type UserRole = "guest " | "member" | "admin";

type User = {
    username: string,
    role: UserRole,
}

const users: User[] = [
    { username: "ngan", role: "admin" },
    { username: "ngan", role: "member" },
    { username: "sang", role: "guest " },
];

// Type alias:
function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username);
    if(!user) {
        throw new Error(`User with username ${username} not found.`);
    }
    return user;
}