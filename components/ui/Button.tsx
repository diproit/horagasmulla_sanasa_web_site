import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles: rounded-lg (8-12px), smooth transitions, visible focus rings
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    // Variant classes enforcing accessibility rules:
    // - Accent (amber): ALWAYS slate charcoal text (#1E293B), NEVER white text
    // - Secondary: Cyan outline on navy, or primary outline on light
    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-light active:bg-[#084da8] shadow-sm hover:shadow-md focus-visible:outline-primary",
      secondary:
        "bg-transparent border-2 border-cyan text-cyan hover:bg-cyan hover:text-navy active:bg-cyan/90 focus-visible:outline-cyan",
      outline:
        "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-light focus-visible:outline-primary",
      accent:
        "bg-amber text-text font-semibold hover:bg-amber-dark active:bg-[#e08e00] shadow-sm hover:shadow-md focus-visible:outline-amber-dark",
      ghost:
        "bg-transparent text-text hover:bg-tint active:bg-tint/80 focus-visible:outline-primary",
    };

    const sizeStyles = {
      sm: "text-xs md:text-sm px-3.5 py-1.5 gap-1.5",
      md: "text-sm md:text-base px-5 py-2.5 gap-2",
      lg: "text-base md:text-lg px-6 py-3.5 gap-2.5 font-semibold",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      widthStyles,
      className
    );

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
