import { cn } from "@/lib/utils"
import { Bars3Icon } from "@heroicons/react/20/solid"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Navbar({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn("flex items-center justify-between px-8 py-4", className)}
    >
      <Avatar size={"small"} className="shrink-0">
        {/* TODO: Replace Fallback Image Source with source from config file */}
        <AvatarImage
          src={"https://avatars.githubusercontent.com/u/135615964?v=4"}
          alt={`User avatar`}
        />
        <AvatarFallback>CL</AvatarFallback>
      </Avatar>
      <button>
        <Bars3Icon className="size-5 text-foreground" />
      </button>
    </div>
  )
}
Navbar.displayName = "Navbar"
