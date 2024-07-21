import { CalendarIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

export default async function PublicEventPage() {
  return (
    <main className="py-12">
      <div className="container">
        <Image
          src={
            "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed_1.jpg"
          }
          alt="Event Image"
          width={844}
          height={633}
          className="h-64 w-full rounded-xl border border-border object-cover object-center shadow"
        />

        <div className="mt-8">
          <p className="text-3xl font-medium text-foreground">
            BdvB x muenster.invest
          </p>
        </div>
        <div className="mt-6 flex items-center justify-start gap-10">
          <div className="flex w-fit items-center justify-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="size-4" />
            12.12.2022, 18:00
          </div>
          <div className="flex w-fit items-center justify-center gap-2 text-sm text-muted-foreground">
            <UserGroupIcon className="size-4" />
            Max. 150 Participants
          </div>
        </div>
      </div>
    </main>
  )
}
