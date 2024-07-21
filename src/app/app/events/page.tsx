import { EventsDisplay } from "@/components/events-display"
import { PageHeaderTitle } from "@/components/page-header"
import { api } from "@/trpc/server"

export default async function EventsPage() {
  const events = await api.event.getAll()

  return (
    <div className="container py-12">
      <PageHeaderTitle>Events</PageHeaderTitle>

      <EventsDisplay events={events} />
    </div>
  )
}
