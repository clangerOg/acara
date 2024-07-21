"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function TestPage() {
  const { toast } = useToast();

  return (
    <div className="max-w-screen-xl w-full mx-auto px-8">
      <p className="text-2xl font-medium text-foreground relative">
        <span className="block h-[70%] w-1 bg-foreground absolute -left-8 top-1/2 -translate-y-1/2 transform" />
        Dashboard
      </p>
      <div className="mt-10 w-full flex justify-end items-center gap-4">
        <Button
          onClick={() => {
            toast({
              title: "Event Created",
              description: "Event has been created successfully",
              duration: 10 * 60 * 1000,
            });
          }}
        >
          Create Event
        </Button>
      </div>
    </div>
  );
}
