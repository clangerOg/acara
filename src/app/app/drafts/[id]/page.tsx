import { PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

interface DraftPageProps {
  params: { id: string };
}

export default async function DraftPage({ params: { id } }: DraftPageProps) {
  return (
    <>
      <div className="h-52  relative">
        <Image
          src={
            "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
          }
          alt="Event Image"
          width={844}
          height={633}
          className="h-full overflow-hidden bg-red-300 object-cover object-center w-full"
        />
        <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-background/0 to-background flex justify-start items-end">
          <div className="container max-w-screen-lg grid grid-cols-2 gap-8">
            <PageHeaderTitle>Carlsquare x muenster.invest</PageHeaderTitle>
            <div className="flex justify-end items-center gap-4">
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
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="font-medium text-foreground max-w-prose text-sm">
              Event Name: {id}
            </p>
            <p className="max-w-prose text-muted-foreground mt-1 text-sm">
              This is the event name. It is a very long text that will be
              truncated.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Event Name"
              defaultValue={"Carlsquare x muenster.invest"}
              className="mr-auto h-9 rounded-lg border border-border w-full text-sm px-2.5 py-2 text-foreground placeholder:text-zinc-400 shadow-sm focus-within:ring-1 focus-within:border-ring focus-visible:outline-none focus-within:ring-ring hover:border-zinc-300 transition-colors focus-within:hover:border-ring"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 py-10">
          <div>
            <p className="font-medium text-foreground max-w-prose text-sm">
              Event Location
            </p>
            <p className="max-w-prose text-muted-foreground mt-1 text-sm">
              This is where the event will take place.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              defaultValue={"Carlsquare GmbH"}
              className="mr-auto h-9 rounded-lg border border-border w-full text-sm px-2.5 py-2 text-foreground placeholder:text-zinc-400 shadow-sm focus-within:ring-1 focus-within:border-ring focus-visible:outline-none focus-within:ring-ring"
            />
          </div>
        </div>
      </div>
    </>
  );
}
