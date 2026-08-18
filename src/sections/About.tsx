import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import {
    Server,
    Database,
    ShieldCheck,
    CreditCard,
    Zap,
    Map,
    Container,
    GraduationCap,
    Languages,
} from "lucide-react";

const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "80%", label: "PicknCare Backend Built" },
    { value: "50+", label: "REST & GraphQL APIs Shipped" },
    { value: "3", label: "Production Platforms" },
];

const skillGroups = [
    {
        icon: Server,
        title: "Backend",
        skills: ["Python", "FastAPI", "REST APIs", "GraphQL", "API Design", "Backend Architecture"],
    },
    {
        icon: Database,
        title: "Database & Caching",
        skills: ["PostgreSQL", "SQLAlchemy / ORM", "Alembic Migrations", "Redis", "MongoDB"],
    },
    {
        icon: ShieldCheck,
        title: "Security & Auth",
        skills: ["JWT", "OAuth2", "RBAC", "Endpoint Authorization", "Google Sign-In", "Apple Sign-In"],
    },
    {
        icon: CreditCard,
        title: "Payments & Webhooks",
        skills: ["Stripe Subscriptions", "Booking Payments", "Stripe Webhooks", "Apple IAP Verification", "App Store Server Notifications"],
    },
    {
        icon: Zap,
        title: "Async & Realtime",
        skills: ["Celery", "Background Tasks", "Redis", "Server-Sent Events (SSE)", "Notification Workflows"],
    },
    {
        icon: Map,
        title: "Maps & Matching",
        skills: ["Google Maps APIs", "Bounding-Box Filtering", "Coordinate / Radius Matching", "Route-Distance Validation"],
    },
    {
        icon: Container,
        title: "DevOps & Media",
        skills: ["Docker", "GitHub", "Bitbucket", "Git", "FFmpeg", "HLS", "Nginx"],
    },
];

export const About = ()=>{
    return(
        <section id="about" className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="About Me"
                    title="Backend developer who ships"
                    highlight="production systems."
                    description="I build scalable, secure backend systems end to end — from database design to APIs, payments, background jobs and realtime notifications."
                />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-in animation-delay-100">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-2xl px-4 py-6 text-center hover:border-primary/40 transition-colors duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Bio + Education/Languages */}
                <div className="grid lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2 glass-strong rounded-3xl p-8 animate-fade-in animation-delay-200">
                        <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Backend Developer with 1+ years of experience building production backend
                            systems using Python, FastAPI, PostgreSQL, Redis/Celery and Docker.
                            Experienced across secure authentication and RBAC, geospatial caregiver
                            matching, recurring subscriptions and booking payments, server-side webhook
                            verification, realtime SSE notifications, background jobs and third-party
                            integrations. Designed and developed approximately 80% of the PicknCare
                            backend and contributed approximately 50% of the REOS backend, while
                            collaborating directly with frontend teams on web and mobile integrations.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {["Backend Debugging", "Problem Solving", "API / System Design", "End-to-End Development", "Fast Learning", "Cross-Team Collaboration"].map((s, i) => (
                                <Tag key={i}>{s}</Tag>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 animate-fade-in animation-delay-300">
                        <div className="glass rounded-3xl p-6">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <GraduationCap className="w-5 h-5" />
                                <h3 className="text-lg font-semibold text-foreground">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium">B.Sc. CSIT</p>
                                    <p className="text-sm text-muted-foreground">
                                        Asian College of Higher Studies, IOST, Tribhuvan University
                                    </p>
                                    <p className="text-xs text-muted-foreground/70">2020 - 2025</p>
                                </div>
                                <div className="pt-4 border-t border-border">
                                    <p className="font-medium">+2 Science</p>
                                    <p className="text-sm text-muted-foreground">
                                        National School of Sciences, Lainchaur, Kathmandu
                                    </p>
                                    <p className="text-xs text-muted-foreground/70">2018 - 2020</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-3xl p-6">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <Languages className="w-5 h-5" />
                                <h3 className="text-lg font-semibold text-foreground">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Tag>Nepali</Tag>
                                <Tag>English</Tag>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-6 animate-fade-in animation-delay-300">
                        Technical Skills
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillGroups.map((group, idx) => {
                            const Icon = group.icon;
                            return (
                                <div
                                    key={idx}
                                    className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${300 + idx * 100}ms` }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-semibold">{group.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill, sIdx) => (
                                            <Tag key={sIdx}>{skill}</Tag>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
