import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={32} height={32} loading="lazy" />
            <span className="font-display text-lg font-semibold">Ricette Mie</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Il blog di cucina italiana autentica. Ricette di famiglia, tradizione e passione.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Naviga</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ricette" className="hover:text-primary">Tutte le ricette</Link></li>
            <li><Link to="/info" className="hover:text-primary">Chi siamo</Link></li>
            <li><Link to="/contatti" className="hover:text-primary">Contatti</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Una nuova ricetta ogni domenica.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="la-tua@email.it" className="flex-1 rounded-full bg-background border border-input px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">Iscriviti</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ricette Mie · Fatto con amore in Italia 🇮🇹
      </div>
    </footer>
  );
}
