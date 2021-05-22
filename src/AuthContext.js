import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user_id")
  );

  function loggedin(userId) {
    localStorage.setItem("user_id", userId);
    setCurrentUser(userId);
  }

  const value = {
    currentUser,
    loggedin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
