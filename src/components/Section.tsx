import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ title, children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-4">
            {title}
          </h2>
          <div className="section-divider" />
        </div>
        {children}
      </div>
    </section>
  );
};
