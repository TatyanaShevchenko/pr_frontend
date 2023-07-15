import styles from "./index.module.scss";
import { MyForm } from "../Form/Form";
import { Button } from "../Button/Button";
import Popup from "reactjs-popup";
import classNames from "classnames/bind";
import { ticketsAPI } from "../../api/api";
import React, { useRef } from "react";

export const Ticket = ({
  id,
  subject,
  priority,
  status,
  description,
  style,
  setUpdates,
}) => {
  const ref = useRef();
  const updateTicket = async (values) => {
    ticketsAPI.updateTicket(id, values);
    setUpdates((prev) => prev + 1);
  };

  const ticketClassname = classNames(styles.ticket, {
    [styles.even]: id % 2 === 0,
  });
  const priorityClassname = classNames(styles.priority, {
    [styles.low]: priority === "low",
    [styles.medium]: priority === "medium",
    [styles.high]: priority === "high",
  });

  const statusClassname = classNames(styles.status, {
    [styles.todo]: status === "to do",
    [styles.inProgress]: status === "in progress",
    [styles.done]: status === "done",
  });

  return (
    <div className={ticketClassname} style={style}>
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
        <Popup
          trigger={<Button classname={styles.editBtn} text="Edit" />}
          position="bottom right"
        >
          {(close) => (
            <div className={styles.Popup}>
              <MyForm handleSubmit={updateTicket} />
              <a className="close" onClick={close}>
                &times;
              </a>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};
