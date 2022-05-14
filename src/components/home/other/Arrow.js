const Arrow = (props) => {
  return (
    <i
      class={`ri-arrow-${props.direction}-line`}
      style={props.style}
      onClick={() => {
        props.setToSkip((prev) => {
          return props.direction === "left" ? prev - 10 : prev + 10;
        });
        props.setCount((prev) => {
          return props.direction === "left" ? prev - 1 : prev + 1;
        });
        props.refresh();
      }}
    ></i>
  );
};

export default Arrow;
