import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUpIcon, HomeIcon, TicketIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import type { PropsWithChildren } from "react"

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen w-screen items-start justify-start bg-zinc-100">
      <aside className="flex h-full w-full max-w-xs flex-col py-8">
        <div className="space-y-1.5 px-4 [&>*]:!ring-offset-zinc-100">
          <Link href="/sdfsdfsdfs">
            <HomeIcon className="size-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/sefserser">
            <TicketIcon className="size-5" />
            <span>Events</span>
          </Link>
        </div>
        <div className="mt-auto px-4">
          <button className="flex w-full items-center justify-start gap-5 rounded-md p-2 transition-colors hover:bg-zinc-200">
            <Avatar size={"small"} className="shrink-0">
              {/* TODO: Replace Fallback Image Source with source from config file */}
              <AvatarImage
                src={"https://avatars.githubusercontent.com/u/135615964?v=4"}
                alt={`User avatar`}
              />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            <span className="inline-flex grow flex-col items-start justify-center">
              <span className="w-fit text-sm font-medium text-foreground">
                Christoph Langer
              </span>
            </span>
            <ChevronUpIcon className="size-5 shrink-0 text-muted-foreground" />
          </button>
        </div>
      </aside>
      <div className="h-full grow overflow-y-auto py-2 pr-2">
        <div className="min-h-full w-full rounded-lg border border-border bg-white py-12">
          {children}
        </div>
      </div>
    </main>
  )
}
