import { SpinnerDiamond } from "spinners-react";
import "./loaders.css";

const CommentsLoader = () => {
  return (
    <div className="commentsLoader">
      <SpinnerDiamond color={"#1B1B1B"} size={"2em"} />
    </div>
  );
};

export default CommentsLoader;
