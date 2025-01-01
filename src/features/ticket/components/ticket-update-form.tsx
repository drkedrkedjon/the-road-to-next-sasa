import { Ticket } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateTicket } from "@/features/ticket/actions/update-ticket";

type TicketUpdateFormProps = {
  ticket: Ticket;
};

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col  gap-y-2"
    >
      <Input
        type="hidden"
        name="id"
        value={ticket.id}
      />
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={ticket.title}
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={ticket.content}
      />

      <Button type="submit">Update</Button>
    </form>
  );
};

export { TicketUpdateForm };
