import { publicProcedure } from "@trpc";

export const test = publicProcedure.query(() => "test");
