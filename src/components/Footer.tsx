import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl tracking-wider text-primary text-glow">
                RAJCE
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Novodobý Minecraft server zaměřený na oddechové hraní těch nejpropracovanějších miniher.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link to="/nas-tym" className="text-muted-foreground hover:text-primary transition-colors">
                  Náš tým
                </Link>
              </li>
              <li>
                <Link to="/pravidla" className="text-muted-foreground hover:text-primary transition-colors">
                  Pravidla
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-muted-foreground hover:text-primary transition-colors">
                  Informace
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Připoj se</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Server: </span>
                <span className="text-primary font-mono">mc.rajce.pro</span>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Obchod
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rajce.pro. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};
