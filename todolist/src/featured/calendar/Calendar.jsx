import { CurrentTime } from "../../shared/whatTime";
import styles from "./Calendar.module.css";
import Text from "./components/Text";
const Calendar = () => {
  return (
    <div className={styles.layout}>
      {CurrentTime().map((v) => (
        <Text text={v} />
      ))}
    </div>
  );
};

export default Calendar;
