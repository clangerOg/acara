import { auth } from "@/auth"
import { api } from "@/trpc/server"
import { UserRole } from "@prisma/client"
import type { PropsWithChildren } from "react"

export default async function AdminLayout({ children }: PropsWithChildren) {
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

  if (user.role != UserRole.ADMIN) {
    return <p>Unauthorized</p>
  }

  return children
}
