import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  showServerAddress?: boolean;
  backgroundImage?: string;
}

export const Hero = ({ 
  title, 
  subtitle, 
  showServerAddress = true,
  backgroundImage 
}: HeroProps) => {
  const [copied, setCopied] = useState(false);
  const serverAddress = "mc.reoxx.cz";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, hsl(220 20% 15%), hsl(220 20% 8%))'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-foreground mb-6 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}

        {showServerAddress && (
          <Button
            variant="outline"
            size="lg"
            onClick={handleCopy}
            className="gap-3 px-6 py-6 text-lg font-medium bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group"
            style={{ animationDelay: '0.2s' }}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-primary" />
                <span className="text-primary">Zkopírováno!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-foreground">{serverAddress}</span>
              </>
            )}
          </Button>
        )}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
