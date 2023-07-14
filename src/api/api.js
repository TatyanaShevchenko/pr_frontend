import * as axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3000",
});

export const ticketsAPI = {
  getTickets() {
    return instance.get(`/items`).then((response) => {
      return response.data;
    });
  },
  getTicker(ticketID) {
    return instance.get(`/items/${ticketID}`).then((response) => {
      return response.data;
    });
  },
  updateTicket(ticketID, newData) {
    return instance.put(`/items/${ticketID}`, { id: ticketID, ...newData });
  },
  createTicket(data) {
    return instance.post(`/items`, data).then((response) => {
      return response.data;
    });
  },
};
