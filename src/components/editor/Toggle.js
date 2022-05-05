const Toggle = (props) => {
  const handlePub = () => {
    console.log("PUBLISHING");
  };
  return <p onClick={handlePub}>{props.published ? "Unpublish" : "Publish"}</p>;
};

export default Toggle;
