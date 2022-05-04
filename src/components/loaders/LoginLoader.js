import { SpinnerInfinity, SpinnerRound } from "spinners-react";
import "./loaders.css";

const LoginLoader = () => {
  return (
    <div className="homeLoader">
      <SpinnerRound color={"#292929"} />
    </div>
  );
};

export default LoginLoader;
