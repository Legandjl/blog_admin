import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useLoadData from "../../hooks/useLoadData";
import LoginLoader from "../loaders/LoginLoader";
import PostLink from "../post_link/PostLink";
import Arrow from "./Arrow";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [loading, data, refresh] = useLoadData(`/blog/${toSkip}`);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [fetchData] = useFetchData();
  const [count, setCount] = useState(1);

  //check if we need to let user move to next lot of posts
  useEffect(() => {
    const checkTotalPosts = async () => {
      const totalPosts = await fetchData("/blog/count");
      setShowRightArrow(totalPosts > 10 + toSkip);
    };
    if (loading) {
      checkTotalPosts();
    }
  }, [fetchData, loading, toSkip]);

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
      {showRightArrow && (
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
