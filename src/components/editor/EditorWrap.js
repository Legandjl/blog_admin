import SubmitLoader from "../loaders/SubmitLoader";
import Editor from "./Editor";
import Functions from "./Functions";
import MarkdownDisplay from "./MarkdownDisplay";

const EditorWrap = (props) => {
  return (
    <div className="editorWrap">
      <input
        className="title"
        type={"text"}
        value={props.title}
        onChange={props.updateTitle}
        placeholder={"Post title - 20 chars or less"}
        maxLength={20}
      />

      <Editor
        markDownContent={props.markDownContent}
        handleChange={props.handleChange}
      />
      <MarkdownDisplay markDownContent={props.markDownContent} />
      {!props.submitting ? (
        <Functions
          confirmationCheck={props.confirmationCheck}
          handleSubmit={props.handleSubmit}
          submissionConfirmed={props.submissionConfirmed}
        />
      ) : (
        <div className="functionWrap">
          {" "}
          <SubmitLoader />{" "}
        </div>
      )}
    </div>
  );
};

export default EditorWrap;
