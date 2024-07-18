import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HydrateClient } from "@/trpc/server";

export default async function HelloWorld() {
  const session = await auth();

  if (!session) {
    return <p>No session found.</p>;
  }

  const { user } = session;

  return (
    <HydrateClient>
      <main>
        <div className="container py-32">
          <p className="text-3xl font-semibold text-foreground">Hello World</p>
          <p>{JSON.stringify(user)}</p>

          <Avatar size={"small"}>
            <AvatarImage
              src={
                user.image ??
                "https://avatars.githubusercontent.com/u/135615964?v=4"
              }
              alt={`Profile pricture for ${user.name}`}
            />
            <AvatarFallback>
              <p>{user.name?.charAt(0).toUpperCase()}</p>
            </AvatarFallback>
          </Avatar>
        </div>
      </main>
    </HydrateClient>
  );
}
