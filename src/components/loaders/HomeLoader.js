import { SpinnerInfinity } from "spinners-react";
import "./loaders.css";

const HomeLoader = () => {
  return (
    <div className="homeLoader">
      <SpinnerInfinity color={"#1B1B1B"} />
    </div>
  );
};

export default HomeLoader;
