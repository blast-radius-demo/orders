const AUTH_URL = process.env.AUTH_URL ?? "http://localhost:3001";

export async function fetchUser(userId: number) {
    const response = await fetch(`${AUTH_URL}/user/${userId}`);
    return response.json();
}
