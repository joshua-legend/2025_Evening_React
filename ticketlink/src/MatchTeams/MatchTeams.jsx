const MatchTeams = (props) => {
  return (
    <div style={{ fontWeight: "bold" }}>
      {props.homeTeam}vs{props.awayTeam}
    </div>
  );
};

export default MatchTeams;
