import styles from "./Add.module.css";
import Input from "../../shared/base/Input/Input";
import Button from "../../shared/base/Button/Button";

const Add = (props) => {
  return (
    <div className={styles.layout}>
      <Input addValue={props.setValue} />
      <Button add={props.addTask} text={"+"} />
    </div>
  );
};

export default Add;
