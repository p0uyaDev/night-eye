//TODO: temp file and unsecure
import { useState, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { users } from "../dummy"; //TODO: Replace with backend api

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = useCallback((email, password) => {
    //TODO: replace with backend api callback
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser)); //TODO: temp, please add backend and cookies to check loggedIn
      return foundUser;
    }

    return null;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user"); //TODO: need backend and cookies system
  }, []);

  const isLoggedIn = !!user;
  const role = user?.role ?? null;
  const id = user?.id ?? null;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        id,
        role,
        login,
        logout,
        isAdmin: role === "admin" || role === "owner",
        isOwner: role === "owner",
        isWriter: role === "writer",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
