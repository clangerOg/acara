import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "mr-auto h-9 rounded-lg border border-border w-full text-sm px-2.5 py-2 text-foreground placeholder:text-zinc-400 shadow-sm focus-within:ring-1 focus-within:border-ring focus-visible:outline-none focus-within:ring-ring hover:border-zinc-300 transition-colors focus-within:hover:border-ring max-w-72 disabled:pointer-events-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
