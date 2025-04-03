import StatusTitle from "./StatusTitle";
import StatusButton from "./StatusButton";
import StatusChecker from "./StatusChecker";
import { useState } from "react";
const CarStatus = () => {
  const [statuses, setStatuses] = useState([false, false, false]);
  const clicked = (num) => {
    setStatuses((prev) => {
      const newPrev = prev.map((v, i) => (i == num ? true : false));
      return newPrev;
    });
  };

  return (
    <section>
      <StatusTitle title={"후드"} />
      <div style={{ display: "flex" }}>
        <StatusButton
          isClicked={statuses[0]}
          setIsClicked={() => {
            clicked(0);
          }}
          status={"덴트"}
        />
        <StatusButton
          isClicked={statuses[1]}
          setIsClicked={() => {
            clicked(1);
          }}
          status={"판금"}
        />
        <StatusButton
          isClicked={statuses[2]}
          setIsClicked={() => {
            clicked(2);
          }}
          status={"교환"}
        />
      </div>
      <StatusChecker />
    </section>
  );
};

export default CarStatus;
