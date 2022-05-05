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
  const [fetchData, fetchInProgress] = useFetchData();
  const [count, setCount] = useState(1);

  //check if we need to show right arrow
  useEffect(() => {
    const checkTotalPosts = async () => {
      const totalPosts = await fetchData("/blog/count");
      setShowRightArrow(totalPosts > 10 + toSkip);
    };
    if (loading) {
      checkTotalPosts();
    }
  }, [fetchData, loading, toSkip]);

  useEffect(() => {
    if (data.length === 0) {
      console.log("no data");
    }
  }, []);

  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} refresh={refresh} />;
    });
  }
  return !loading && !fetchInProgress ? (
    <div className="homeWrap">
      {toSkip > 0 && (
        <Arrow
          direction={"left"}
          style={{
            position: "absolute",
            left: "-45px",
            top: "45%",
            cursor: "pointer",
            fontSize: "1.4em",
          }}
          toSkip={toSkip}
          setToSkip={setToSkip}
          setCount={setCount}
          refresh={refresh}
        />
      )}
      <div className="tableWrap">
        <table>
          <tbody>{posts}</tbody>
        </table>
      </div>
      {showRightArrow && (
        <Arrow
          direction={"right"}
          style={{
            position: "absolute",
            right: "-45px",
            top: "45%",
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
