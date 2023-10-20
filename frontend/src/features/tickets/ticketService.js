import axios from 'axios';

const API_URL = '/api/tickets/';

// Creat new ticket
const createTicket = async (ticketdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ticketdata, config);

  return response.data;
};

const ticketService = {
  createTicket,
};

export default ticketService;
