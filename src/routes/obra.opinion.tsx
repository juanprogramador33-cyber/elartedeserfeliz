import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/opinion")({
  head: () => ({
    meta: [
      { title: "Opinión Crítica — [Título de la Obra]" },
      { name: "description", content: "Valoración crítica personal de la obra literaria." },
      { property: "og:title", content: "Opinión Crítica" },
      { property: "og:description", content: "Valoración crítica de la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="06 · Valoración" title="Opinión Crítica" current="/obra/opinion">
      <h3 className="font-display text-xl">Aspectos destacables</h3>
      <Placeholder>Comenta los elementos más logrados de la obra: personajes, estructura, lenguaje, ideas.</Placeholder>
      <h3 className="font-display text-xl">Aspectos discutibles</h3>
      <Placeholder>Menciona limitaciones, debilidades o elementos que generan controversia.</Placeholder>
      <h3 className="font-display text-xl">Valoración personal</h3>
      <blockquote className="glass rounded-2xl p-6 border-l-4 border-primary italic text-muted-foreground">
        [Escribe aquí tu opinión personal razonada, justificada con elementos concretos del texto.]
      </blockquote>
    </SectionPage>
  ),
});
