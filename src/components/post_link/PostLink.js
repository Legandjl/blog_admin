import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./postLink.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import useFetchData from "../../hooks/useFetchData";

const PostLink = (props) => {
  const { token } = useContext(UserContext);
  const [fetchData, fetchInProgress] = useFetchData();
  const handleDel = async () => {
    await fetchData(`/admin/post/${props.dataItem._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    props.refresh();
  };
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
      <td>
        <i
          className="ri-delete-bin-2-fill"
          onClick={handleDel}
          style={{ cursor: "pointer" }}
        ></i>
      </td>
    </tr>
  );
};

export default PostLink;
