import { PageHeaderTitle } from "@/components/page-header"

export default async function DraftsPage() {
  return (
    <div className="container py-12">
      <PageHeaderTitle>Drafts</PageHeaderTitle>

      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8"></div>
    </div>
  )
}
