import { PageHeaderTitle } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid"
import Image from "next/image"

interface DraftPageProps {
  params: { id: string }
}

export default async function DraftPage({ params: { id } }: DraftPageProps) {
  return (
    <>
      <div className="relative h-52">
        <Image
          src={
            "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
          }
          alt="Event Image"
          width={844}
          height={633}
          className="h-full w-full overflow-hidden bg-red-300 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-start bg-gradient-to-b from-background/0 to-background">
          <div className="container grid max-w-screen-lg grid-cols-2 gap-8">
            <PageHeaderTitle>Carlsquare x muenster.invest</PageHeaderTitle>
            <div className="flex items-center justify-end gap-4">
              <Button>
                Edit
                <PencilSquareIcon className="size-4" />
              </Button>
              <Button variant={"destructive"}>
                Discard
                <XMarkIcon className="size-4" />
              </Button>
              <Button variant={"success"}>
                Save
                <CheckIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20 max-w-screen-lg divide-y divide-border">
        <div className="mb-10 grid grid-cols-2 gap-8">
          <div>
            <p className="max-w-prose text-sm font-medium text-foreground">
              Event Name: {id}
            </p>
            <p className="mt-1 max-w-prose text-sm text-muted-foreground">
              This is the event name. It is a very long text that will be
              truncated.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Event Name"
              defaultValue={"Carlsquare x muenster.invest"}
              className="mr-auto h-9 w-full rounded-lg border border-border px-2.5 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-zinc-400 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring hover:border-zinc-300 focus-within:hover:border-ring focus-visible:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 py-10">
          <div>
            <p className="max-w-prose text-sm font-medium text-foreground">
              Event Location
            </p>
            <p className="mt-1 max-w-prose text-sm text-muted-foreground">
              This is where the event will take place.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              defaultValue={"Carlsquare GmbH"}
              className="mr-auto h-9 w-full rounded-lg border border-border px-2.5 py-2 text-sm text-foreground shadow-sm placeholder:text-zinc-400 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring focus-visible:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  )
}
