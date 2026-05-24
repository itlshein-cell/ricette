import { Link } from "@tanstack/react-router";
import type { Recipe } from "@/lib/recipes";
import { Clock, ChefHat, MapPin } from "lucide-react";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to="/ricette/$slug"
      params={{ slug: recipe.slug }}
      className="group block rounded-3xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border border-border/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium">
          {recipe.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{recipe.excerpt}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock size={14} /> {recipe.time}</span>
          <span className="inline-flex items-center gap-1"><ChefHat size={14} /> {recipe.difficulty}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={14} /> {recipe.region}</span>
        </div>
      </div>
    </Link>
  );
}
