import { SectionLabel } from "@/components/SectionLabel";
import { ProjectRow } from "@/components/ProjectRow";
import { ProjectCard } from "@/components/ProjectCard";

const workProjects = [
    {
        index: "01",
        name: "PicknCare",
        role: "Healthcare Booking",
        badge: "Production Project",
        period: "May 2025 — Present",
        link: "https://pickncare.com",
        image: `${import.meta.env.BASE_URL}pickncare.png`,
        highlights: [
            "Designed ~80% of the backend — 25+ REST APIs across booking, subscriptions and agency management.",
            "Built nearest-area booking matching via a staged geospatial flow, then Google Maps route validation.",
            "Integrated Stripe subscriptions and booking payments with server-side webhook verification.",
            "Integrated Turn.ai background checks that surface only whether a criminal-record flag was triggered.",
        ],
        stack: ["FastAPI", "PostgreSQL", "Stripe", "Turn.ai"],
    },
    {
        index: "02",
        name: "REOS",
        role: "Real Estate CRM",
        badge: "Client Project",
        period: "April 2026 — Present",
        image: `${import.meta.env.BASE_URL}reosone.png`,
        highlights: [
            "Contributed ~50% of the backend for a multi-tenant CRM with agency-isolated data.",
            "Fixed listing/deal lifecycle defects and built a reusable SSE notification layer.",
            "Integrated Resend using agency-provided API keys for per-agency transactional email.",
        ],
        stack: ["FastAPI", "PostgreSQL", "GraphQL", "Resend"],
    },
    {
        index: "03",
        name: "Rovers Nepal",
        role: "Travel Booking",
        badge: "Client Project",
        period: "Oct 2025 — Jan 2026",
        highlights: [
            "Developed backend modules for trek/hotel entries, booking management and inquiries.",
            "Secured admin and booking endpoints with JWT/OAuth2, RBAC and rate limiting.",
            "Built 25+ REST APIs with Celery-driven realtime status and notification updates.",
        ],
        stack: ["FastAPI", "PostgreSQL", "JWT", "Celery"],
    },
];

const personalProjects = [
    {
        index: "01",
        name: "HLS Streaming Platform",
        role: "Video Streaming",
        badge: "Personal Project",
        period: "Personal project",
        highlights: [
            "Video pipeline converting source video to multi-quality HLS via FFmpeg (CPU/GPU).",
            "Served playlists and segments through FastAPI with a browser player built on hls.js.",
            "Containerized with Docker, configured for local/home-network hosting with Nginx.",
        ],
        stack: ["FastAPI", "FFmpeg", "HLS", "Docker"],
    },
    {
        index: "02",
        name: "Legal Query Resolver",
        role: "AI / Legal Search",
        badge: "Personal Project",
        period: "Personal project",
        highlights: [
            "AI-assisted legal query tool using extracted legal documents as retrieval context.",
            "Selenium-scraped documents indexed in MongoDB with FAISS vector search.",
            "FastAPI workflows for retrieval, prompt construction and Llama-based answer generation.",
        ],
        stack: ["FastAPI", "MongoDB", "FAISS", "Llama"],
    },
];

export const Projects = ()=>{
    return(
        <section id="projects" className="relative py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6">
                <SectionLabel label="selected work" meta={`00${workProjects.length + personalProjects.length} entries`} />

                {/* Professional work: detailed table, then a visual gallery below */}
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 animate-fade-in">
                    Professional Work — Binaryburst Solution
                </h3>
                <div className="border-t border-border">
                    {workProjects.map((p) => (
                        <ProjectRow key={p.name} {...p} />
                    ))}
                </div>

                <div className="mt-10">
                    <ProjectCard {...workProjects[0]} category={workProjects[0].role} featured />
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    {workProjects.slice(1).map((p) => (
                        <ProjectCard key={p.name} {...p} category={p.role} />
                    ))}
                </div>

                {/* Personal projects: detailed table, then gallery below */}
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2 mt-20 animate-fade-in">
                    Personal Projects
                </h3>
                <div className="border-t border-border">
                    {personalProjects.map((p) => (
                        <ProjectRow key={p.name} {...p} />
                    ))}
                </div>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {personalProjects.map((p) => (
                        <ProjectCard key={p.name} {...p} category={p.role} />
                    ))}
                </div>
            </div>
        </section>
    );
}
