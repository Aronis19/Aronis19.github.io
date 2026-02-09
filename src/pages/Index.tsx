import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { DiscordCTA } from "@/components/DiscordCTA";
import { Sword, Mountain, Skull, Shield, Pickaxe, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const gameModes = [
  {
    icon: <Skull className="w-7 h-7" />,
    title: "Pratice",
    description: "Propracovaný practice na CPvP, klasické swordy, npoty, a mnoho dalšího!"
  }
];

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Anti-cheat systém",
    description: "Propracovaný anti-cheat systém zajišťuje férové hraní pro všechny hráče."
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Aktivní komunita",
    description: "Tisíce aktivních hráčů denně. Připoj se k největší české a slovenské Minecraft komunitě."
  },
  {
    icon: <Sword className="w-7 h-7" />,
    title: "PvP arény",
    description: "Pravidelné eventy a turnaje s hodnotnými cenami. Ukaž své schopnosti!"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        title="REOXX.CZ"
        backgroundImage={heroBg}
      />

      {/* About Section */}
      <Section title="O nás">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              O <span className="gradient-text">Reoxx.cz</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jsme novodobý Minecraft server, který se zaměřuje na oddechové hraní těch nejpropracovanějších miniher. 
              V momentální chvíli jsme jeden z nejnavštěvovanějších serverů na České a Slovenské scéně.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Po připojení máte na výběr mezi hracími módy - Survival, Oneblock a Anarchy, ve kterém hráči 
              zakládají nebo se připojují ke klanům a soupeří s ostatními hráči o území, bohatství a moc. 
              Hráči mohou stavět a opevňovat své základny, dobývat nepřátelské území, uzavírat spojenectví 
              a strategicky se zapojovat do PvP bojů či obchodů.
            </p>
          </div>
        </div>
      </Section>

      {/* Game Modes Section */}
      <Section title="Herní módy" className="bg-card/30">
        <div className="grid md:grid-cols-3 gap-6">
          {gameModes.map((mode, index) => (
            <FeatureCard
              key={index}
              icon={mode.icon}
              title={mode.title}
              description={mode.description}
            />
          ))}
        </div>
      </Section>

      {/* Discord CTA */}
      <DiscordCTA />

      {/* Features Section */}
      <Section title="Proč hrát u nás">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
