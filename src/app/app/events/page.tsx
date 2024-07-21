import { PageHeaderTitle } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default async function EventsPage() {
  return (
    <div className="container py-12">
      <PageHeaderTitle>Events</PageHeaderTitle>

      <div className="mt-16 mb-6 flex justify-start items-center">
        <Input placeholder="Search Events" />
        <Link
          href={"/app/events/new"}
          className={buttonVariants({ variant: "default" })}
        >
          New Event
          <PlusIcon className="size-4" />
        </Link>
      </div>
      <div className="border-t border-border pt-8 grid grid-cols-3 gap-8">
        <div className="border border-border rounded-xl p-3 shadow-md">
          <Image
            src={
              "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
            }
            alt="Event Image"
            width={844}
            height={633}
            className="h-40 overflow-hidden bg-red-300 object-cover object-center rounded-md"
          />
          <div className="grid grid-cols-2 gap-4 p-4">
            <p className="font-medium text-lg text-foreground col-span-2">
              Carlsquare x muenster.invest
            </p>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                12.12.2021
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                12.12.2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
