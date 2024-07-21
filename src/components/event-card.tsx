import { cn } from "@/lib/utils"
import type { Event } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  event: Event
}

const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  ({ className, event, ...rest }, ref) => {
    const { name, id, image } = event

    return (
      <Link href={`/app/events/${id}`}>
        <div
          ref={ref}
          {...rest}
          className={cn(
            "overflow-hidden rounded-lg border border-border shadow-md",
            className
          )}
        >
          <div className="relative h-32 w-full border-b border-border bg-zinc-100">
            <Image
              src={
                image ??
                "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
              }
              alt="Event Thumbnail"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-4">
            <p className="font-medium text-foreground">{name}</p>
          </div>
        </div>
      </Link>
    )
  }
)
EventCard.displayName = "EventCard"

export { EventCard }
