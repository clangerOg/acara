import { Sidebar } from "@/components/sidebar";
import type { PropsWithChildren } from "react";

export default async function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-zinc-100 w-screen h-screen flex justify-start items-start">
      <Sidebar />
      <div className="grow h-full overflow-y-auto py-2 pr-2">
        <div className="min-h-full bg-white w-full rounded-lg border border-border overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  );
}
