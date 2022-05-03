import { SpinnerInfinity } from "spinners-react";
import "./loaders.css";

const SubmitLoader = () => {
  return (
    <div className="submitSpinner">
      <SpinnerInfinity color={"#1B1B1B"} />
    </div>
  );
};

export default SubmitLoader;
