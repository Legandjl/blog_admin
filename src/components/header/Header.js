import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./header.css";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  return (
    <div className={"header"}>
      {token && (
        <Link to={"/new"} style={{ marginRight: "30px" }}>
          <i
            className="ri-add-line headerIcon"
            style={{ fontSize: "1.1em" }}
          ></i>
        </Link>
      )}
      <Link className="headerIcon" to={"/home"} style={{ gridColumn: 2 }}>
        BLOGGER ADMIN
      </Link>

      {token && (
        <div className="logout">
          {" "}
          <i className="ri-logout-circle-line headerIcon" onClick={logout}></i>
        </div>
      )}
    </div>
  );
};

export default Header;
