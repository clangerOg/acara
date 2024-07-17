import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <div className="container py-32">
          <p className="text-3xl font-semibold text-foreground">Hello World</p>
        </div>
      </main>
    </HydrateClient>
  );
}
