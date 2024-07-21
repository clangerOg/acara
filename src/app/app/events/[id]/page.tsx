import { PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";
import { PencilSquareIcon, ShareIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

interface EventPageProps {
  params: {
    id: string;
  };
}

export default async function EventPage({ params: { id } }: EventPageProps) {
  const event = await api.event.getById({ id });

  if (event === null) {
    notFound();
  }

  return (
    <>
      <div className="container p-6 pb-0 relative">
        <Image
          src={
            event.image ??
            "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
          }
          alt="Event Image"
          width={844}
          height={633}
          className="h-52 overflow-hidden bg-red-300 object-cover object-center rounded-lg w-full"
        />
        {event.draft && (
          <div className="absolute top-10 right-10">
            <div className="flex justify-center items-center gap-2 bg-white rounded-full border border-border px-3 py-1 text-sm font-medium shadow-sm">
              <div className="size-2 rounded-full bg-orange-400" />
              <p>Draft</p>
            </div>
          </div>
        )}
      </div>
      <div className="container py-12">
        <div className="flex justify-between items-center gap-6">
          <PageHeaderTitle className="max-w-prose w-full">
            {event.name}
          </PageHeaderTitle>
          <div className="flex gap-3 justify-center items-center">
            <Button variant={"outline"}>
              Share
              <ShareIcon className="size-4" />
            </Button>
            <Button>
              Edit
              <PencilSquareIcon className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-4 gap-8">
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-sm font-medium text-foreground mt-1.5">
              {event.location}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Date & Time</p>
            <p className="text-sm font-medium text-foreground mt-1.5">
              {new Date(event.start).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Capacity & Registration
            </p>
            <p className="text-sm font-medium text-foreground mt-1.5">
              <span className="text-blue-500">783</span>{" "}
              <span>/{event.capacity}</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Registration Deadline
            </p>
            <p className="text-sm font-medium text-foreground mt-1.5">
              12.12.2021, 12:00
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-10">
          <p className="text-lg font-medium text-foreground">Participants</p>
        </div>
      </div>
    </>
  );
}
