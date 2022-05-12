import usePub from "../../hooks/usePub";

const Toggle = (props) => {
  const [handlePub] = usePub();
  const handleClick = async () => {
    await handlePub(props.dataItem);
    props.cb();
  };

  return (
    <p style={{ ...props.style }} onClick={handleClick}>
      {props.dataItem.published ? "Unpublish" : "Publish"}
    </p>
  );
};

export default Toggle;
