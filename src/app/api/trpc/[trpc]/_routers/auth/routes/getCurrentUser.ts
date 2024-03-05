import { publicProcedure } from "@trpc";

export const getCurrentUser = publicProcedure.query(async ({ ctx }) => {
  return ctx.user;
});
