import { SpinnerDiamond } from "spinners-react";
import "./loaders.css";

const PostFormLoader = () => {
  return (
    <div className="postformloader">
      <SpinnerDiamond color={"#1B1B1B"} size={"2em"} />
    </div>
  );
};

export default PostFormLoader;
