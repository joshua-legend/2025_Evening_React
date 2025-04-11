import { use, useEffect, useState } from "react";
import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Add from "./featured/add/Add";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const addTask = () => {
    setTasks((prev) => {
      const trimedValue = value.trim();
      return !trimedValue ? prev : [...prev, trimedValue];
    });
  };

  const [bool, setBool] = useState(false);
  const [bool1, setBool1] = useState(false);
  useEffect(() => {
    console.log("랜더링~");
  }, [bool, bool1]);

  return (
    <Layout>
      <button
        onClick={() => {
          setBool((prev) => !prev);
        }}
      >
        클릭
      </button>
      {/* <Calendar />
      <Schedule taskList={tasks} />
      <Add addTask={addTask} setValue={setValue} /> */}
    </Layout>
  );
}

export default App;
