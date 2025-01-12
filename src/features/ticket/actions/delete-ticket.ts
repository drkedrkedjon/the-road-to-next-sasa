"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { setCookieByKey } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  // Revalidate the tickets path when a ticket is deleted para cargar la lista de tickets actualizada
  revalidatePath(ticketsPath());
  await setCookieByKey("toast", "Ticket deleted");
  redirect(ticketsPath());
};
