import { cn } from "@/lib/utils"
import { BuildingStorefrontIcon } from "@heroicons/react/16/solid"
import {
  ChevronUpIcon,
  FolderIcon,
  HomeIcon,
  TicketIcon,
} from "@heroicons/react/20/solid"
import React from "react"
import { SidebarLink } from "./sidebar-link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  return (
    <aside
      ref={ref}
      {...rest}
      className={cn(
        "flex h-full w-full max-w-[18rem] flex-col py-8",
        className
      )}
    >
      <div className="space-y-1.5 px-4 focus-visible:[&>*]:ring-offset-zinc-100">
        <SidebarLink href="/app">
          <HomeIcon className="size-5" />
          <span>Dashboard</span>
        </SidebarLink>
        <SidebarLink href="/app/events">
          <TicketIcon className="size-5" />
          <span>Events</span>
        </SidebarLink>
        <SidebarLink href="/app/drafts">
          <FolderIcon className="size-5" />
          <span>Drafts</span>
        </SidebarLink>
        <SidebarLink href="/app/partners">
          <BuildingStorefrontIcon className="size-5" />
          <span>Partners</span>
        </SidebarLink>
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
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }
