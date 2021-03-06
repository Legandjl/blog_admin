const Functions = (props) => {
  return (
    <div className="functionWrap">
      {!props.submissionConfirmed ? (
        <button
          className="submit"
          onClick={props.confirmationCheck}
          disabled={props.errored > 0}
          style={{ backgroundColor: props.errored > 0 && "grey" }}
        >
          {"Submit"}
        </button>
      ) : (
        <div className="confirmation">
          <i
            className="ri-check-line"
            style={{ cursor: "pointer" }}
            onClick={props.handleSubmit}
          ></i>
          <i
            className="ri-close-fill"
            style={{ cursor: "pointer" }}
            onClick={props.confirmationCheck}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Functions;
