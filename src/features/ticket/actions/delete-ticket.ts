"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  // Revalidate the tickets path when a ticket is deleted
  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
