import useShowMenu from "../../hooks/useShowMenu";
import "./comment.css";

const Comment = ({ comment }) => {
  const [showMenu, toggleOn, toggleOff] = useShowMenu();

  const handleClick = (e) => {
    toggleOn(e);
  };

  return (
    <div className="commentWrap">
      <div className="commentName">
        {comment.name === "" ? "Anonymous" : comment.name}
        <i
          class="ri-more-line"
          style={{ color: showMenu && "rgb(117, 113, 113)", cursor: "pointer" }}
          onClick={handleClick}
        ></i>
        {showMenu && (
          <div className="delMenu" data-menu={true}>
            {" "}
            <i class="ri-delete-bin-2-fill" data-menu={true}></i>
          </div>
        )}
      </div>
      <div className="commentContent">{comment.content}</div>
      <div className="commentDate">{comment.date}</div>
    </div>
  );
};

export default Comment;
