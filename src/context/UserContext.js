import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    const login = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }
        const testLogin = await fetch("http://localhost:3000/admin/test", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (testLogin.status === 401) {
          logout();
        } else {
          //Authenticated
          localStorage.setItem("token", token);
          setToken(token);
        }
        setLoading(false);
      } catch (e) {
        console.log("something went wrong");
        logout();
      }
    };
    if (loading && !token) {
      login();
    }
  }, [loading, nav, token]);

  const handleLogin = async (password) => {
    const data = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ username: "admin", password: password }),
    });
    const json = await data.json();
    localStorage.setItem("token", json.token);
    setToken(json.token);
    return data;
  };

  const logout = async () => {
    setLoading(false);
    setToken(null);
    localStorage.setItem("token", "");
  };

  return (
    <UserContext.Provider
      value={{ token, handleLogin, logout, signingIn: loading }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
