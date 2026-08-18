import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";

const workProjects = [
    {
        name: "PicknCare",
        badge: "Production Project",
        category: "Healthcare Booking",
        period: "May 2025 — Present",
        link: "https://pickncare.com",
        image: `${import.meta.env.BASE_URL}pickncare.png`,
        highlights: [
            "Designed ~80% of the backend — 25+ REST APIs across booking, subscriptions and agency management.",
            "Built nearest-area booking matching via a staged geospatial flow, then Google Maps route validation.",
            "Integrated Turn.ai background checks that surface only whether a criminal-record flag was triggered.",
        ],
        stack: ["FastAPI", "PostgreSQL", "Stripe", "Turn.ai"],
    },
    {
        name: "REOS",
        badge: "Client Project",
        category: "Real Estate CRM",
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
        name: "Rovers Nepal",
        badge: "Client Project",
        category: "Travel Booking",
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
        name: "HLS Streaming Platform",
        badge: "Personal Project",
        category: "Video Streaming",
        period: "Personal project",
        highlights: [
            "Video pipeline converting source video to multi-quality HLS via FFmpeg (CPU/GPU).",
            "Served playlists and segments through FastAPI with a browser player built on hls.js.",
            "Containerized with Docker, configured for local/home-network hosting with Nginx.",
        ],
        stack: ["FastAPI", "FFmpeg", "HLS", "Docker"],
    },
    {
        name: "Legal Query Resolver",
        badge: "Personal Project",
        category: "AI / Legal Search",
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

                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6 animate-fade-in">
                    Professional Work — Binaryburst Solution
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workProjects.map((p) => (
                        <ProjectCard key={p.name} {...p} />
                    ))}
                </div>

                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6 mt-16 animate-fade-in">
                    Personal Projects
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    {personalProjects.map((p) => (
                        <ProjectCard key={p.name} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
