"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function TestPage() {
  const { toast } = useToast()

  return (
    <div className="mx-auto w-full max-w-screen-xl px-8">
      <p className="relative text-2xl font-medium text-foreground">
        <span className="absolute -left-8 top-1/2 block h-[70%] w-1 -translate-y-1/2 transform bg-foreground" />
        Dashboard
      </p>
      <div className="mt-10 flex w-full items-center justify-end gap-4">
        <Button
          onClick={() => {
            toast({
              title: "Event Created",
              description: "Event has been created successfully",
              duration: 10 * 60 * 1000,
            })
          }}
        >
          Create Event
        </Button>
      </div>
    </div>
  )
}
