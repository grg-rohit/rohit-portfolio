import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <span
      className={`inline-flex items-center border border-border px-2.5 py-1.5 text-xs uppercase tracking-[0.1em] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
};
