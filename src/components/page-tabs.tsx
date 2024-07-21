"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const PageTabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
      className={cn("flex items-center justify-start gap-2", className)}
    />
  )
})
PageTabs.displayName = "PageTabs"

interface PageTabsItemProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "href"> {
  routePrefix?: string
  href: string
}

const PageTabsItem = React.forwardRef<HTMLAnchorElement, PageTabsItemProps>(
  ({ href, className, routePrefix, ...rest }, ref) => {
    const pathname = usePathname()

    const active =
      href === "/"
        ? pathname === routePrefix
        : pathname.startsWith(routePrefix + href)

    return (
      <Link
        ref={ref}
        href={`${routePrefix}${href}`}
        data-state={active ? "active" : "inactive"}
        className={cn(
          "cursor-pointer rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-zinc-100 data-[state=active]:bg-zinc-100 data-[state=active]:text-foreground",
          className
        )}
        {...rest}
      >
        {rest.children}
      </Link>
    )
  }
)
PageTabsItem.displayName = "PageTabsItem"

export { PageTabs, PageTabsItem }
