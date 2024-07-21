import { PageHeaderTitle } from "@/components/page-header"
import { PageTabs, PageTabsItem } from "@/components/page-tabs"
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import type { PropsWithChildren } from "react"

export default async function PartnerPage({ children }: PropsWithChildren) {
  return (
    <div className="container py-12">
      <Link
        href={"/app/partners"}
        className="inline-flex items-center justify-start gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
        <span>Partners</span>
      </Link>
      <div className="mt-8 flex items-start justify-between">
        <PageHeaderTitle>Goldman Sachs</PageHeaderTitle>
        <Image
          src={"/logos/goldman-sachs-2.svg"}
          alt=""
          width={595}
          height={250}
          className="max-w-32"
        />
      </div>

      <PageTabs className="mt-8">
        <PageTabsItem href={"/"} routePrefix="/app/partners/sdf">
          Overview
        </PageTabsItem>
        <PageTabsItem href={"/contact"} routePrefix="/app/partners/sdf">
          Contact
        </PageTabsItem>
        <PageTabsItem href={"/settings"} routePrefix="/app/partners/sdf">
          Settings
        </PageTabsItem>
      </PageTabs>
      {children}
    </div>
  )
}
