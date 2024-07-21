import { CreateEventForm } from "@/components/forms/create-event-form";
import { PageHeaderTitle } from "@/components/page-header";

export default async function NewDraftPage() {
  return (
    <div className="container py-12 max-w-screen-lg">
      <PageHeaderTitle>New Event</PageHeaderTitle>

      <div className="mt-20"></div>
      <CreateEventForm />
    </div>
  );
}
