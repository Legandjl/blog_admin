const Functions = (props) => {
  return (
    <>
      {!props.submissionConfirmed ? (
        <button className="submit" onClick={props.confirmationCheck}>
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
    </>
  );
};

export default Functions;
