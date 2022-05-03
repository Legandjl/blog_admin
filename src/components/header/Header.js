import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <Link to={"/"} style={{ gridColumn: 2 }} reloadDocument>
        BLOGGER ADMIN
      </Link>
      <Link to={"/new"} style={{ marginRight: "30px" }}>
        <i class="ri-add-line" style={{ fontSize: "1.1em" }}></i>
      </Link>
    </div>
  );
};

export default Header;
