import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Button from "./shared/base/Button/Button";

function App() {
  return (
    <Layout>
      <Calendar />
      <Schedule taskList={["음악듣기", "넷플보기", "폭삭보기"]} />
      <input type="text" />
      <Button text={"+"} />
    </Layout>
  );
}

export default App;
