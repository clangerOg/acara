import { auth } from "@/auth";
import { AccountAvatar } from "@/components/account-avatar";
import { Sidebar } from "@/components/sidebar";
import { api } from "@/trpc/server";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <p>No Session found</p>;
  }

  const user = await api.user.getById({
    id: session.user.id,
  });

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <main className="h-screen w-screen flex flex-col">
      <nav className="w-full border-b border-border">
        <div className="px-12 h-12 flex justify-end items-center">
          <AccountAvatar user={user} />
        </div>
      </nav>
      <div className="w-full flex justify-start items-start h-full">
        <Sidebar />
      </div>
    </main>
  );
}
