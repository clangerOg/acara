import { SignInForm } from "@/components/forms/sign-in-form"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function SingInPage() {
  return (
    <section className="grid min-h-svh w-screen md:grid-cols-2">
      <div className="container flex items-center justify-center py-32">
        <div className="w-full max-w-md">
          <div className="mb-12 w-fit rounded-[calc(0.5rem+1px)] bg-gradient-to-t from-background to-accent-200 p-px">
            <div className="rounded-[0.5rem] bg-gradient-to-b from-background to-accent-100 p-2.5">
              <CalendarIcon className="size-6 text-accent-500" />
            </div>
          </div>
          <p className="text-2xl font-medium text-foreground">
            Sign in to your account
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Don&apos;t have an acccount yet?{" "}
            <Link href={"/"} className="font-medium text-accent-500">
              Sign up here
            </Link>
          </p>

          <SignInForm />
        </div>
      </div>
      <div className="relative hidden h-full w-full bg-gradient-to-tr from-accent-200 to-accent-50 md:block">
        <Image
          src={"/assets/auth-cell-filler.jpg"}
          alt="Aerial Photography of Island"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
