import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Chi Siamo — Ricette Mie" },
      { name: "description", content: "La storia di Ricette Mie: passione per la cucina italiana e tradizione di famiglia." },
      { property: "og:title", content: "Chi Siamo — Ricette Mie" },
      { property: "og:description", content: "Scopri la storia di Ricette Mie: passione per la cucina italiana e ricette di famiglia tramandate da generazioni." },
    ],
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center">
        <img src={logo} alt="" width={140} height={140} className="mx-auto animate-float" loading="lazy" />
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary font-semibold">La nostra storia</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2 text-balance">Cucinare è raccontare chi siamo</h1>
        <p className="mt-6 text-lg text-muted-foreground text-balance">
          Ricette Mie nasce dall'amore per la tavola italiana, dalle ricette della nonna passate di generazione in generazione, fino ai piatti più moderni della nuova cucina mediterranea.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-6">
        {[
          { title: "Tradizione", text: "Ricette autentiche, testate e raccontate con cura." },
          { title: "Stagionalità", text: "Ingredienti freschi e di stagione, sempre." },
          { title: "Semplicità", text: "Tecniche accessibili a chiunque ami la cucina." },
        ].map((b) => (
          <div key={b.title} className="rounded-3xl bg-card border border-border/50 p-8 shadow-soft">
            <h3 className="font-display text-2xl">{b.title}</h3>
            <p className="mt-3 text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}
