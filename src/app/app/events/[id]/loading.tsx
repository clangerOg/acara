import { Skeleton } from "@/components/ui/skeleton";

export default async function EventLoadingPage() {
  return (
    <>
      <div className="container p-6 pb-0 relative">
        <Skeleton className="w-full h-52" />
      </div>
      <div className="container py-12">
        <div className="flex justify-between items-center gap-6">
          <Skeleton className="h-7 w-full max-w-72" />
        </div>
        <div className="mt-16 grid grid-cols-4 gap-8">
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
        </div>
        <div className="mt-10 border-t border-border pt-10">
          <Skeleton className="h-6 w-full max-w-48" />
        </div>
      </div>
    </>
  );
}
