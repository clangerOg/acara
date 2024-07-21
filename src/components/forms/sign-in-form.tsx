import { signIn } from "@/auth"
import React from "react"
import { GithubIcon } from "../icons"
import { Button } from "../ui/button"

const SignInForm: React.FC = () => {
  return (
    <form
      className="mt-10"
      action={async () => {
        "use server"

        await signIn("github", { redirectTo: "/app" })
      }}
    >
      <Button variant={"outline"} className="w-full" value={"github"}>
        <GithubIcon className="size-4 text-accent-500" />
        Sign in with Github
      </Button>
    </form>
  )
}
SignInForm.displayName = "SignInForm"

export { SignInForm }
