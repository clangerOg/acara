import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
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
