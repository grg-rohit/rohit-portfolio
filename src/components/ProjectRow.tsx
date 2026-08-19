import { ExternalLink, Calendar } from "lucide-react";

type ProjectRowProps = {
  index: string;
  name: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
  link?: string;
};

export const ProjectRow = ({ index, name, role, period, highlights, stack, link }: ProjectRowProps) => {
  return (
    <article className="group border-b border-border py-10">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
        <div className="flex items-baseline gap-4">
          <span className="text-xs text-muted-foreground">{index}</span>
          <div>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors hover:text-muted-foreground"
              >
                {name}
                <ExternalLink className="size-4 text-muted-foreground" />
              </a>
            ) : (
              <h3 className="text-2xl font-semibold tracking-tight">
                {name}
              </h3>
            )}
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {role}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs text-muted-foreground shrink-0">
          <Calendar className="size-3.5" />
          {period}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-12 md:gap-6">
        <div className="hidden md:block md:col-span-5" aria-hidden="true" />
        <ul className="max-w-xl space-y-2 md:col-span-5">
          {highlights.map((h, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <span className="text-muted-foreground shrink-0">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap content-start gap-2 md:col-span-2 md:justify-end">
          {stack.map((s) => (
            <li
              key={s}
              className="border border-border px-2 py-1 text-xs uppercase tracking-[0.12em] text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
