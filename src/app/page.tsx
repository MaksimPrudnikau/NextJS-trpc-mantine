"use client";

import { api } from "@/lib/trpc/react";

export default function Home() {
  const { data, isLoading } = api.auth.getCurrentUser.useQuery();

  return (
    <main>
      {isLoading ? <p>Loading...</p> : null}
      {data ? <p className={"text-red-200"}>{data.email}</p> : null}
    </main>
  );
}
