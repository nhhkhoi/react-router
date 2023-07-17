import React, { createContext, useContext, useState } from "react";
import Jobs from "../jobs.json";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthContext = createContext(null);
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({});
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    setToken({ username: "BetaTester", password: "normieNoPass" });
  };

  const job = Jobs.companies;

  const handleLogout = () => {
    setToken({});
  };

  const value = {
    job,
    token,
    setToken,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSubmit: handleSubmit,
    searchParams,
    onSearch: handleSearch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
