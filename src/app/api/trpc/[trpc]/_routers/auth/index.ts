import { createTRPCRouter } from "@/lib/trpc/trpc";
import { getCurrentUser } from "./routes/getCurrentUser";
import { test } from "./routes/test";

export const router = createTRPCRouter({
  getCurrentUser,
  test,
});
