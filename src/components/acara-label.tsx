import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

const AcaraLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      <p className="mb-1 text-xs text-muted-foreground">Powered by</p>
      {/* TODO - Replace with Link from site config */}
      <Link href="https://github.com/clangerOg/acara" target="_blank">
        <div className="flex w-fit items-center justify-center gap-1.5 rounded-md border border-border px-2 py-1 shadow-sm transition-colors hover:bg-primary-100">
          <CalendarIcon className="size-4 text-accent-500" />
          <p className="mt-px text-sm font-medium text-foreground">Acara</p>
        </div>
      </Link>
    </div>
  )
})
AcaraLabel.displayName = "AcaraLabel"

export { AcaraLabel }
