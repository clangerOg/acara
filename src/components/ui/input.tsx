import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "mr-auto h-9 w-full max-w-72 rounded-lg border border-border px-2.5 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-zinc-400 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring hover:border-zinc-300 focus-within:hover:border-ring focus-visible:outline-none disabled:pointer-events-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
