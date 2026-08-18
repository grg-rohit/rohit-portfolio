const STACK = [
    { group: "core", items: ["Python", "FastAPI", "REST APIs", "GraphQL"] },
    { group: "data", items: ["PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "MongoDB"] },
    { group: "auth & payments", items: ["JWT", "OAuth2", "RBAC", "Stripe"] },
    { group: "infra", items: ["Docker", "Celery", "SSE", "Nginx", "GitHub", "Bitbucket"] },
];

export const Stack = ()=>{
    return(
        <section id="stack" className="relative py-24 md:py-32 border-t border-border bg-card/40">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                    <div className="animate-fade-in">
                        <h2 className="font-mono text-sm uppercase tracking-[0.22em] text-primary">
                            $ stack --list
                        </h2>
                        <p className="mt-4 max-w-xs text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Tools I reach for daily — picked for what they solve, not for how they
                            look on a CV.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 animate-fade-in animation-delay-100">
                        {STACK.map((s) => (
                            <div key={s.group}>
                                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    {s.group}
                                </span>
                                <ul className="space-y-1.5 font-mono text-sm sm:text-base">
                                    {s.items.map((i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-primary">·</span>
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
