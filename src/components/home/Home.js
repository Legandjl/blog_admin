import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import PostLink from "../post_link/PostLink";
import Arrow from "./Arrow";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [loading, data, refresh] = useFetch(`/blog/${toSkip}`);
  const [count, setCount] = useState(1);
  const arrowCheck = data.length < 10;

  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} refresh={refresh} />;
    });
  }
  return (
    !loading && (
      <div className="homeWrap">
        {toSkip > 0 && (
          <Arrow
            direction={"left"}
            style={{
              position: "fixed",
              left: "60px",
              top: "50%",
              cursor: "pointer",
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
              position: "fixed",
              right: "60px",
              top: "50%",
              cursor: "pointer",
            }}
            toSkip={toSkip}
            setToSkip={setToSkip}
            setCount={setCount}
            refresh={refresh}
          />
        )}
        <p style={{ position: "fixed", bottom: "60px", right: "50%" }}>
          {count}
        </p>
      </div>
    )
  );
};

export default Home;
