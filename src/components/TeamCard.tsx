import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  avatar: string;
  roleColor?: "owner" | "admin" | "helper" | "tech" | "builder" | "default";
}

const roleColors = {
  owner: "bg-red-500 text-white",
  admin: "bg-red-500 text-white",
  helper: "bg-amber-500 text-amber-950",
  tech: "bg-blue-500 text-blue-950",
  builder: "bg-purple-500 text-purple-950",
  default: "bg-secondary text-secondary-foreground",
};

export const TeamCard = ({ name, role, avatar, roleColor = "default" }: TeamCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {/* Avatar Container */}
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Name */}
      <h3 className="text-lg font-semibold text-center text-foreground mb-3">
        {name}
      </h3>
      
      {/* Role Badge */}
      <div className="flex justify-center">
        <span className={cn(
          "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
          roleColors[roleColor]
        )}>
          {role}
        </span>
      </div>
    </div>
  );
};
