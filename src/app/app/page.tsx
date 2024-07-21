import { PageHeaderTitle } from "@/components/page-header"

export default async function DashboardPage() {
  return (
    <div className="container py-12">
      <PageHeaderTitle>Dashboard</PageHeaderTitle>
      <button className="h-9 rounded-lg border border-border bg-transparent px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        <span>Click me</span>
      </button>
      <button className="h-9 rounded-lg border border-zinc-950 bg-zinc-800 px-3 py-1.5 text-sm font-medium text-white shadow-btn-default transition-colors hover:border-zinc-800 hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        <span>Click me</span>
      </button>
    </div>
  )
}
