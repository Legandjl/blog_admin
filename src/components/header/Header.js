import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <Link to={"/"}>BLOGGER ADMIN</Link>
      <Link to={"/new"} style={{ marginRight: "30px" }}>
        +
      </Link>
    </div>
  );
};

export default Header;
