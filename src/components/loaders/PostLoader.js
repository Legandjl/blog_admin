import { SpinnerDiamond } from "spinners-react";
import "./loaders.css";

const PostLoader = () => {
  return (
    <div className="postLoader">
      <SpinnerDiamond color={"#1B1B1B"} size={"2em"} />
    </div>
  );
};

export default PostLoader;
