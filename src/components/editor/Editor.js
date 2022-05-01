const Editor = (props) => {
  return (
    <div className="markdownEditorWrap">
      {" "}
      <textarea
        value={props.markDownContent}
        onChange={props.handleChange}
        rows={5}
        cols={5}
      />
    </div>
  );
};

export default Editor;
