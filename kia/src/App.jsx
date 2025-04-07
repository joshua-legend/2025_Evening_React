import { useState } from "react";
import CarStatus from "./featured/carstatus/CarStatus";
import NextButton from "./featured/linkbutton/NextButton";

function App() {
  // const [carStatuses, setCarStatuses] = useState([
  //   { title: "후드", status: [false, false, false] },
  //   { title: "프론트펜터(Left)", status: [false, false, false] },
  //   { title: "프론트펜터(Right)", status: [false, false, false] },
  // ]);

  const [carStatuses, setCarStatuses] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const click = (x, y) => {
    setCarStatuses((prev) => {
      // 불변성 원칙에 의해서 새로운 배열 넣기
      const all = [...prev];
      // 모두 false 해주고
      const newPrev = all[x].map((v) => false);
      // 해당 번째만 true로 해주고
      const newArrPrev = newPrev.map((v, i) => i == y);
      // all에 다시 갱신해주고
      all[x] = newArrPrev;
      return all;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <CarStatus title={"후드"} statuses={carStatuses[0]} clicked={click} row={0} />
      <CarStatus title={"프론트펜터(Left)"} statuses={carStatuses[1]} clicked={click} row={1} />
      <CarStatus title={"프론트펜터(Right)"} statuses={carStatuses[2]} clicked={click} row={2} />
      <NextButton isDone={carStatuses.every((v) => v.some((v) => v))} />
    </div>
  );
}

export default App;
