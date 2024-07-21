import type { User } from "@prisma/client"
import { LogOutIcon } from "lucide-react"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface AccountAvatarProps {
  user: User
}
const AccountAvatar: React.FC<AccountAvatarProps> = ({ user }) => {
  return (
    <Popover>
      <PopoverTrigger className="rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        <Avatar size={"small"}>
          {/* TODO: Replace Fallback Image Source with source from config file */}
          <AvatarImage
            src={
              user.image ??
              "https://avatars.githubusercontent.com/u/135615964?v=4"
            }
            alt={`User avatar`}
          />
          <AvatarFallback>
            {user.name?.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent collisionPadding={32}>
        <div className="flex items-start justify-start gap-4">
          <Avatar className="mt-0.5 size-8 border-none">
            {/* TODO: Replace Fallback Image Source with source from config file */}
            <AvatarImage
              src={
                user.image ??
                "https://avatars.githubusercontent.com/u/135615964?v=4"
              }
              alt={`User avatar`}
            />
            <AvatarFallback>
              {user.name?.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grow">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>

            <Button size="small" className="mt-6 w-full" variant="outline">
              Sign Out
              <LogOutIcon className="size-3.5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
AccountAvatar.displayName = "AccountAvatar"

export { AccountAvatar }
