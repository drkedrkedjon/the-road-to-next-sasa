"use client";
import { Ticket } from "@prisma/client";
import { useActionState } from "react";

import { FieldError } from "@/components/form/field-error";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "@/features/ticket/actions/upsert-ticket";

type TicketUpdateFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  const [actionState, action] = useActionState(
    // @ts-expect-error have no idea how to fix this
    upsertTicket.bind(null, ticket?.id),
    {
      message: "",
      payload: new FormData(),
      fieldErrors: {},
    }
  );

  return (
    <form
      action={action}
      className="flex flex-col  gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          // @ts-expect-error have no idea how to fix this
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError
        // @ts-expect-error have no idea how to fix this
        actionState={actionState}
        name="title"
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={
          // @ts-expect-error have no idea how to fix this
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError
        // @ts-expect-error have no idea how to fix this
        actionState={actionState}
        name="content"
      />
      <SubmitButton label={ticket ? "Edit" : "Create"} />
      {actionState.message}
    </form>
  );
};

export { TicketUpsertForm };
