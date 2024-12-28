import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageParams = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageParams) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        button={
          <Button
            asChild
            variant="outline"
          >
            <Link href={ticketsPath()}>Go back to tickets</Link>
          </Button>
        }
        label="Ticket not found"
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
