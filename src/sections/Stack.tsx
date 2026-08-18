const STACK = [
    { group: "core", glyph: "{ }", items: ["Python", "FastAPI", "REST APIs", "GraphQL"] },
    { group: "data", glyph: "▤", items: ["PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "MongoDB"] },
    { group: "auth & payments", glyph: "◈", items: ["JWT", "OAuth2", "RBAC", "Stripe"] },
    { group: "infra", glyph: "▣", items: ["Docker", "Celery", "SSE", "Nginx", "GitHub", "Bitbucket"] },
];

export const Stack = ()=>{
    return(
        <section id="stack" className="relative py-24 md:py-32 border-t border-border bg-card/40">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                    <div className="animate-fade-in">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            Stack
                        </h2>
                        <p className="mt-4 max-w-xs text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Tools I reach for daily — picked for what they solve, not for how they
                            look on a CV.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 animate-fade-in animation-delay-100">
                        {STACK.map((s) => (
                            <div key={s.group} className="group border-l border-border pl-4 transition-colors hover:border-white/20">
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="flex size-6 items-center justify-center border border-border font-mono text-xs text-foreground transition-colors group-hover:border-white/20">
                                        {s.glyph}
                                    </span>
                                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                        {s.group}
                                    </span>
                                </div>
                                <ul className="space-y-1.5 text-sm sm:text-base">
                                    {s.items.map((i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-muted-foreground">·</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
