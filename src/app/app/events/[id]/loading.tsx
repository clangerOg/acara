import { Skeleton } from "@/components/ui/skeleton"

export default async function EventLoadingPage() {
  return (
    <>
      <div className="container relative p-6 pb-0">
        <Skeleton className="h-52 w-full" />
      </div>
      <div className="container py-12">
        <div className="flex items-center justify-between gap-6">
          <Skeleton className="h-7 w-full max-w-72" />
        </div>
        <div className="mt-16 grid grid-cols-4 gap-8">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="mt-10 border-t border-border pt-10">
          <Skeleton className="h-6 w-full max-w-48" />
        </div>
      </div>
    </>
  )
}
