import { auth } from "@/auth"
import { AccountAvatar } from "@/components/account-avatar"
import { Sidebar } from "@/components/sidebar"
import { api } from "@/trpc/server"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    return <p>No Session found</p>
  }

  const user = await api.user.getById({
    id: session.user.id,
  })

  if (!user) {
    return <p>User not found</p>
  }

  return (
    <main className="flex h-screen w-screen flex-col">
      <nav className="w-full border-b border-border">
        <div className="flex h-12 items-center justify-end px-12">
          <AccountAvatar user={user} />
        </div>
      </nav>
      <div className="flex h-full w-full items-start justify-start">
        <Sidebar />
      </div>
    </main>
  )
}
