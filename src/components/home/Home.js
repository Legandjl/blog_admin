import useFetch from "../../hooks/useFetch";
import PostLink from "../post_link/PostLink";
import "./home.css";

const Home = () => {
  const [loading, data, refresh] = useFetch("/blog");
  let posts;
  if (!loading) {
    posts = data.map((dataItem) => {
      return <PostLink dataItem={dataItem} />;
    });
  }
  return (
    !loading && (
      <div className="homeWrap">
        <table>{posts}</table>
      </div>
    )
  );
};

export default Home;
