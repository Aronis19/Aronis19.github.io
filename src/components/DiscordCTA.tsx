import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Bell, Headphones } from "lucide-react";

export const DiscordCTA = () => {
  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Komunikuj s členy týmu" },
    { icon: <Bell className="w-5 h-5" />, text: "Buď první u novinek" },
    { icon: <Headphones className="w-5 h-5" />, text: "Využívej support systém" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "Hlasové místnosti" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-4">
                  Připoj se k nám
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chceš být mezi prvními, kteří se dozví o novinkách? Připoj se na náš Discord server!
                </p>
                
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="text-primary">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="gap-2 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  Připojit se na Discord
                </Button>
              </div>

              {/* Discord Illustration */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <MessageCircle className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
