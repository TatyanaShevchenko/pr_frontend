import styles from "./index.module.scss";
import classNames from "classnames/bind";

export const Ticket = ({
  subject,
  priority,
  status,
  description,
  style,
  onEdit,
}) => {
  let priorityClassname = classNames(styles.priority, {
    [styles.low]: priority === "low",
    [styles.medium]: priority === "medium",
    [styles.high]: priority === "high",
  });

  let statusClassname = classNames(styles.status, {
    [styles.todo]: status === "to do",
    [styles.inProgress]: status === "in progress",
    [styles.done]: status === "done",
  });

  return (
    <div className={styles.ticket} style={style}>
      <div className={styles.column}>
        <p className={styles.title}>subject</p>
        <p className={styles.subject}>{subject}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>priority</p>
        <p className={priorityClassname}>{priority}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>status</p>
        <p className={statusClassname}>{status}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>description</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.editBtn} onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};
