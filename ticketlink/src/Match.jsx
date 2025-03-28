import LinkButton from "./LinkButton/LinkButton";
import MatchLogos from "./MatchLogos/MatchLogos";
import MatchTeams from "./MatchTeams/MatchTeams";
import MatchTime from "./MatchTime/MatchTime";
import Stadium from "./Stadium/Stadium";

const Match = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <MatchTime {...props} />
      <MatchLogos {...props} />
      <MatchTeams {...props} />
      <Stadium {...props} />
      <LinkButton {...props} />
    </div>
  );
};

export default Match;
