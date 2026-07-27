import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/intencion")({
  head: () => ({
    meta: [
      { title: "Intención Comunicativa — [Título de la Obra]" },
      { name: "description", content: "Análisis de la intención comunicativa del texto literario." },
      { property: "og:title", content: "Intención Comunicativa" },
      { property: "og:description", content: "El propósito del autor al escribir la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="07 · Propósito" title="Análisis de la Intención Comunicativa" current="/obra/intencion">
      <h3 className="font-display text-xl">Propósito del autor</h3>
      <Placeholder>¿Qué buscaba transmitir el autor? ¿Informar, denunciar, conmover, cuestionar, entretener?</Placeholder>
      <h3 className="font-display text-xl">Destinatario</h3>
      <Placeholder>Describe el público al que se dirige la obra explícita o implícitamente.</Placeholder>
      <h3 className="font-display text-xl">Mensaje</h3>
      <Placeholder>Formula el mensaje central que la obra deja al lector.</Placeholder>
      <h3 className="font-display text-xl">Vigencia</h3>
      <Placeholder>Reflexiona sobre la relevancia y actualidad del mensaje en el contexto contemporáneo.</Placeholder>
    </SectionPage>
  ),
});
