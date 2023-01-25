import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  username: null,
  onLogout: () => {},
});

