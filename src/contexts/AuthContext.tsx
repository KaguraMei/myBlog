"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call - in production, this would be a real API
    try {
      // Check if user exists in localStorage users
      const users = JSON.parse(localStorage.getItem("users") || "[]") as Array<User & { password: string }>;
      const foundUser = users.find((u) => u.email === email && u.password === password);

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]") as Array<User & { password: string }>;
      const exists = users.some((u) => u.email === email);

      if (exists) {
        return false;
      }

      // Create new user
      const newUser = {
        id: `USER_${Math.floor(Math.random() * 10000)}`,
        username,
        email,
        password, // In production, this should be hashed
        avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=100&h=100&fit=crop`,
        joinDate: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Auto login after registration
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
