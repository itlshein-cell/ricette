import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Ricette Mie" },
      { name: "description", content: "Contatta Ricette Mie per collaborazioni, suggerimenti o per condividere la tua ricetta." },
      { property: "og:title", content: "Contatti — Ricette Mie" },
      { property: "og:description", content: "Scrivici per collaborazioni, domande o per condividere la tua ricetta di famiglia." },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold text-center">Scrivici</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2 text-center text-balance">Mettiamoci in cucina insieme</h1>
        <p className="mt-4 text-center text-muted-foreground">Hai una ricetta da condividere? Una domanda? Siamo qui.</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Mail, label: "Email", value: "ciao@ricettemie.it" },
            { icon: Instagram, label: "Instagram", value: "@ricettemie" },
            { icon: MessageCircle, label: "WhatsApp", value: "+39 333 1234567" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl bg-card border border-border/50 p-5 text-center shadow-soft">
              <Icon className="mx-auto text-primary" />
              <div className="mt-2 text-xs uppercase text-muted-foreground tracking-wider">{label}</div>
              <div className="font-medium mt-1 text-sm">{value}</div>
            </div>
          ))}
        </div>

        <form className="mt-10 rounded-3xl bg-card border border-border/50 p-8 shadow-soft space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Nome" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <input type="email" placeholder="Email" className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <input placeholder="Oggetto" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <textarea placeholder="Il tuo messaggio..." rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <button className="w-full rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-soft hover:shadow-glow transition-shadow">Invia messaggio</button>
        </form>
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}
