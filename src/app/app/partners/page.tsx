import { PageHeaderTitle } from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

export default async function PartnersPage() {
  return (
    <div className="container py-12">
      <PageHeaderTitle>Partners</PageHeaderTitle>

      <div className="mb-6 mt-16 flex items-center justify-start">
        <Input placeholder="Search Events" />
        <Link
          href={"/app/events/new"}
          className={buttonVariants({ variant: "default" })}
        >
          Add Partner
          <PlusIcon className="size-4" />
        </Link>
      </div>
    </div>
  )
}
