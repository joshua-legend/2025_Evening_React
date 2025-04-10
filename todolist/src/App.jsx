import { use, useState } from "react";
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
  return (
    <Layout>
      <Calendar />
      <Schedule taskList={tasks} />
      <Add addTask={addTask} setValue={setValue} />
    </Layout>
  );
}

export default App;
