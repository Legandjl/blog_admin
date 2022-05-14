const Filter = (props) => {
  return (
    <div className="filter">
      <p
        onClick={() => {
          props.handleFilter("published");
        }}
        style={{
          borderRight: "solid 1px",
          color: props.currentFilter === "unpublished" && "#353535ae",
        }}
      >
        Published
      </p>
      <p
        onClick={() => {
          props.handleFilter("unpublished");
        }}
        style={{
          marginLeft: "8px",
          color: props.currentFilter === "published" && "#353535ae",
        }}
      >
        Unpublished
      </p>
    </div>
  );
};
export default Filter;
