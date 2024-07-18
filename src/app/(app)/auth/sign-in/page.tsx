import { SignInForm } from "@/components/forms/sign-in-form";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SingInPage() {
  return (
    <section className="w-screen min-h-svh grid grid-cols-2">
      <div className="container py-32 flex justify-center items-center">
        <div className="max-w-md w-full">
          <div className="rounded-[calc(0.5rem+1px)] bg-gradient-to-t from-background to-accent-200 mb-12 w-fit p-px">
            <div className="p-2.5 rounded-[0.5rem] bg-gradient-to-b from-background to-accent-100">
              <CalendarIcon className="size-6 text-accent-500" />
            </div>
          </div>
          <p className="text-2xl font-medium text-foreground">
            Sign in to your account
          </p>
          <p className="mt-2 text-muted-foreground text-sm">
            Don&apos;t have an acccount yet?{" "}
            <Link href={"/"} className="font-medium text-accent-500">
              Sign up here
            </Link>
          </p>

          <SignInForm />
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-tr from-accent-200 to-accent-50 relative">
        <Image
          src={"/assets/auth-cell-filler.jpg"}
          alt="Aerial Photography of Island"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
