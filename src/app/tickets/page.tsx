"use client";
import { useEffect, useState } from "react";

import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { GetTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await GetTickets();
      setTickets(data);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="All your tickets at one place"
      />

      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {loading
          ? "Upsss... Loading"
          : tickets.map((ticket: Ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
              />
            ))}
      </div>
    </div>
  );
};

export default TicketsPage;
