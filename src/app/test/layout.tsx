import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUpIcon, HomeIcon, TicketIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-zinc-100 w-screen h-screen flex justify-start items-start">
      <aside className="h-full max-w-xs w-full py-8 flex flex-col">
        <div className="px-4 space-y-1.5 [&>*]:!ring-offset-zinc-100">
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
      <div className="grow h-full overflow-y-auto py-2 pr-2">
        <div className="min-h-full bg-white w-full rounded-lg border border-border py-12">
          {children}
        </div>
      </div>
    </main>
  );
}
