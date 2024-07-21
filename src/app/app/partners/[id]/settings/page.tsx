import { DeletePartnerDialog } from "@/components/dialogs/delete-partner-dialog"

export default async function PartnerSettingsPage() {
  return (
    <div className="mt-10">
      <p className="text-lg font-medium text-foreground">Settings</p>

      <div className="mt-12 w-full rounded-xl border border-border bg-zinc-100 p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-red-500">Delete Partner</p>
            <p className="mt-1 max-w-prose text-sm text-muted-foreground">
              This action is irreversible. All data will be lost. Please be sure
              before proceeding.
            </p>
          </div>
          <DeletePartnerDialog id="abcxyz123" name="muenster.invest" />
        </div>
      </div>
    </div>
  )
}
