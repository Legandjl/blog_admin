import Markdown from "markdown-to-jsx";

const MarkdownDisplay = (props) => {
  return (
    <div className="markdownDisplay">
      {" "}
      <Markdown>{props.markDownContent}</Markdown>
    </div>
  );
};

export default MarkdownDisplay;
