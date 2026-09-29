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
        "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
