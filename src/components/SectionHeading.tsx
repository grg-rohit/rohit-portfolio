type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) => {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`space-y-4 max-w-2xl animate-fade-in ${alignClasses}`}>
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}{" "}
        {highlight && (
          <span className="font-serif italic font-normal text-primary glow-text">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};
