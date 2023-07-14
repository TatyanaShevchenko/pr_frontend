import { Ticket } from "./Ticket";
import { ticketsAPI } from "../../api/api";

export const TicketContainer = ({
  id,
  subject,
  priority,
  status,
  description,
  style,
}) => {
  const handleTicketEdit = () => {
    ticketsAPI.updateTicket(id, {
      id: id,
      subject: "Ticket 9926",
      priority: "high",
      status: "to do",
      description: "Quia unde ratione.",
    });
  };

  return (
    <Ticket
      style={style}
      subject={subject}
      priority={priority}
      status={status}
      description={description}
      onEdit={handleTicketEdit}
    />
  );
};
