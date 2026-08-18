import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { ExternalLink, Sparkles } from "lucide-react";

const platforms = [
    {
        name: "PicknCare",
        role: "Backend Developer",
        period: "May 2025 - Present",
        link: "https://pickncare.com",
        points: [
            "Designed and developed ~80% of the backend for an American care-service platform serving caregivers, careseekers, agencies and administrators.",
            "Built 25+ REST APIs across booking flows, subscriptions, caregiver requests, agency/service management and notifications.",
            "Built nearest-area booking matching with a staged geospatial flow — bounding-box prefilter, radius filtering, then Google Maps route-distance validation.",
            "Integrated Stripe subscriptions & booking payments, Apple in-app purchase verification and Turn.ai background verification.",
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "OAuth2", "RBAC", "Google Maps", "Stripe", "Apple/Google Sign-In", "Turn.ai", "Celery", "SSE", "Docker", "Redis"],
    },
    {
        name: "REOS",
        role: "Backend Developer",
        period: "April 2026 - Present",
        subtitle: "Real Estate CRM Platform",
        points: [
            "Contributed ~50% of backend development for a multi-tenant real-estate CRM with agency-specific, isolated data.",
            "Fixed business-logic defects across listings and deals, including status/lifecycle issues in core workflows.",
            "Built a reusable notification service and SSE event layer designed to support additional channels later without a core rewrite.",
            "Integrated Resend using agency-provided API keys so each agency sends transactional email from its own configuration.",
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "ORM", "Alembic", "REST APIs", "GraphQL", "RBAC", "Resend", "Celery", "SSE", "Docker", "Redis"],
    },
    {
        name: "Rovers Nepal",
        role: "Backend Developer",
        period: "October 2025 - January 2026",
        subtitle: "Trek & Hotel Booking Platform",
        points: [
            "Developed backend modules for trek/activity entries, hotel entries, booking management and inquiry handling.",
            "Secured admin and booking endpoints with JWT/OAuth2 and RBAC, adding rate limiting to public inquiry endpoints.",
            "Implemented Celery background tasks and SSE realtime flows for status and notification updates.",
            "Developed 25+ REST APIs for public travel data, booking inquiries and admin workflows.",
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "ORM", "Alembic", "REST APIs", "JWT", "OAuth2", "RBAC", "Rate Limiting", "Celery", "SSE", "Docker", "Redis"],
    },
];

const builds = [
    {
        name: "Python HLS Streaming Platform",
        points: [
            "Built a video streaming pipeline converting source videos to multi-quality HLS via FFmpeg, with CPU and GPU/NVENC modes.",
            "Served master playlists and segments through FastAPI, with a browser player built on hls.js and manual quality selection.",
            "Containerized converter and serving services with Docker, configured for local/home-network hosting with Nginx.",
        ],
        tech: ["FastAPI", "FFmpeg", "HLS", "hls.js", "Docker", "Nginx"],
    },
    {
        name: "Generative AI Legal Query Resolver",
        points: [
            "Built an AI-assisted legal query resolver using extracted legal documents as retrieval context.",
            "Processed documents with Selenium, stored structured content in MongoDB, and used FAISS for vector search retrieval.",
            "Developed FastAPI workflows for query processing, retrieval, prompt construction and Llama-based answer generation.",
        ],
        tech: ["FastAPI", "MongoDB", "FAISS", "Llama 2B", "Selenium"],
    },
];

export const Projects = ()=>{
    return(
        <section id="projects" className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects &"
                    highlight="platforms."
                    description="Production platforms I've built backend systems for, plus a few personal builds."
                />

                {/* Production Platforms */}
                <div className="grid lg:grid-cols-3 gap-6 mt-16">
                    {platforms.map((project, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-3xl p-8 flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="flex items-start justify-between gap-3 mb-1">
                                <h3 className="text-xl font-bold">{project.name}</h3>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 shrink-0"
                                        aria-label={`Visit ${project.name}`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            {project.subtitle && (
                                <p className="text-sm text-primary mb-1">{project.subtitle}</p>
                            )}
                            <p className="text-xs text-muted-foreground mb-6">
                                {project.role} &middot; {project.period}
                            </p>

                            <ul className="space-y-3 mb-6 flex-1">
                                {project.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                        <span className="text-primary mt-1.5 shrink-0">&#9679;</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, tIdx) => (
                                    <Tag key={tIdx}>{tech}</Tag>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical & Academic Projects */}
                <div className="mt-20">
                    <div className="flex items-center gap-2 mb-6 animate-fade-in">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Technical &amp; Academic Projects</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {builds.map((project, idx) => (
                            <div
                                key={idx}
                                className="glass rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                <h4 className="text-lg font-bold mb-4">{project.name}</h4>
                                <ul className="space-y-3 mb-6">
                                    {project.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                            <span className="text-primary mt-1.5 shrink-0">&#9679;</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, tIdx) => (
                                        <Tag key={tIdx}>{tech}</Tag>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
