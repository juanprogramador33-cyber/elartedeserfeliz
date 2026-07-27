import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/simbolico")({
  head: () => ({
    meta: [
      { title: "Lenguaje Simbólico — [Título de la Obra]" },
      { name: "description", content: "Símbolos y significados profundos en la obra literaria." },
      { property: "og:title", content: "Lenguaje Simbólico" },
      { property: "og:description", content: "Análisis del simbolismo de la obra." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="05 · Simbolismo" title="Lenguaje Simbólico" current="/obra/simbolico">
      <h3 className="font-display text-xl">Símbolos principales</h3>
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="glass rounded-2xl p-5">
            <div className="font-medium mb-1">[Símbolo {n}]</div>
            <div className="text-sm text-muted-foreground italic">[Descripción del símbolo y su significado dentro de la obra.]</div>
          </div>
        ))}
      </div>
      <h3 className="font-display text-xl">Interpretación global</h3>
      <Placeholder>Reflexiona sobre cómo los símbolos se articulan y refuerzan el mensaje del texto.</Placeholder>
    </SectionPage>
  ),
});
