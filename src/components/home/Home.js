import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useLoadData from "../../hooks/useLoadData";
import LoginLoader from "../loaders/LoginLoader";
import PostLink from "../post_link/PostLink";
import Arrow from "./Arrow";
import Filter from "./Filter";
import "./home.css";

const Home = () => {
  const [toSkip, setToSkip] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [fetchData, fetchInProgress] = useFetchData();
  const [count, setCount] = useState(1);
  const [currentFilter, setFilter] = useState("published");
  const [loading, data, refresh] = useLoadData(
    `/admin/${toSkip}?published=${currentFilter === "published"}`
  );
  // reset count & toskip on filter change
  const handleFilter = (val) => {
    setFilter(val);
    setToSkip(0);
    setCount(1);
    refresh();
  };
  console.log(toSkip + "toskip");
  // if returned data is empty move back to prev lot of data
  useEffect(() => {
    if (!loading) {
      if (data.length === 0 && count > 1) {
        setToSkip((prev) => {
          if (prev > 0) {
            setCount((prev) => {
              return prev - 1;
            });
            return prev - 10;
          } else {
            return prev;
          }
        });
        refresh();
      }
    }
  }, [count, data, loading, refresh]);

  //check if we need to show right arrow
  useEffect(() => {
    const checkTotalPosts = async () => {
      const totalPosts = await fetchData(
        `/blog/count?published=${currentFilter === "published"}`
      );
      setShowRightArrow(totalPosts > 10 + toSkip);
    };
    if (loading) {
      checkTotalPosts();
    }
  }, [currentFilter, fetchData, loading, toSkip]);

  const posts = data.map((dataItem) => {
    return <PostLink dataItem={dataItem} refresh={refresh} />;
  });

  return !loading && !fetchInProgress ? (
    <div className="homeWrap">
      <Filter handleFilter={handleFilter} currentFilter={currentFilter} />
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
