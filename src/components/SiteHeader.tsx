import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const linkCls = "text-sm font-medium text-foreground/70 hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Ricette Mie logo" width={36} height={36} className="transition-transform group-hover:rotate-12" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Ricette Mie</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cucina Italiana</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/ricette" className={linkCls} activeProps={{ className: "text-primary" }}>Ricette</Link>
          <Link to="/info" className={linkCls} activeProps={{ className: "text-primary" }}>Chi Siamo</Link>
          <Link to="/contatti" className={linkCls} activeProps={{ className: "text-primary" }}>Contatti</Link>
        </nav>
        <Link to="/ricette" className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-soft hover:shadow-glow transition-shadow">
          Esplora
        </Link>
      </div>
    </header>
  );
}
