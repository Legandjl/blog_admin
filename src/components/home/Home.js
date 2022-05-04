import { useState } from "react";
import useLoadData from "../../hooks/useLoadData";
import HomeLoader from "../loaders/HomeLoader";
import LoginLoader from "../loaders/LoginLoader";

import PostLink from "../post_link/PostLink";
import Arrow from "./Arrow";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [loading, data, refresh] = useLoadData(`/blog/${toSkip}`);
  const [count, setCount] = useState(1);
  const arrowCheck = data.length < 10;

  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} refresh={refresh} />;
    });
  }
  return !loading ? (
    <div className="homeWrap">
      {toSkip > 0 && (
        <Arrow
          direction={"left"}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            cursor: "pointer",
            fontSize: "1.4em",
          }}
          toSkip={toSkip}
          setToSkip={setToSkip}
          setCount={setCount}
          refresh={refresh}
        />
      )}
      <table>
        <tbody>{posts}</tbody>
      </table>
      {!arrowCheck && (
        <Arrow
          direction={"right"}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            cursor: "pointer",
            fontSize: "1.4em",
          }}
          toSkip={toSkip}
          setToSkip={setToSkip}
          setCount={setCount}
          refresh={refresh}
        />
      )}
      <p
        style={{
          position: "absolute",
          bottom: "60px",
          right: "50%",
          fontWeight: "bold",
        }}
      >
        {count}
      </p>
    </div>
  ) : (
    <LoginLoader />
  );
};

export default Home;
