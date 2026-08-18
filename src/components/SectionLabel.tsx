type SectionLabelProps = {
  label: string;
  meta?: string;
};

export const SectionLabel = ({ label, meta }: SectionLabelProps) => {
  return (
    <div className="mb-12 flex items-baseline gap-4 animate-fade-in">
      <h2 className="font-mono text-sm uppercase tracking-[0.22em] text-primary">{label}</h2>
      <div className="h-px flex-1 bg-border" />
      {meta && <span className="font-mono text-xs text-muted-foreground">{meta}</span>}
    </div>
  );
};
