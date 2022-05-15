import { useEffect, useState } from "react";

import CommentsLoader from "../loaders/CommentsLoader";
import { animateScroll } from "react-scroll/modules";
import "./commentSection.css";
import CommentSubmit from "./commentSubmit/CommentSubmit";
import Comment from "./comment/Comment";

const CommentSection = (props) => {
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const refreshComments = () => {
    props.refresh();
    setCommentSubmitted(true);
  };

  const comments = props.comments.map((comment) => {
    return (
      <Comment
        comment={comment}
        refresh={refreshComments}
        handleDelete={props.handleDelete}
      />
    );
  });

  useEffect(() => {
    if (commentSubmitted) {
      animateScroll.scrollToBottom();
    }
  }, [commentSubmitted, props.comments, props.end]);

  return (
    <div className={"commentSection"}>
      {comments}
      {!props.endOfComments ? (
        <p className="loadMore" onClick={refreshComments}>
          load more
        </p>
      ) : comments.length === 0 ? (
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          No comments to show
        </p>
      ) : (
        <p>End of comments</p>
      )}
      {props.loading && <CommentsLoader />}
      {!props.loading && <CommentSubmit refresh={refreshComments} />}
    </div>
  );
};

export default CommentSection;
