import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "border font-medium rounded-lg disabled:opacity-70 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none inline-flex justify-center items-center gap-2.5 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-800 text-white border-zinc-950 shadow-btn-default hover:bg-zinc-700 hover:border-zinc-800 [&_svg]:text-zinc-300",
        destructive:
          "bg-red-500 text-white border-red-700 shadow-btn-default hover:bg-red-400 hover:border-red-600 focus-visible:ring-red-500 [&_svg]:text-red-100",
        success:
          "bg-green-500 text-white border-green-700 shadow-btn-default hover:bg-green-400 hover:border-green-600 focus-visible:ring-green-500 [&_svg]:text-green-100",
        outline:
          "bg-transparent text-foreground border-border shadow-md hover:bg-zinc-100 hover:border-zinc-300 [&_svg]:text-zinc-500",
        ghost:
          "bg-transparent text-foreground hover:bg-zinc-100 [&_svg]:text-zinc-500 border-none",
      },
      size: {
        small: "text-sm px-2 py-1 h-8",
        default: "text-sm px-3 py-1.5 h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
