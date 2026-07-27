import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/tema")({
  head: () => ({
    meta: [
      { title: "Tema Central — [Título de la Obra]" },
      { name: "description", content: "Análisis del tema central de la obra literaria." },
      { property: "og:title", content: "Tema Central" },
      { property: "og:description", content: "El núcleo temático de la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="03 · Núcleo" title="Tema Central" current="/obra/tema">
      <h3 className="font-display text-xl">Tema principal</h3>
      <Placeholder>Enuncia con claridad el tema central de la obra en una o dos oraciones.</Placeholder>
      <h3 className="font-display text-xl">Temas secundarios</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground italic">
        <li>[Tema secundario 1]</li>
        <li>[Tema secundario 2]</li>
        <li>[Tema secundario 3]</li>
      </ul>
      <h3 className="font-display text-xl">Desarrollo del tema</h3>
      <Placeholder>Explica cómo se desarrolla el tema a lo largo de la obra a través de personajes, conflictos y desenlace.</Placeholder>
    </SectionPage>
  ),
});
