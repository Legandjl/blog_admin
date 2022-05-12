import usePub from "../../hooks/usePub";

const Publish = (props) => {
  const [handlePub] = usePub();
  const handleClick = async () => {
    await handlePub(props.dataItem);
    props.cb();
  };

  return (
    <p style={{ ...props.style, cursor: "pointer" }} onClick={handleClick}>
      {props.dataItem.published ? "Unpublish" : "Publish"}
    </p>
  );
};

export default Publish;
