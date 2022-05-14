import { DateTime } from "luxon";

import useShowMenu from "../../../hooks/useShowMenu";

import "./comment.css";

const Comment = ({ comment, handleDelete }) => {
  const [showMenu, toggleOn, toggleOff] = useShowMenu();

  const commentDel = async () => {
    await handleDelete(comment._id);
    toggleOff();
  };

  return (
    <div className="commentWrap">
      <div className="commentName">
        {comment.name === "" ? "Anonymous" : comment.name}
        <i
          className="ri-more-line"
          style={{ color: showMenu && "rgb(117, 113, 113)", cursor: "pointer" }}
          onClick={(e) => {
            toggleOn(e);
          }}
        ></i>
        {showMenu && (
          <div className="delMenu" data-menu={true}>
            {" "}
            <i
              className="ri-delete-bin-2-fill"
              data-menu={true}
              style={{ cursor: "pointer" }}
              onClick={commentDel}
            ></i>
          </div>
        )}
      </div>
      <div className="commentContent">{comment.content}</div>
      <div className="commentDate">
        {DateTime.fromISO(comment.date).toLocaleString(DateTime.DATETIME_SHORT)}
      </div>
    </div>
  );
};

export default Comment;
