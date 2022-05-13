import { Link } from "react-router-dom";
import "./errors.css";
const Oops = () => {
  return (
    <div className="oops">
      <p>Oops, something went wrong!</p>
      <div className="oopsInner">
        <p>Return</p>
        <Link to={"/home"}>Home</Link>
      </div>
    </div>
  );
};

export default Oops;
