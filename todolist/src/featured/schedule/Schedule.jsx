import styles from "./Schedule.module.css";
import Task from "./components/Task";

const Schedule = () => {
  return (
    <div className={styles.layout}>
      <Task text={"유튜브보기"} />
      <Task text={"복습하는척하면서 인스타보기"} />
      <Task text={"각잡고 유튜브보기"} />
    </div>
  );
};

export default Schedule;
