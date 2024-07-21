import { PageHeaderTitle } from "@/components/page-header";

export default async function DashboardPage() {
  return (
    <div className="container py-12">
      <PageHeaderTitle>Dashboard</PageHeaderTitle>
      <button className="bg-transparent text-foreground text-sm font-medium border border-border rounded-lg px-3 py-1.5 shadow-sm transition-colors hover:bg-zinc-100 hover:border-zinc-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none h-9">
        <span>Click me</span>
      </button>
      <button className="bg-zinc-800 text-white text-sm font-medium border border-zinc-950 rounded-lg px-3 py-1.5 shadow-btn-default transition-colors hover:bg-zinc-700 hover:border-zinc-800 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none h-9">
        <span>Click me</span>
      </button>
    </div>
  );
}
