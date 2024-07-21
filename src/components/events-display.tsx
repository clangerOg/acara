"use client"

import { cn } from "@/lib/utils"
import { PlusIcon } from "@heroicons/react/16/solid"
import type { Event } from "@prisma/client"
import Link from "next/link"
import { EventCard } from "./event-card"
import { buttonVariants } from "./ui/button"
import { Input } from "./ui/input"

interface EventsDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  events: Event[]
}

export function EventsDisplay({
  events,
  className,
  ...rest
}: EventsDisplayProps) {
  return (
    <div {...rest} className={cn("", className)}>
      <div className="mb-6 mt-16 flex items-center justify-start">
        <Input placeholder="Search Events" />
        <Link
          href={"/app/events/new"}
          className={buttonVariants({ variant: "default" })}
        >
          New Event
          <PlusIcon className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
EventsDisplay.displayName = "EventsDisplay"
