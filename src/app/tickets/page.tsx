import Link from "next/link";

import { initialTickets } from "@/data";
console.log(initialTickets);

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link
            href={`/tickets/${ticket.id}`}
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
