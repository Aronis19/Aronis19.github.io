import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { AlertTriangle, Ban, MessageSquareOff, Shield, Users, Gavel } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const rules = [
  {
    icon: <Ban className="w-6 h-6" />,
    title: "Cheaty a Hacky",
    description: "Jakékoliv používání cheatů, hacků nebo modifikovaných klientů je přísně zakázáno.",
    severity: "high"
  },
  {
    icon: <MessageSquareOff className="w-6 h-6" />,
    title: "Spam a Reklama",
    description: "Spamování chatu, opakované zprávy nebo reklama jiných serverů povede k okamžitému banu.",
    severity: "high"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Respekt k ostatním",
    description: "Urážky, rasismus, diskriminace nebo jakékoliv toxické chování je nepřípustné.",
    severity: "medium"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ochrana osobních údajů",
    description: "Sdílení osobních údajů jiných hráčů bez jejich souhlasu je zakázáno.",
    severity: "high"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Exploity a Bugy",
    description: "Zneužívání bugů nebo exploitů hry je zakázáno. Nahlašte je prosím adminům.",
    severity: "medium"
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Rozhodnutí adminů",
    description: "Rozhodnutí administrátorů jsou konečná. V případě nesouhlasu využijte ticket systém.",
    severity: "low"
  }
];

const severityColors = {
  high: "border-destructive/50 bg-destructive/5",
  medium: "border-amber-500/50 bg-amber-500/5",
  low: "border-border"
};

const Pravidla = () => {
  return (
    <Layout>
      <Hero 
        title="PRAVIDLA"
        subtitle="Respektuj pravidla a užij si hru naplno"
        backgroundImage={heroBg}
        showServerAddress
      />

      <Section title="Hlavní pravidla">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {rules.map((rule, index) => (
              <div 
                key={index}
                className={`bg-card rounded-xl p-6 border transition-all duration-300 hover:border-primary/30 ${severityColors[rule.severity as keyof typeof severityColors]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {rule.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-xl p-8 border border-border text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Neznalosť pravidiel neospravedlňuje!
            </h3>
            <p className="text-muted-foreground">
              Připojením na server automaticky souhlasíte s těmito pravidly. 
              Porušení může vést k dočasnému nebo permanentnímu banu.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Pravidla;
