import { useState, useEffect, useRef } from "react";
import { TicketContainer } from "./components/Ticket/TicketContainer";
import { VirtualisedList } from "./components/VirtualisedList/VirtualisedList";
import { ticketsAPI } from "./api/api";
import styles from "./index.module.scss";
function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let [tickets, setTickets] = useState(null);

  useEffect(() => {
    ticketsAPI.getTickets().then((response) => setTickets(response));
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.addTicket}>
        <button className={styles.addTicketBtn}>Add new ticket</button>
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
                <TicketContainer
                  id={i.id}
                  style={style}
                  key={i.id}
                  subject={i.subject}
                  priority={i.priority}
                  status={i.status}
                  description={i.description}
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
