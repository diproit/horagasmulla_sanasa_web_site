import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
