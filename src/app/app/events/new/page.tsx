import { CreateEventForm } from "@/components/forms/create-event-form"
import { PageHeaderTitle } from "@/components/page-header"

export default async function NewDraftPage() {
  return (
    <div className="container max-w-screen-lg py-12">
      <PageHeaderTitle>New Event</PageHeaderTitle>

      <div className="mt-20"></div>
      <CreateEventForm />
    </div>
  )
}
