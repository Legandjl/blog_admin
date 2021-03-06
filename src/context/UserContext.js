import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //keep track of user as they move through the app
    //location is maintained on browser refresh
    //logout clears location
    if (location.pathname !== "/") {
      localStorage.setItem("path", location.pathname);
    }
  }, [location, location.key]);

  useEffect(() => {
    const login = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }
        const testLogin = await fetch(
          "https://intense-chamber-01379.herokuapp.com/admin/test",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (testLogin.status === 401) {
          //auth failed, clear all and set loading to false
          logout();
        } else {
          //Authenticated
          localStorage.setItem("token", token);
          setToken(token);
        }
        setLoading(false);
      } catch (e) {
        logout();
      }
    };
    if (loading && !token) {
      login();
    }
  }, [loading, nav, token]);

  const handleLogin = async (password) => {
    const data = await fetch(
      "https://intense-chamber-01379.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ username: "admin", password: password }),
      }
    );
    const json = await data.json();
    localStorage.setItem("token", json.token);
    setToken(json.token);
    return data;
  };

  const logout = async () => {
    setLoading(false);
    setToken(null);
    localStorage.setItem("token", "");
    localStorage.setItem("path", "");
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
