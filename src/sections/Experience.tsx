import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { CornerMarks } from "@/components/CornerMarks";
import { trackSpotlight } from "@/lib/spotlight";
import { MapPin } from "lucide-react";

const experience = {
    role: "Junior Backend Developer",
    company: "Binaryburst Solution",
    location: "Bhaktapur, Nepal",
    period: "May 2025 — Present",
    points: [
        "Build and maintain production backend systems for care-service booking, real-estate CRM and travel-booking products.",
        "Design and develop backend features end to end: database architecture, ORM models, migrations, APIs, authorization, integrations, background processing, testing and debugging.",
        "Work in a two-member backend team and coordinate directly with frontend developers to integrate APIs across web and mobile clients.",
        "Use GitHub and Bitbucket for version control, collaboration, code review support and day-to-day backend delivery.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "Redis", "Celery", "SSE", "JWT", "OAuth2"],
};

export const Experience = ()=>{
    return(
        <section id="experience" className="relative py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6">
                <SectionLabel label="experience" meta={experience.period} />

                <div
                    className="spotlight glass relative max-w-3xl animate-fade-in animation-delay-100"
                    onMouseMove={trackSpotlight}
                >
                    <CornerMarks />
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{experience.role}</h3>
                            <p className="text-muted-foreground mt-1">{experience.company}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {experience.location}
                        </span>
                    </div>

                    <div className="px-6 py-6 sm:px-8">
                        <ul className="space-y-3 mb-6">
                            {experience.points.map((point, idx) => (
                                <li key={idx} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    <span className="text-muted-foreground shrink-0">›</span>
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
        </section>
    );
}
