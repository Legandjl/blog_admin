import { Link, useParams } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData";
import "./post.css";
import CommentSection from "../commentSection/CommentSection";
import useComments from "../../hooks/useComments";
import Markdown from "markdown-to-jsx";
import PostLoader from "../loaders/PostLoader";
import Publish from "../publish/Publish";

const Post = () => {
  const { id } = useParams();

  const [loading, data, refresh] = useLoadData(`/blog/post/${id}`);

  const [
    loadingComments,
    commentData,
    commentRefresh,
    endOfComments,
    handleDel,
  ] = useComments(`/blog/comments/${id}`);

  return (
    <div className={"content"}>
      {!loading && (
        <div className="toolbar">
          <Link
            className="postFunction"
            style={{
              paddingRight: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.8em",
            }}
            to={`/edit/${id}`}
          >
            Edit
          </Link>

          <Publish
            cb={refresh}
            dataItem={data.post}
            style={{
              borderLeft: "solid 1px",
              paddingLeft: "6px",
              fontWeight: "600",
              fontSize: "0.8em",
            }}
          />
        </div>
      )}
      <div
        className="postcontent"
        style={{
          borderBottom:
            commentData.length === 0 && "solid 1px rgba(0, 0, 0, 0.293)",
        }}
      >
        {!loading && <Markdown>{data.post.content}</Markdown>}
        {loading && <PostLoader />}
      </div>
      {!loading && (
        <CommentSection
          comments={commentData}
          loading={loadingComments}
          refresh={commentRefresh}
          endOfComments={endOfComments}
          handleDelete={handleDel}
        />
      )}
    </div>
  );
};

export default Post;
