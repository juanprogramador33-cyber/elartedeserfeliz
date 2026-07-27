import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/contexto")({
  head: () => ({
    meta: [
      { title: "Contexto Histórico — [Título de la Obra]" },
      { name: "description", content: "Contexto histórico, social y cultural en el que se escribió la obra." },
      { property: "og:title", content: "Contexto Histórico" },
      { property: "og:description", content: "El marco histórico y cultural de la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="02 · Marco Histórico" title="Contexto Histórico" current="/obra/contexto">
      <h3 className="font-display text-xl">Época y lugar</h3>
      <Placeholder>Describe el período histórico y la geografía en la que se sitúa o se escribió la obra.</Placeholder>
      <h3 className="font-display text-xl">Contexto social y político</h3>
      <Placeholder>Eventos, movimientos sociales, guerras, revoluciones o tensiones políticas relevantes.</Placeholder>
      <h3 className="font-display text-xl">Contexto cultural y literario</h3>
      <Placeholder>Corrientes artísticas, filosóficas y literarias que influyen o dialogan con la obra.</Placeholder>
    </SectionPage>
  ),
});
