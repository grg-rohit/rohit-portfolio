export const CornerMarks = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
    <span className="absolute -left-px -top-px size-2.5 border-l border-t border-white/15" />
    <span className="absolute -right-px -top-px size-2.5 border-r border-t border-white/15" />
    <span className="absolute -left-px -bottom-px size-2.5 border-l border-b border-white/15" />
    <span className="absolute -right-px -bottom-px size-2.5 border-r border-b border-white/15" />
  </div>
);
