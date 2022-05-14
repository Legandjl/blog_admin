import SubmitLoader from "../../loaders/SubmitLoader";
import Editor from "./Editor";
import Functions from "./Functions";
import MarkdownDisplay from "./MarkdownDisplay";

const EditorWrap = (props) => {
  //resets window pos on nav
  return (
    <div className="editorWrap">
      <div className="formHeader">
        {" "}
        <input
          className="title"
          type={"text"}
          value={props.title}
          onChange={props.updateTitle}
          placeholder={"Post title - 20 chars or less"}
          maxLength={20}
        />
        {props.errored === 1 && (
          <p className="errorMessage">Title must be specified</p>
        )}
        {props.errored === 2 && (
          <p className="errorMessage">Content must be specified</p>
        )}
      </div>

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
          errored={props.errored}
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
