import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Calendar />
      <Schedule />
    </Layout>
  );
}

export default App;
