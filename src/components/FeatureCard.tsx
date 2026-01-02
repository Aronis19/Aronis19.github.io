import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
