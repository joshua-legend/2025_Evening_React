const Title = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "20px",
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.title} 운임
    </div>
  );
};

export default Title;
