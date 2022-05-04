import { useParams } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData";
import "./post.css";
import CommentSection from "../commentSection/CommentSection";
import useComments from "../../hooks/useComments";
import Markdown from "markdown-to-jsx";
import PostLoader from "../loaders/PostLoader";

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
      <div
        className="postcontent"
        style={{
          borderBottom:
            commentData.length === 0 && "solid 1px rgba(0, 0, 0, 0.293)",
        }}
      >
        {!loading && <Markdown>{data.post.content}</Markdown>}
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
      {loading && <PostLoader />}
    </div>
  );
};

export default Post;
