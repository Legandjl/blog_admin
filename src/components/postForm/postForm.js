import "./postForm.css";
import useFormController from "../../hooks/useFormController";
import PostFormLoader from "../loaders/PostFormLoader";
import EditorWrap from "../editor/EditorWrap";

const PostForm = () => {
  const [
    markDownContent,
    submissionConfirmed,
    submitting,
    handleChange,
    handleSubmit,
    confirmationCheck,
    loading,
    published,
  ] = useFormController();

  return (
    <>
      {loading ? (
        <PostFormLoader />
      ) : (
        <EditorWrap
          markDownContent={markDownContent}
          handleChange={handleChange}
          confirmationCheck={confirmationCheck}
          handleSubmit={handleSubmit}
          submissionConfirmed={submissionConfirmed}
          submitting={submitting}
          published={published}
        />
      )}
    </>
  );
};
export default PostForm;
