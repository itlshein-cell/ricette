import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = recipes.slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1600} height={1100} fetchPriority="high" decoding="async" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground/80">
              <Sparkles size={14} /> Blog di cucina italiana
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
              La cucina <em className="text-primary not-italic">italiana</em>, raccontata in famiglia.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg text-balance">
              Ricette tradizionali, ingredienti semplici e tanta passione. Dalla pasta fresca al tiramisù della nonna.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/ricette" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-105 transition-transform">
                Scopri le ricette <ArrowRight size={18} />
              </Link>
              <Link to="/info" className="inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 font-medium hover:bg-background">
                Chi siamo
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-10 bg-gradient-warm opacity-20 blur-3xl rounded-full" />
            <img src={logo} alt="Ricette Mie 3D logo" width={520} height={520} className="relative animate-float drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 -mt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">In Evidenza</p>
            <h2 className="font-display text-4xl mt-1">Le ricette del momento</h2>
          </div>
          <Link to="/ricette" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
            Vedi tutte <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <h2 className="font-display text-4xl mb-8">Esplora per categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Antipasti", "Primi Piatti", "Pizze", "Dolci"].map((cat) => (
            <div key={cat} className="rounded-2xl bg-gradient-warm p-6 text-primary-foreground shadow-soft hover:shadow-glow transition-shadow cursor-pointer">
              <div className="text-3xl mb-2">{cat === "Antipasti" ? "🥖" : cat === "Primi Piatti" ? "🍝" : cat === "Pizze" ? "🍕" : "🍰"}</div>
              <h3 className="font-display text-xl">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter banner */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="rounded-3xl bg-card border border-border/60 p-10 md:p-14 shadow-soft text-center">
          <h2 className="font-display text-4xl">Una ricetta a settimana, nella tua inbox</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Iscriviti alla newsletter e ricevi ogni domenica una nuova ricetta italiana da provare.</p>
          <form className="mt-6 flex max-w-md mx-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="la-tua@email.it" className="flex-1 rounded-full border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <button type="submit" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-glow transition-shadow">Iscriviti</button>
          </form>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
