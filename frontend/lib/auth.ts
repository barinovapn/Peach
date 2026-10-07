export const AUTH_TOKEN_KEY = "token";

export interface User {
  id: string;
  email: string;
  name?: string;
}

export async function getIdToken(): Promise<string | null> {
  if (typeof window === "undefined") return null;

  let token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (!token) {
    token = "mock-user-token-123";
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
  return token;
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY) || "mock-user-token-123";
}

export async function signIn(email?: string, _password?: string): Promise<{ token: string; user: User }> {
  const mockToken = "mock-user-token-" + Date.now();
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
  }

  return {
    token: mockToken,
    user: {
      id: "123e4567-e89b-12d3-a456-426614174000",
      email: email || "user@example.com",
      name: "Peach User",
    },
  };
}

export async function signUp(email?: string, password?: string): Promise<{ token: string; user: User }> {
  return signIn(email, password);
}

export async function getUser(): Promise<User | null> {
  const token = await getIdToken();
  if (!token) return null;

  return {
    id: "123e4567-e89b-12d3-a456-426614174000",
    email: "user@example.com",
    name: "Peach User",
  };
}

export function signOut(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    window.location.href = "/login";
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}