import { Tag } from "@/components/Tag";
import { GraduationCap, Languages } from "lucide-react";

const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "80%", label: "PicknCare Backend Built" },
    { value: "50+", label: "REST & GraphQL APIs Shipped" },
    { value: "3", label: "Production Platforms" },
];

const strengths = [
    "Backend Debugging",
    "Problem Solving",
    "API / System Design",
    "End-to-End Development",
    "Fast Learning",
    "Cross-Team Collaboration",
];

export const About = ()=>{
    return(
        <section id="about" className="relative py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                    <div className="flex items-center gap-3 animate-fade-in">
                        <span className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                            01
                        </span>
                        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            // About
                        </h2>
                    </div>
                    <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground animate-fade-in animation-delay-100">
                        <p>
                            I got into backend work because I liked knowing exactly why something
                            broke — and being the one who could fix it. That turned into building
                            production systems: database schemas, authorization, payments,
                            background jobs, the parts users never see but always feel when they're
                            missing.
                        </p>
                        <p>
                            Most of my work sits behind a booking screen, a checkout, or a matching
                            request — PicknCare, REOS and Rovers Nepal. The job is the same
                            everywhere: make it correct, make it fast, and make sure it stays that
                            way after ten more features ship.
                        </p>
                        <p className="text-sm font-medium text-foreground">
                            1+ years · Binaryburst Solution · Kathmandu, Nepal
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-16 animate-fade-in animation-delay-200">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-background px-4 py-6 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Strengths + Education + Languages */}
                <div className="grid lg:grid-cols-3 gap-px bg-border mt-px animate-fade-in animation-delay-300">
                    <div className="bg-background border-t border-border p-6">
                        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Strengths
                        </span>
                        <div className="flex flex-wrap gap-3">
                            {strengths.map((s, i) => (
                                <Tag key={i}>{s}</Tag>
                            ))}
                        </div>
                    </div>

                    <div className="bg-background border-t border-border p-6">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Education</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium text-foreground">B.Sc. CSIT</p>
                                <p className="text-sm text-muted-foreground">
                                    Asian College of Higher Studies, IOST, Tribhuvan University
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">2020 – 2025</p>
                            </div>
                            <div className="pt-4 border-t border-border">
                                <p className="font-medium text-foreground">+2 Science</p>
                                <p className="text-sm text-muted-foreground">
                                    National School of Sciences, Lainchaur, Kathmandu
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">2018 – 2020</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background border-t border-border p-6">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Languages className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Languages</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Tag>Nepali</Tag>
                            <Tag>English</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
