import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-offset-2 inline-flex justify-center items-center gap-2.5",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline:
          "border border-border bg-background hover:bg-primary-50 shadow-sm",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-9 px-3 py-1.5 rounded-lg",
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
