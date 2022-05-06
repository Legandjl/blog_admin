import { useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./commentSubmit.css";

const initialFormState = {
  name: "Admin",
  content: "",
};
const reducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const CommentSubmit = (props) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const { id } = useParams();
  const [fetchData, fetchInProgress] = useFetchData();

  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await fetchData(`/blog/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(state),
    });
    props.refresh();
    setSubmitting(false);
  };

  return (
    <div className="commentSubmit">
      <textarea
        name={"content"}
        placeholder="Your comment text here..."
        rows={4}
        onChange={handleChange}
        value={state.content}
      />
      <div className="submitWrap">
        <button disabled={submitting} onClick={handleSubmit}>
          {submitting ? "..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CommentSubmit;
