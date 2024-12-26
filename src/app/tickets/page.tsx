import Link from "next/link";

import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: "O",
  IN_PROGRESS: "I",
  DONE: "X",
};

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link
            href={ticketPath(ticket.id)}
            className="underline text-sm"
          >
            View ticket
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
