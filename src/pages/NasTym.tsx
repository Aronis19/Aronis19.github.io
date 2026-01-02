import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import heroBg from "@/assets/hero-bg.jpg";

// Using Minecraft skin API for avatars
const generateAvatar = (username: string) => 
  `https://mc-heads.net/body/${username}/100`;

const teamSections = [
  {
    title: "Vedení serveru",
    members: [
      { name: "Hestreng", role: "Majitel", roleColor: "owner" as const },
      { name: "zixq", role: "Admin", roleColor: "admin" as const },
      { name: "nilkoush", role: "Admin", roleColor: "admin" as const },
      { name: "simiik", role: "Admin", roleColor: "admin" as const },
      { name: "Sanous", role: "Admin", roleColor: "admin" as const },
      { name: "Ledovec", role: "Admin", roleColor: "admin" as const },
    ]
  },
  {
    title: "Vedení týmu",
    members: [
      { name: "PlayHrac", role: "Hlavní Helper", roleColor: "helper" as const },
    ]
  },
  {
    title: "Technický tým",
    members: [
      { name: "darLP", role: "Senior Technik", roleColor: "tech" as const },
      { name: "Michalovec", role: "Senior Technik", roleColor: "tech" as const },
      { name: "CZghost", role: "Technik", roleColor: "tech" as const },
    ]
  },
  {
    title: "Builder tým",
    members: [
      { name: "Craftix", role: "Hlavní Builder", roleColor: "builder" as const },
      { name: "SkyBuilder", role: "Builder", roleColor: "builder" as const },
    ]
  },
  {
    title: "Helper tým",
    members: [
      { name: "Helper1", role: "Helper", roleColor: "helper" as const },
      { name: "Helper2", role: "Helper", roleColor: "helper" as const },
      { name: "Helper3", role: "Helper", roleColor: "helper" as const },
      { name: "Helper4", role: "Helper", roleColor: "helper" as const },
    ]
  }
];

const NasTym = () => {
  return (
    <Layout>
      <Hero 
        title="NÁŠ TÝM" 
        subtitle="Poznej lidi, kteří stojí za projektem Rajče.pro"
        backgroundImage={heroBg}
        showServerAddress
      />

      {teamSections.map((section, sectionIndex) => (
        <Section 
          key={sectionIndex}
          title={section.title}
          className={sectionIndex % 2 === 1 ? "bg-card/30" : ""}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {section.members.map((member, memberIndex) => (
              <TeamCard
                key={memberIndex}
                name={member.name}
                role={member.role}
                avatar={generateAvatar(member.name)}
                roleColor={member.roleColor}
              />
            ))}
          </div>
        </Section>
      ))}
    </Layout>
  );
};

export default NasTym;
