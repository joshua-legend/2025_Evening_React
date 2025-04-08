import styles from "./Schedule.module.css";
import TaskText from "./components/TaskText";

const Schedule = () => {
  return (
    <div className={styles.layout}>
      <TaskText text={"꿀잠자기"} />
      <TaskText text={"유튭보기"} isDone={true} />
    </div>
  );
};

export default Schedule;
