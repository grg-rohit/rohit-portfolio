import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { Briefcase, MapPin } from "lucide-react";

const experience = {
    role: "Junior Backend Developer",
    company: "Binaryburst Solution",
    location: "Bhaktapur, Nepal",
    period: "May 2025 - Present",
    points: [
        "Build and maintain production backend systems for care-service booking, real-estate CRM and travel-booking products.",
        "Design and develop backend features end to end: database architecture, ORM models, migrations, APIs, authorization, integrations, background processing, testing and debugging.",
        "Work in a two-member backend team and coordinate directly with frontend developers to integrate APIs across web and mobile clients.",
        "Use GitHub and Bitbucket for version control, collaboration, code review support and day-to-day backend delivery.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy/ORM", "Alembic", "Docker", "Redis", "Celery", "SSE", "REST APIs", "JWT", "OAuth2", "GitHub", "Bitbucket"],
};

export const Experience = ()=>{
    return(
        <section id="experience" className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="Experience"
                    title="Where I've been"
                    highlight="building."
                    description="Hands-on backend delivery across care-service, real-estate and travel-booking products."
                />

                <div className="mt-16 max-w-3xl mx-auto animate-fade-in animation-delay-200">
                    <div className="relative pl-10">
                        {/* Timeline line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

                        <div className="relative">
                            <span className="absolute -left-10 top-1.5 w-6 h-6 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                            </span>

                            <div className="glass-strong rounded-3xl p-8 hover:border-primary/40 transition-colors duration-300">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-primary mb-1">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="text-sm font-medium">{experience.period}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold">{experience.role}</h3>
                                        <p className="text-muted-foreground">{experience.company}</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {experience.location}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {experience.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                                            <span className="text-primary mt-1.5 shrink-0">&#9679;</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {experience.tech.map((tech, idx) => (
                                        <Tag key={idx}>{tech}</Tag>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
