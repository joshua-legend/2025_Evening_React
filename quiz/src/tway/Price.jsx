const Price = (props) => {
  const boxStyle = {
    display: "flex",
    gap: "2px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    fontSize: "20px",
  };
  if (props.seats == "0") return <div style={boxStyle}>매진</div>;
  return (
    <div style={boxStyle}>
      <span style={{ color: "grey", fontSize: "12px" }}>{props.currency}</span>
      <span style={{ color: "black", fontSize: "18px" }}>{props.price}</span>
      <span style={{ color: "red", fontSize: "14px" }}>{props.seats}석</span>
    </div>
  );
};

export default Price;
