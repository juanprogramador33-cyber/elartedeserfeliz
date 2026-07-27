import { createFileRoute } from "@tanstack/react-router";
import { Placeholder, SectionPage } from "@/components/SectionPage";

export const Route = createFileRoute("/obra/autor")({
  head: () => ({
    meta: [
      { title: "Arthur Schopenhauer- Biografia" },
      { name: "description", content: "Vida y trayectoria del Arthur Schopenhauer" },
      { property: "og:title", content: "Autor y Biografía" },
      { property: "og:description", content: "Vida y trayectoria del autor." },
    ],
  }),
  component: () => (
    <SectionPage eyebrow="01 · El Autor" title="Autor y Biografía" current="/obra/autor">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="glass rounded-2xl w-40 h-40 flex items-center justify-center text-muted-foreground shrink-0">
          [Retrato]
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-2xl">[Nombre del autor]</h2>
          <Placeholder>Fecha y lugar de nacimiento — Fecha y lugar de fallecimiento</Placeholder>
          <Placeholder>Movimiento literario / generación</Placeholder>
        </div>
      </div>
      <h3 className="font-display text-xl mt-4">Biografía</h3>
      <Placeholder>biografia: fue un filósofo alemán, máximo representante del pesimismo filosófico y clave en el tránsito del idealismo al vitalismo. Su obra cumbre, El mundo como voluntad y representación (1819), expone que el mundo está regido por una voluntad ciega e insaciable que es la raíz de todo dolor..</Placeholder>
      <h3 className="font-display text-xl">Obras destacadas</h3>
      <Placeholder>Lista de obras principales del autor con año de publicación.</Placeholder>
    </SectionPage>
  ),
});
