const Toggle = (props) => {
  return (
    <p
      style={{ cursor: "pointer", textDecoration: "underline" }}
      onClick={props.handlePub}
    >
      {props.published ? "Unpublish" : "Publish"}
    </p>
  );
};

export default Toggle;
