import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  username: null,
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const initialId = localStorage.getItem("userId");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [userId, setUserId] = useState(initialId);
  const [user, setUser] = useState("");

  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    setEmail(null);
    setUserId(null);
    setUser(null);
  };

  const registerHandler = (email, token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("userId", userId);
    setToken(token);
    setEmail(email);
    setUserId(userId);
    setUser(user);
  };

  const value = {
    token,
    onLogout: logoutHandler,
    onRegister: registerHandler,
    email,
    userId,
    user,
    setUserId,
    setToken,
    setUser,
    setEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
