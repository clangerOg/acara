import { cn } from "@/lib/utils"
import React from "react"

const PageHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <h1
      ref={ref}
      {...rest}
      className={cn("relative text-2xl font-medium text-foreground", className)}
    >
      <span className="absolute -left-8 top-1/2 block h-[70%] w-1 -translate-y-1/2 transform bg-foreground" />
      {children}
    </h1>
  )
})
PageHeaderTitle.displayName = "PageHeaderTitle"

export { PageHeaderTitle }
