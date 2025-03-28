const MatchLogos = (props) => {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <div style={{ width: "70px", height: "70px" }}>
        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={props.homeLogo} alt="" />
      </div>
      <span>VS</span>
      <div style={{ width: "70px", height: "70px" }}>
        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={props.awayLogo} alt="" />
      </div>
    </div>
  );
};

export default MatchLogos;
