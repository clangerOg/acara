import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "mr-auto min-h-24 w-full max-w-72 rounded-lg border border-border px-2.5 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-zinc-400 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring hover:border-zinc-300 focus-within:hover:border-ring focus-visible:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
