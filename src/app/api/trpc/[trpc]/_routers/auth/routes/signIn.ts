import z from "zod";
import { publicProcedure } from "@trpc";

export const route = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
      password: z.string().min(5).max(255),
    }),
  )
  .mutation(() => {
    return null;
  });
