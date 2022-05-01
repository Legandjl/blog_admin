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
            class="ri-check-line"
            style={{ cursor: "pointer" }}
            onClick={props.handleSubmit}
          ></i>
          <i
            class="ri-close-fill"
            style={{ cursor: "pointer" }}
            onClick={props.confirmationCheck}
          ></i>
        </div>
      )}
    </>
  );
};

export default Functions;
