import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className = "" }: TagProps) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border ${className}`}
    >
      {children}
    </span>
  );
};
