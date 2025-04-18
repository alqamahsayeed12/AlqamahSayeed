import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-primary relative inline-block after:content-[''] after:absolute after:w-3/5 after:h-0.5 after:bottom-[-8px] after:left-0 after:bg-secondary">
      {children}
    </h2>
  );
}
