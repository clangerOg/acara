import { cn } from "@/lib/utils";
import {
  ChevronUpIcon,
  FolderIcon,
  HomeIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { SidebarLink } from "./sidebar-link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  return (
    <aside
      ref={ref}
      {...rest}
      className={cn(
        "h-full max-w-[18rem] w-full py-8 flex flex-col",
        className,
      )}
    >
      <div className="px-4 space-y-1.5 focus-visible:[&>*]:ring-offset-zinc-100">
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
      </div>
      <div className="mt-auto px-4">
        <button className="p-2 rounded-md hover:bg-zinc-200 transition-colors w-full flex justify-start items-center gap-5">
          <Avatar size={"small"} className="shrink-0">
            {/* TODO: Replace Fallback Image Source with source from config file */}
            <AvatarImage
              src={"https://avatars.githubusercontent.com/u/135615964?v=4"}
              alt={`User avatar`}
            />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
          <span className="inline-flex justify-center items-start flex-col grow">
            <span className="text-sm font-medium text-foreground w-fit">
              Christoph Langer
            </span>
          </span>
          <ChevronUpIcon className="size-5 text-muted-foreground shrink-0" />
        </button>
      </div>
    </aside>
  );
});
Sidebar.displayName = "Sidebar";

export { Sidebar };
