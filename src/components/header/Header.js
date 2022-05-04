import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./header.css";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  return (
    <div className={"header"}>
      <Link to={"/home"} style={{ gridColumn: 2 }}>
        BLOGGER ADMIN
      </Link>
      {token && (
        <Link to={"/new"} style={{ marginRight: "30px" }}>
          <i class="ri-add-line" style={{ fontSize: "1.1em" }}></i>
        </Link>
      )}
      {token && (
        <div className="logout">
          {" "}
          <i class="ri-logout-circle-line" onClick={logout}></i>
        </div>
      )}
    </div>
  );
};

export default Header;
