const LinkButton = (props) => {
  return (
    <div style={{ border: "none", padding: "10px", backgroundColor: "#efefef", borderRadius: "10px", width: "fit-contents", display: "flex", flexDirection: "column" }}>
      <span>{props.openDate}</span>
      <span>{props.openTime}</span>
    </div>
  );
};

export default LinkButton;
