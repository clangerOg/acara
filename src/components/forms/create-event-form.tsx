"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { createEventSchema } from "@/server/schemas"
import { api } from "@/trpc/react"
import { CalendarIcon, CheckIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Checkbox } from "../ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Textarea } from "../ui/textarea"
import { TimePicker } from "../ui/time-picker"

function CreateEventForm() {
  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      draft: true,
      capacity: 10,
      // startDate: new Date(),
      // endDate: new Date(),
      image:
        "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg",
    },
  })

  const router = useRouter()

  // TODO: Display error messages.
  const createEvent = api.event.create.useMutation({
    onSuccess({ id }) {
      setLoading(false)
      toast({
        title: "Event created successfully.",
        description: "Your event has been created successfully.",
        duration: 2000,
      })
      router.push(`/app/events/${id}`)
    },
    onError(error) {
      setLoading(false)
      toast({
        title: "Failed to create event",
        description: error.message ?? "An error unknown occurred.",
      })
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createEventSchema>) {
    setLoading(true)

    createEvent.mutate({
      ...values,
      image:
        "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          disabled={loading}
          name="name"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-1 md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>Name</FormLabel>
                <FormDescription>
                  This is the event name. It will be displayed publicly on your
                  event page.
                </FormDescription>
              </div>
              <div>
                <FormControl>
                  <Input
                    placeholder="Event name"
                    className="max-w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="description"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>
                  Description
                  <span className="ms-2 font-normal text-muted-foreground">
                    Optional
                  </span>
                </FormLabel>
                <FormDescription>
                  Describe your event in detail. This will be displayed on your
                  event page.
                </FormDescription>
              </div>
              <div>
                <FormControl>
                  <Textarea
                    placeholder="This is a event description."
                    className="max-w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="location"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>Location</FormLabel>
                <FormDescription>
                  This is where the event will take place. It will be displayed
                  publicly on your event page.
                </FormDescription>
              </div>
              <div>
                <FormControl>
                  <Input
                    placeholder="Williamsburg, Brooklyn"
                    className="max-w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="capacity"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>Capacity</FormLabel>
                <FormDescription>
                  The maximum number of attendees that can RSVP to this event.
                </FormDescription>
              </div>
              <div>
                <FormControl>
                  <Input
                    placeholder="200"
                    className="max-w-full"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="startDate"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>Start Date</FormLabel>
                <FormDescription>
                  The date and time when the event will start.
                </FormDescription>
              </div>
              <div>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        disabled={loading}
                        className={cn(
                          "w-full justify-start text-left font-normal shadow-sm",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP HH:mm:ss")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                    <div className="border-t border-border p-3">
                      <TimePicker setDate={field.onChange} date={field.value} />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="endDate"
          render={({ field }) => (
            <FormItem className="grid grid-cols-1 gap-8 border-b border-border py-12 first:pt-0 last:border-none md:grid-cols-2">
              <div className="space-y-1">
                <FormLabel>End Date</FormLabel>
                <FormDescription>
                  The date and time when the event will end.
                </FormDescription>
              </div>
              <div>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        disabled={loading}
                        className={cn(
                          "w-full justify-start text-left font-normal shadow-sm",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP HH:mm:ss")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                    <div className="border-t border-border p-3">
                      <TimePicker setDate={field.onChange} date={field.value} />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="draft"
          render={({ field }) => (
            <FormItem className="flex items-start justify-start gap-3 border-b border-border py-12 first:pt-0 last:border-none">
              <FormControl>
                <Checkbox
                  disabled={field.disabled}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1"
                />
              </FormControl>
              <div>
                <FormLabel className="leading-none">Draft</FormLabel>
                <FormDescription>
                  Draft events are not publicly visible. You can publish them
                  later. If you&apos;re not sure, leave this checked.
                </FormDescription>
                <FormMessage className="mt-2" />
              </div>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-3 pt-10">
          <Button
            disabled={loading}
            variant={"destructive"}
            onClick={() => router.push("/app/events")}
          >
            Discard
            <XMarkIcon className="size-4" />
          </Button>
          <Button
            type="submit"
            disabled={loading}
            variant={"success"}
            className="relative"
          >
            <span
              className={cn(
                "inline-flex items-center justify-center gap-2.5 opacity-100",
                loading && "opacity-0"
              )}
            >
              Create event
              <CheckIcon className="size-4" />
            </span>

            <div
              role="status"
              className={cn(
                "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2",
                !loading && "hidden"
              )}
            >
              <svg
                aria-hidden="true"
                className="inline h-4 w-4 animate-spin fill-zinc-800 text-zinc-200 dark:text-zinc-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </Button>
        </div>
      </form>
    </Form>
  )
}
CreateEventForm.displayName = "CreateEventForm"

export { CreateEventForm }
