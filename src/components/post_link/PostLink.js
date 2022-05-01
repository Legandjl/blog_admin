import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./postLink.css";

const PostLink = (props) => {
  return (
    <tr>
      <td>
        {" "}
        <ReactMarkdown children={props.dataItem.title.substring(0, 20)} />
      </td>

      <td>
        {" "}
        <Link to={`/post/${props.dataItem._id}`}>View</Link>
      </td>

      <td>
        {" "}
        {DateTime.fromISO(props.dataItem.date).toLocaleString(DateTime.ISO)}
      </td>
      <td>
        {" "}
        <Link to={`/edit/${props.dataItem._id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default PostLink;
