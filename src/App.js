import { useState, useEffect, useRef } from "react";
import { Ticket } from "./components/Ticket/Ticket";
import { VirtualisedList } from "./components/VirtualisedList/VirtualisedList";
import { MyForm } from "./components/Form/Form";
import { Button } from "./components/Button/Button";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import { ticketsAPI } from "./api/api";
import styles from "./index.module.scss";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [tickets, setTickets] = useState(null);
  const [updates, setUpdates] = useState(0);

  useEffect(() => {
    ticketsAPI.getTickets().then((response) => setTickets(response));
  }, [updates]);

  const createNewTicket = async (values) => {
    const id = tickets.length + 1;
    values.id = id;
    ticketsAPI.createTicket(values);
    setUpdates((prev) => prev + 1);
  };

  return (
    <div className={styles.app}>
      <div className={styles.addTicket}>
        <Popup
          trigger={
            <Button classname={styles.addTicketBtn} text="Add new ticket" />
          }
          position="right top"
        >
          {(close) => (
            <div className={styles.Popup}>
              <MyForm handleSubmit={createNewTicket} />
              <a className={styles.close} onClick={close}>
                &times;
              </a>
            </div>
          )}
        </Popup>
      </div>
      <div className={styles.ticketsContainer}>
        {tickets && (
          <VirtualisedList
            numItems={tickets.length}
            itemHeight={100}
            windowHeight={windowSize.current[1]}
            renderItem={({ index, style }) => {
              const i = tickets[index];
              return (
                <Ticket
                  key={`Ticket-${i.id}`}
                  id={i.id}
                  style={style}
                  subject={i.subject}
                  priority={i.priority}
                  status={i.status}
                  description={i.description}
                  setUpdates={setUpdates}
                />
              );
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
