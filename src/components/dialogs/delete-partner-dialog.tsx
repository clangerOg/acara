"use client"

import { BackspaceIcon } from "@heroicons/react/16/solid"
import * as DialogPrimtive from "@radix-ui/react-dialog"
import React from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"

interface DeletePartnerDialogProps {
  id: string
  name: string
}

export const DeletePartnerDialog: React.FC<DeletePartnerDialogProps> = ({
  name,
}) => {
  const [value, setValue] = React.useState("")
  const isConfirmed = value === name

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>
          Delete Partner <BackspaceIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <p className="text-lg font-medium text-red-500">Delete Partner</p>
        <p className="mt-2 text-sm text-muted-foreground">
          You&apos;re about to delete a partner. This action is irreversible and
          all data will be lost.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          To confirm, please write{" "}
          <span className="font-medium text-foreground">{name}</span> in the
          input field below.
        </p>
        <Input
          className="mt-4 w-full max-w-full"
          placeholder="Enter name"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />

        <div className="mt-8 grid grid-cols-2 gap-6">
          <DialogPrimtive.Close asChild>
            <Button variant="outline">Cancel</Button>
          </DialogPrimtive.Close>
          <Button variant={"destructive"} disabled={!isConfirmed}>
            Confirm <BackspaceIcon className="size-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
DeletePartnerDialog.displayName = "DeletePartnerDialog"
