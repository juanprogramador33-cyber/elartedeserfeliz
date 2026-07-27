import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

const figuras = ["Metáfora", "Símil", "Hipérbole", "Personificación", "Anáfora", "Aliteración"];

export const Route = createFileRoute("/obra/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos y Figuras Literarias — [Título de la Obra]" },
      { name: "description", content: "Recursos estilísticos y figuras literarias empleadas en la obra." },
      { property: "og:title", content: "Recursos y Figuras Literarias" },
      { property: "og:description", content: "Análisis estilístico de la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="04 · Estilo" title="Recursos y Figuras Literarias" current="/obra/recursos">
      <h3 className="font-display text-xl">Estilo general</h3>
      <Placeholder>Describe el estilo del autor: registro, ritmo, sintaxis, tono predominante.</Placeholder>
      <h3 className="font-display text-xl">Figuras literarias</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {figuras.map((f) => (
          <div key={f} className="glass rounded-2xl p-4">
            <div className="font-medium">{f}</div>
            <div className="text-sm text-muted-foreground italic mt-1">[Ejemplo y análisis]</div>
          </div>
        ))}
      </div>
    </SectionPage>
  ),
});
