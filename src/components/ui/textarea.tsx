import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "mr-auto min-h-24 rounded-lg border border-border w-full text-sm px-2.5 py-2 text-foreground placeholder:text-zinc-400 shadow-sm focus-within:ring-1 focus-within:border-ring focus-visible:outline-none focus-within:ring-ring hover:border-zinc-300 transition-colors focus-within:hover:border-ring max-w-72",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
