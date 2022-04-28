import { Link } from "react-router-dom";
import useShowHeader from "../../hooks/useShowHeader";
import "./header.css";

const Header = () => {
  const { showHeader, isTop } = useShowHeader();

  return (
    <div className={"header"}>
      <Link to={"/"}>BLOGGER ADMIN</Link>
    </div>
  );
};

export default Header;
