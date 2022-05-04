import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./login.css";

const Login = () => {
  const { handleLogin, token, signingIn } = useContext(UserContext);
  const nav = useNavigate();

  useEffect(() => {
    if (token && !signingIn) {
      nav(`/home`, { replace: true });
    }
  }, [nav, signingIn, token]);

  return (
    <div className="login">
      <button type="button" onClick={handleLogin}></button>
    </div>
  );
};

export default Login;
