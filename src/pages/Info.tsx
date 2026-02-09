import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Server, Clock, Globe, Gamepad2, Star, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: <Server className="w-8 h-8" />, value: "24/7", label: "Online" },
  { icon: <Globe className="w-8 h-8" />, value: "CZ/SK", label: "Komunita" },
  { icon: <Gamepad2 className="w-8 h-8" />, value: "1.20-1.21", label: "Verze" },
  { icon: <Server className="w-8 h-8" />, value: "Custom Texture Pack", label: "Nejlepší zážitek" },
];

const infoSections = [
  {
    title: "Jak se připojit",
    content: `
      <ol class="list-decimal list-inside space-y-2 text-muted-foreground">
        <li>Otevři Minecraft (Java Edition)</li>
        <li>Klikni na "Multiplayer" a pak "Add Server"</li>
        <li>Zadej adresu serveru: <span class="text-primary font-mono">mc.rajce.pro</span></li>
        <li>Klikni "Done" a připoj se!</li>
      </ol>
    `
  },
  {
    title: "Podporované verze",
    content: `
      <p class="text-muted-foreground mb-4">
        Náš server podporuje širokou škálu verzí Minecraftu, od 1.20.x až po nejnovější 1.21.x 
        Pro nejlepší zážitek doporučujeme hrát na verzi 1.21.1 nebo vyšší.
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-secondary rounded-full text-sm">1.8.x</span>
        <span class="px-3 py-1 bg-secondary rounded-full text-sm">1.12.x</span>
        <span class="px-3 py-1 bg-secondary rounded-full text-sm">1.16.x</span>
        <span class="px-3 py-1 bg-secondary rounded-full text-sm">1.18.x</span>
        <span class="px-3 py-1 bg-secondary rounded-full text-sm">1.19.x</span>
        <span class="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">1.20.x ✓</span>
        <span class="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">1.21.x ✓</span>
      </div>
    `
  },
  {
    title: "Creator Výhody",
    content: `
      <ul class="space-y-3 text-muted-foreground">
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span> Prefix Creator a role na discordu.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span> Možnost organizovat vlastní event/soutěže na našem serveru.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span> Všechny VIP výhody včetně nejlepšího VIP.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span> Prioritní podpora.
        </li>
        <li class="flex items-center gap-2">
          <span class="text-primary">✓</span> Unikátní prefixy a kosmetika pouze pro Creatory.
        </li>
      </ul>
    `
  }
];

const Info = () => {
  return (
    <Layout>
      <Hero 
        title="INFORMACE"
        subtitle="Vše co potřebuješ vědět o našem serveru"
        backgroundImage={heroBg}
        showServerAddress
      />

      {/* Stats Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <Section title="Základní informace">
        <div className="max-w-4xl mx-auto space-y-6">
          {infoSections.map((section, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                {section.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Info;
