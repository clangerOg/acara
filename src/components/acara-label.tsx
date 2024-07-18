import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AcaraLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} className={cn("", className)} {...rest}>
      <p className="text-xs text-muted-foreground mb-1">Powered by</p>
      {/* TODO - Replace with Link from site config */}
      <Link href="https://github.com/clangerOg/acara" target="_blank">
        <div className="rounded-md border border-border px-2 py-1 w-fit flex justify-center items-center gap-1.5 hover:bg-primary-100 transition-colors">
          <CalendarIcon className="size-4 text-accent-500" />
          <p className="text-sm mt-px font-medium text-foreground">Acara</p>
        </div>
      </Link>
    </div>
  );
});
AcaraLabel.displayName = "AcaraLabel";

export { AcaraLabel };
