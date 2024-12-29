import { TicketItem } from "@/features/ticket/components/ticket-item";
import { GetTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";

const TicketList = async () => {
  const tickets = await GetTickets();

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket: Ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </div>
  );
};

export { TicketList };
