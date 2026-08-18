import { ExternalLink, ImageOff, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Tag } from "@/components/Tag";

type ProjectCardProps = {
  name: string;
  badge: string;
  category: string;
  period: string;
  image?: string;
  highlights: string[];
  stack: string[];
  link?: string;
  githubLink?: string;
};

const MAX_TAGS = 4;

export const ProjectCard = ({
  name,
  badge,
  category,
  period,
  image,
  highlights,
  stack,
  link,
  githubLink,
}: ProjectCardProps) => {
  const visibleStack = stack.slice(0, MAX_TAGS);
  const extraStack = stack.length - MAX_TAGS;

  return (
    <article className="glass flex flex-col overflow-hidden transition-colors hover:border-primary/40">
      <div className="relative aspect-video bg-secondary overflow-hidden">
        {image ? (
          <>
            <img src={image} alt={`${name} preview`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="size-5" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Preview coming soon</span>
          </div>
        )}

        <span className="glass absolute top-3 left-3 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
          {badge}
        </span>

        {(link || githubLink) && (
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on GitHub`}
                className="glass p-2 text-foreground transition-colors hover:text-primary hover:border-primary"
              >
                <FaGithub className="size-4" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                className="glass p-2 text-foreground transition-colors hover:text-primary hover:border-primary"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-1">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{category}</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground shrink-0">
            <Calendar className="size-3.5" />
            {period}
          </span>
        </div>
        <h3 className="font-mono text-xl tracking-tight mb-4">{name}</h3>

        <ul className="space-y-2 mb-5 flex-1">
          {highlights.map((h, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="text-primary font-mono shrink-0">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {visibleStack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
          {extraStack > 0 && <Tag>+{extraStack}</Tag>}
        </div>
      </div>
    </article>
  );
};
