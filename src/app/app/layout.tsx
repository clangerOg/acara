import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { HydrateClient } from "@/trpc/server"
import type { PropsWithChildren } from "react"

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <HydrateClient>
      <main className="flex h-screen w-screen flex-col items-start justify-start bg-zinc-100 lg:flex-row">
        <Sidebar className="hidden lg:flex" />
        <div className="h-full w-full grow overflow-y-auto py-2 pb-24 pl-2 pr-2 lg:pb-2 lg:pl-0">
          <Navbar className="flex lg:hidden" />
          <div className="min-h-full w-full overflow-hidden rounded-lg border border-border bg-white">
            {children}
          </div>
        </div>
      </main>
    </HydrateClient>
  )
}
