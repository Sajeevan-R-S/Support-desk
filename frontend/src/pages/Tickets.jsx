import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const { tickets, isLoading } = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  if (!tickets) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url={'/'} />
      {tickets.length === 0 ? (
        <h1>Oops, there are no tickets</h1>
      ) : (
        <>
          <h1>Tickets</h1>
          <div className="tickets">
            <div className="ticket-headings">
              <div>Date</div>
              <div>Product</div>
              <div>Status</div>
              <div></div>
            </div>
            {tickets.map((ticket) => (
              <TicketItem key={ticket._id} ticket={ticket} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Tickets;