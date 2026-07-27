import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type NavKey =
  | "/obra/autor"
  | "/obra/contexto"
  | "/obra/tema"
  | "/obra/recursos"
  | "/obra/simbolico"
  | "/obra/opinion"
  | "/obra/intencion";

const order: { to: NavKey; label: string }[] = [
  { to: "/obra/autor", label: "Autor" },
  { to: "/obra/contexto", label: "Contexto" },
  { to: "/obra/tema", label: "Tema" },
  { to: "/obra/recursos", label: "Recursos" },
  { to: "/obra/simbolico", label: "Simbolismo" },
  { to: "/obra/opinion", label: "Opinión" },
  { to: "/obra/intencion", label: "Intención" },
];

interface Props {
  eyebrow: string;
  title: string;
  current: NavKey;
  children: ReactNode;
}

export function SectionPage({ eyebrow, title, current, children }: Props) {
  const idx = order.findIndex((o) => o.to === current);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx < order.length - 1 ? order[idx + 1] : null;

  return (
    <article className="space-y-8">
      <header className="glass rounded-3xl p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>
      </header>

      <div className="glass rounded-3xl p-8 md:p-12 space-y-6 leading-relaxed text-foreground/90">
        {children}
      </div>

      <nav className="flex justify-between gap-3">
        {prev ? (
          <Link to={prev.to} className="glass glass-hover rounded-2xl px-5 py-3 text-sm flex-1 max-w-xs">
            <div className="text-xs text-muted-foreground">← Anterior</div>
            <div className="font-medium">{prev.label}</div>
          </Link>
        ) : <div className="flex-1 max-w-xs" />}
        {next ? (
          <Link to={next.to} className="glass glass-hover rounded-2xl px-5 py-3 text-sm flex-1 max-w-xs text-right">
            <div className="text-xs text-muted-foreground">Siguiente →</div>
            <div className="font-medium">{next.label}</div>
          </Link>
        ) : <div className="flex-1 max-w-xs" />}
      </nav>
    </article>
  );
}

export function Placeholder({ children }: { children: string }) {
  return (
    <p className="text-muted-foreground italic">
      [{children}]
    </p>
  );
}
