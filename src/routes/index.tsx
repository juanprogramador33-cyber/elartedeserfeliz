import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[Título de la Obra] — Análisis Literario" },
      { name: "description", content: "Portada del análisis literario de la obra." },
      { property: "og:title", content: "[Título de la Obra]" },
      { property: "og:description", content: "Análisis literario completo con estilo glassmorphism." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="glass-strong glass-hover rounded-[2rem] px-8 py-16 md:px-16 md:py-24 max-w-3xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
          Análisis Literario
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
          [Título de la Obra]
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          [Subtítulo o breve descripción de la obra. Reemplaza este texto placeholder con una introducción evocadora.]
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/obra/autor"
            className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium"
          >
            Comenzar análisis →
          </Link>
          <Link
            to="/obra/tema"
            className="rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver tema central
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
          <div><div className="font-display text-2xl text-foreground">[Año]</div>Publicación</div>
          <div><div className="font-display text-2xl text-foreground">[Género]</div>Género</div>
          <div><div className="font-display text-2xl text-foreground">[País]</div>Origen</div>
        </div>
      </div>
    </div>
  );
}
