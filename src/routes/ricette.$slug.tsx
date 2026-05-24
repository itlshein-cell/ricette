import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getRecipe, type Variant } from "@/lib/recipes";
import { Clock, ChefHat, MapPin, Users, ArrowLeft, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/ricette/$slug")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.recipe.title} — Ricette Mie` },
          { name: "description", content: loaderData.recipe.excerpt },
          { property: "og:title", content: loaderData.recipe.title },
          { property: "og:description", content: loaderData.recipe.excerpt },
          { property: "og:image", content: loaderData.recipe.image },
          { property: "og:type", content: "article" },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: loaderData.recipe.title,
              description: loaderData.recipe.excerpt,
              image: loaderData.recipe.image,
              recipeCategory: loaderData.recipe.category,
              recipeCuisine: "Italiana",
              recipeYield: `${loaderData.recipe.serves} persone`,
              totalTime: loaderData.recipe.time,
              recipeIngredient: loaderData.recipe.ingredients,
              recipeInstructions: loaderData.recipe.steps.map((s: string, i: number) => ({
                "@type": "HowToStep",
                position: i + 1,
                text: s,
              })),
            }),
          },
        ]
      : [],
  }),
  component: RecipePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Ricetta non trovata</h1>
        <Link to="/ricette" className="mt-4 inline-block text-primary">← Torna alle ricette</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p>Si è verificato un errore. Riprova più tardi.</p>
        <Link to="/ricette" className="mt-4 inline-block text-primary">← Torna alle ricette</Link>
      </div>
    </div>
  ),
});

function RecipePage() {
  const { recipe } = Route.useLoaderData();
  const variants = recipe.variants ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
      <article className="mx-auto max-w-4xl px-6 pt-10 pb-16">
        <Link to="/ricette" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft size={16} /> Tutte le ricette
        </Link>

        <header className="mt-6">
          <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold">{recipe.category}</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-balance">{recipe.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{recipe.excerpt}</p>
        </header>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Clock, label: "Tempo", value: recipe.time },
            { icon: ChefHat, label: "Difficoltà", value: recipe.difficulty },
            { icon: Users, label: "Per", value: `${recipe.serves} persone` },
            { icon: MapPin, label: "Regione", value: recipe.region },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl bg-card border border-border/50 p-4">
              <Icon className="text-primary" size={18} />
              <div className="mt-2 text-xs text-muted-foreground">{label}</div>
              <div className="font-medium">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-soft">
          <img src={recipe.image} alt={recipe.title} width={1200} height={900} className="w-full aspect-[4/3] object-cover" />
        </div>

        {recipe.intro && (
          <p className="mt-10 text-lg leading-relaxed text-foreground/90">{recipe.intro}</p>
        )}

        {variants.length > 0 && (
          <nav className="mt-10 rounded-2xl border border-border/60 bg-muted/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">In questa pagina</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#ricetta-base" className="text-sm hover:text-primary transition-colors">
                  → Ricetta base
                </a>
              </li>
              {variants.map((v: Variant) => (
                <li key={v.slug}>
                  <a href={`#${v.slug}`} className="text-sm hover:text-primary transition-colors">
                    → {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <section id="ricetta-base" className="mt-12 scroll-mt-24">
          {variants.length > 0 && (
            <h2 className="font-display text-3xl md:text-4xl mb-6">Ricetta base</h2>
          )}
          <div className="grid md:grid-cols-[1fr_2fr] gap-10">
            <aside>
              <h3 className="font-display text-2xl mb-4">Ingredienti</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((i: string) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary">•</span>{i}
                  </li>
                ))}
              </ul>
            </aside>
            <div>
              <h3 className="font-display text-2xl mb-4">Procedimento</h3>
              <ol className="space-y-5">
                {recipe.steps.map((s: string, i: number) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold">{i + 1}</span>
                    <p className="pt-1 leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {variants.map((v: Variant) => (
          <section key={v.slug} id={v.slug} className="mt-20 scroll-mt-24 border-t border-border/60 pt-12">
            <h2 className="font-display text-3xl md:text-4xl text-balance">{v.title}</h2>
            {v.keywords.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {v.keywords.map((k: string) => (
                  <span key={k} className="text-xs rounded-full bg-muted px-3 py-1 text-muted-foreground">
                    {k}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-5 text-base leading-relaxed text-foreground/90">{v.intro}</p>

            <div className="mt-8 grid md:grid-cols-[1fr_2fr] gap-10">
              <aside>
                <h3 className="font-display text-xl mb-3">Ingredienti</h3>
                <ul className="space-y-2">
                  {v.ingredients.map((i: string) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-primary">•</span>{i}
                    </li>
                  ))}
                </ul>
              </aside>
              <div>
                <h3 className="font-display text-xl mb-3">Procedimento</h3>
                <ol className="space-y-4">
                  {v.steps.map((s: string, i: number) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 h-7 w-7 rounded-full bg-accent/40 text-foreground flex items-center justify-center text-sm font-display font-semibold">{i + 1}</span>
                      <p className="pt-0.5 leading-relaxed">{s}</p>
                    </li>
                  ))}
                </ol>

                {v.tip && (
                  <div className="mt-6 flex gap-3 rounded-2xl bg-primary/5 border border-primary/20 p-4">
                    <Lightbulb className="flex-shrink-0 text-primary" size={20} />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-primary">Consiglio dello chef</div>
                      <p className="mt-1 text-sm leading-relaxed">{v.tip}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </article>
      </main>
      <SiteFooter />
    </div>
  );
}
