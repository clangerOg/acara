import { AcaraLabel } from "@/components/acara-label"
import React from "react"

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <main>
      {children}
      <AcaraLabel className="absolute left-8 top-8" />
    </main>
  )
}
