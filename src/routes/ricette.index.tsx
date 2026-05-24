import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes } from "@/lib/recipes";
import { useState } from "react";

export const Route = createFileRoute("/ricette/")({
  head: () => ({
    meta: [
      { title: "Tutte le Ricette — Ricette Mie" },
      { name: "description", content: "Sfoglia tutte le ricette italiane: antipasti, primi, pizze, dolci e altro." },
      { property: "og:title", content: "Tutte le Ricette — Ricette Mie" },
      { property: "og:description", content: "Sfoglia tutte le ricette italiane: antipasti, primi, pizze, dolci e tante altre ispirazioni della tradizione." },
    ],
  }),
  component: RicettePage,
});

function RicettePage() {
  const cats = ["Tutte", ...Array.from(new Set(recipes.map((r) => r.category)))];
  const [active, setActive] = useState("Tutte");
  const filtered = active === "Tutte" ? recipes : recipes.filter((r) => r.category === active);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Il ricettario</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2 text-balance">Tutte le nostre ricette</h1>
        <p className="mt-4 text-muted-foreground max-w-xl">Dalla colazione al dolce: la tradizione italiana in {recipes.length} ricette imperdibili.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
        {filtered.map((r) => <RecipeCard key={r.slug} recipe={r} />)}
      </section>
      </main>
      <SiteFooter />
    </div>
  );
}
