"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface SidebarLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
}

const SidebarLink = React.forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ className, href, ...rest }, ref) => {
    const pathname = usePathname()

    const isActive =
      href != "/app" ? pathname.startsWith(href) : pathname === href

    return (
      <Link
        ref={ref}
        data-active={isActive ? true : null}
        href={href}
        {...rest}
        tabIndex={isActive ? 0 : -1}
        className={cn(
          "flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[active]:text-foreground hover:[&_svg]:text-foreground",
          className
        )}
      />
    )
  }
)
SidebarLink.displayName = "SidebarLink"

export { SidebarLink }
