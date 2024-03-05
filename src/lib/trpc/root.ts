import { createTRPCRouter } from "@/lib/trpc/trpc";
import router from "@router";

/**
 * This is the primary index for your server.
 *
 * All _routers added in /api/_routers should be manually added here.
 */
export const appRouter = createTRPCRouter(router);

// export type definition of API
export type AppRouter = typeof appRouter;
