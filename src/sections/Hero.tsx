import { ArrowRight, Download, ExternalLink } from "lucide-react";

const focusAreas = ["REST APIs", "Payments", "Realtime", "Matching"];

const skills = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Redis",
    "Celery",
    "Stripe",
    "GraphQL",
]

// Placeholder — swap /public/profile.jpg for a real headshot when ready
const avatarSrc = `${import.meta.env.BASE_URL}profile.jpg`;

// Update the filename here to match whatever CV file you place in /public
const resumeFile = "Rohit_Gurung_CV.pdf";
const resumeSrc = `${import.meta.env.BASE_URL}${resumeFile}`;

const terminalLog = `$ uvicorn app.main:app --workers 4
INFO   Started server process [8421]
INFO   Application startup complete.
POST   /v1/bookings          201  38ms   lock=acquired
POST   /v1/payments/intent   201  62ms   stripe=ok
GET    /v1/matches?radius=5  200  41ms   rows=128
WORKER celery.reconcile      done 0 retries`;

export const Hero = ()=>{
    return(
        <section className="circuit-grid relative min-h-screen flex items-center overflow-hidden pt-16 pb-20">
            {/* Ambient glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full opacity-25 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--color-primary), transparent 65%)" }}
            />

            {/* Particle dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(70)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                    backgroundColor: "var(--color-primary)",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    }}
                />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
                    {/* Left: badge, headline, intro, CTAs */}
                    <div>
                        {/* Status badge */}
                        <div className="animate-fade-in mb-8">
                            <span className="glass inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs tracking-[0.14em] text-muted-foreground">
                                <span className="size-1.5 rounded-full bg-primary" />
                                open to backend roles — kathmandu / remote
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight animate-fade-in animation-delay-100">
                            <span className="text-foreground">Backend Engineer.</span>
                            <span className="block mt-5 text-xl sm:text-2xl md:text-3xl leading-snug font-normal normal-case tracking-normal text-muted-foreground">
                                I design and build the{" "}
                                <span className="text-primary text-glow">APIs</span>,{" "}
                                <span className="text-primary text-glow">databases</span> and{" "}
                                <span className="text-primary text-glow">infrastructure</span>{" "}
                                production runs on.
                            </span>
                        </h1>

                        {/* Intro */}
                        <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in animation-delay-200">
                            I'm Rohit Gurung. For the past year at Binaryburst Solution I've shipped
                            production APIs in Python and FastAPI — the unglamorous parts: schemas,
                            locks, retries, webhooks and the queries that keep them fast.
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
                            <a
                                href="#contact"
                                className="glow-primary group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                            >
                                contact me
                                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href={resumeSrc}
                                download={resumeFile}
                                className="glass inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                            >
                                <Download className="size-3.5" />
                                download cv
                            </a>
                            <a
                                href="#projects"
                                className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
                            >
                                view work ↳
                            </a>
                        </div>
                    </div>

                    {/* Right: profile card */}
                    <div className="w-full max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-28 animate-fade-in animation-delay-300">
                        <div className="glass overflow-hidden">
                            <div className="relative aspect-4/5">
                                <img
                                    src={avatarSrc}
                                    alt="Rohit Gurung"
                                    className="w-full h-full object-cover object-[50%_25%]"
                                />
                                <span className="glass absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs tracking-[0.1em] text-primary">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    available for backend work
                                </span>
                            </div>

                            <div className="border-t border-border px-5 py-4">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    currently building with
                                </p>
                                <p className="mt-1.5 font-mono text-base sm:text-lg text-foreground">
                                    Python, FastAPI &amp; PostgreSQL
                                </p>
                            </div>

                            <div className="border-t border-border px-5 py-4">
                                <a
                                    href="#projects"
                                    className="group mb-3 flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground group-hover:text-primary">
                                        Backend Focus
                                    </span>
                                    <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
                                </a>
                                <div className="grid grid-cols-2 gap-2">
                                    {focusAreas.map((tag) => (
                                        <span
                                            key={tag}
                                            className="border border-border px-2.5 py-2 text-center font-mono text-xs text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Circuit + terminal */}
                <div className="relative mt-16 select-none animate-fade-in animation-delay-400" aria-hidden="true">
                    <svg
                        viewBox="0 0 1200 260"
                        className="h-auto w-full text-border hidden md:block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path d="M0 190 H160 L210 140 H360" />
                        <path d="M60 190 V230 H300" />
                        <circle cx="360" cy="140" r="4" className="text-primary" stroke="currentColor" />
                        <path d="M360 140 H520 L560 100 H700" />
                        <path d="M1200 90 H1050 L1000 140 H840" />
                        <path d="M1140 90 V50 H900" />
                        <circle cx="840" cy="140" r="4" className="text-primary" stroke="currentColor" />
                        <path d="M840 140 H700" />
                        {[240, 260, 280, 300].map((x) => (
                            <path key={x} d={`M${x} 60 V80`} />
                        ))}
                        {[900, 920, 940, 960].map((x) => (
                            <path key={x} d={`M${x} 200 V220`} />
                        ))}
                        {[440, 470, 500].map((x) => (
                            <circle key={x} cx={x} cy="230" r="3" />
                        ))}
                        <circle cx="1070" cy="190" r="14" />
                        <path d="M1070 176 V204 M1056 190 H1084" />
                        <path d="M120 40 a70 70 0 0 1 70 -20" />
                    </svg>

                    <div className="relative glass mx-auto -mt-10 md:-mt-20 max-w-3xl shadow-2xl">
                        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                            <span className="size-2.5 rounded-full border border-border" />
                            <span className="size-2.5 rounded-full border border-border" />
                            <span className="ml-3 font-mono text-xs text-muted-foreground">
                                pickncare_api — uvicorn
                            </span>
                        </div>
                        <pre className="overflow-x-auto px-5 py-4 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
{terminalLog}
                        </pre>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-16 animate-fade-in animation-delay-600">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6 text-center">
                    $ stack --list
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="font-mono text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-pointer">
                            {skill}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

            </div>

        </section>
    );
}
