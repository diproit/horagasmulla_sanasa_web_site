import React from "react";
import { cn } from "@/lib/utils";

export interface InfoBlockProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  action?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function InfoBlock({
  title,
  description,
  icon,
  badge,
  action,
  className,
  children,
}: InfoBlockProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-surface rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {icon && (
          <div className="w-11 h-11 rounded-lg bg-tint text-primary flex items-center justify-center shrink-0 border border-primary/10">
            {icon}
          </div>
        )}
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tint text-primary border border-primary/20">
            {badge}
          </span>
        )}
      </div>

      {/* Semantic H3 for block title */}
      <h3 className="text-base sm:text-lg font-bold text-text tracking-tight">
        {title}
      </h3>

      {description && (
        <p className="mt-1.5 text-sm text-muted leading-relaxed flex-1">
          {description}
        </p>
      )}

      {children && <div className="mt-3 flex-1">{children}</div>}

      {action && <div className="mt-4 pt-3 border-t border-slate-100">{action}</div>}
    </div>
  );
}

export interface InfoBlockGridProps {
  items: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function InfoBlockGrid({
  items,
  columns = 3,
  className,
}: InfoBlockGridProps) {
  const colStyles = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-5 sm:gap-6", colStyles[columns], className)}>
      {items.map((item) => (
        <InfoBlock
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
          badge={item.badge}
        />
      ))}
    </div>
  );
}
