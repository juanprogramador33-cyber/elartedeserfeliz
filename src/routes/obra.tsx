import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

const sections = [
  { to: "/obra/autor", label: "Autor & Biografía" },
  { to: "/obra/contexto", label: "Contexto Histórico" },
  { to: "/obra/tema", label: "Tema Central" },
  { to: "/obra/recursos", label: "Recursos & Figuras" },
  { to: "/obra/simbolico", label: "Lenguaje Simbólico" },
  { to: "/obra/opinion", label: "Opinión Crítica" },
  { to: "/obra/intencion", label: "Intención Comunicativa" },
] as const;

export const Route = createFileRoute("/obra")({
  head: () => ({
    meta: [
      { title: "Análisis de la Obra — [Título de la Obra]" },
      { name: "description", content: "Análisis literario completo: autor, contexto, temas, recursos, símbolos, opinión e intención comunicativa." },
      { property: "og:title", content: "Análisis de la Obra Literaria" },
      { property: "og:description", content: "Explora cada aspecto de la obra literaria." },
    ],
  }),
  component: ObraLayout,
});

function ObraLayout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 px-4 py-4">
        <nav className="glass mx-auto flex max-w-6xl flex-wrap items-center gap-2 rounded-2xl px-4 py-3">
          <Link to="/" className="font-display text-lg font-semibold pr-4 mr-2 border-r border-border">
            [Obra]
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeProps={{ className: "rounded-full px-3 py-1.5 text-xs bg-primary text-primary-foreground font-medium" }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-8">
        <Outlet />
      </main>
    </div>
  );
}
