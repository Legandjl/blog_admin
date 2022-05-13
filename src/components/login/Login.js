import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LoginLoader from "../loaders/LoginLoader";
import "./login.css";

const Login = () => {
  const { handleLogin, token, signingIn } = useContext(UserContext);
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (token && !signingIn) {
      const path = localStorage.getItem("path");
      if (!path || path === "/") {
        nav(`/home`, { replace: true });
      } else {
        nav(path, { replace: true });
      }
    }
  }, [nav, signingIn, token]);

  const handleChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const login = async () => {
    if (password === "") {
      return;
    }
    const login = await handleLogin(password);
    if (!login.ok) {
      setPassword("");
      setError(true);
    }
  };

  return (
    <div className="login" style={{}}>
      {signingIn ? (
        <LoginLoader />
      ) : (
        <div className="loginWrap">
          <p style={{ fontWeight: "600" }}>Admin Portal</p>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password..."
            required
          />
          <button disabled={signingIn} type="button" onClick={login}>
            {signingIn ? <LoginLoader /> : "Submit"}
          </button>
          <p className="passwordError">{error ? "Incorrect Password" : ""}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
