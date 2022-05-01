import "./postForm.css";
import Editor from "../editor/Editor";
import MarkdownDisplay from "../editor/MarkdownDisplay";
import Functions from "../editor/Functions";
import useFormController from "../../hooks/useFormController";

const PostForm = () => {
  const [
    markDownContent,
    submissionConfirmed,
    submitting,
    handleChange,
    handleSubmit,
    confirmationCheck,
  ] = useFormController();

  return (
    <div className="editorWrap">
      <Editor markDownContent={markDownContent} handleChange={handleChange} />
      <MarkdownDisplay markDownContent={markDownContent} />
      <Functions
        confirmationCheck={confirmationCheck}
        handleSubmit={handleSubmit}
        submissionConfirmed={submissionConfirmed}
      />
    </div>
  );
};
export default PostForm;
