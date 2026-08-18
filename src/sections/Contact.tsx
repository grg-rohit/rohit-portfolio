import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactRows = [
    {
        icon: Mail,
        label: "email",
        value: "grgrohit746@gmail.com",
        href: "mailto:grgrohit746@gmail.com",
    },
    {
        icon: Phone,
        label: "phone",
        value: "+977-9861465279",
        href: "tel:+9779861465279",
    },
    {
        icon: FaGithub,
        label: "github",
        value: "github.com/grg-rohit",
        href: "https://github.com/grg-rohit",
        external: true,
    },
    {
        icon: FaLinkedin,
        label: "linkedin",
        value: "in/rohit-gurung-679b20237",
        href: "https://www.linkedin.com/in/rohit-gurung-679b20237",
        external: true,
    },
    {
        icon: MapPin,
        label: "location",
        value: "Kathmandu, Nepal",
        href: "https://www.google.com/maps/search/?api=1&query=Kathmandu%2C+Nepal",
        external: true,
    },
];

export const Contact = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio inquiry from ${name || "your website"}`;
        const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
        window.location.href = `mailto:grgrohit746@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 animate-fade-in">
                    <div>
                        <span className="glass inline-flex items-center gap-2 px-3 py-1.5 mb-6 font-mono text-xs tracking-[0.14em] text-primary">
                            <span className="size-1.5 rounded-full bg-primary" />
                            get in touch
                        </span>
                        <h2 className="font-mono text-3xl md:text-4xl leading-tight tracking-tight">
                            Let&apos;s discuss <span className="text-primary text-glow">backend</span> work.
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm sm:text-base leading-relaxed text-muted-foreground">
                        Open to backend roles and freelance work — API development, payments
                        integrations, and production-ready backend systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 animate-fade-in animation-delay-100">
                    {/* Contact details */}
                    <div className="glass p-6 sm:p-8">
                        <div className="border border-primary/30 text-primary p-2.5 w-fit mb-6">
                            <MessageSquare className="size-5" />
                        </div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
                            Contact Details
                        </p>
                        <h3 className="text-xl font-semibold mb-3">Have a role or project in mind?</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8">
                            Send a message and I&apos;ll respond as soon as I can. I&apos;m open to
                            backend work focused on reliable, well-tested systems.
                        </p>

                        <div className="space-y-3">
                            {contactRows.map((row) => {
                                const Icon = row.icon;
                                return (
                                    <a
                                        key={row.label}
                                        href={row.href}
                                        target={row.external ? "_blank" : undefined}
                                        rel={row.external ? "noopener noreferrer" : undefined}
                                        className="group flex items-center gap-4 border border-border px-4 py-3.5 transition-colors hover:border-primary"
                                    >
                                        <span className="border border-border p-2 text-primary shrink-0 transition-colors group-hover:border-primary">
                                            <Icon className="size-4" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                                {row.label}
                                            </span>
                                            <span className="block text-sm sm:text-base font-medium truncate">
                                                {row.value}
                                            </span>
                                        </span>
                                        {row.external && (
                                            <ExternalLink className="size-4 text-muted-foreground shrink-0 transition-colors group-hover:text-primary" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Message form */}
                    <div className="glass p-6 sm:p-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
                            Send a Message
                        </p>
                        <h3 className="text-xl font-semibold mb-6">Tell me what you&apos;re building.</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell me about your project, role, or opportunity..."
                                    className="w-full bg-background/50 border border-border px-4 py-3 text-sm leading-relaxed focus:outline-none focus:border-primary transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="glow-primary group w-full inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                            >
                                Send Message
                                <Send className="size-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="mt-20 pt-8 border-t border-border flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between animate-fade-in animation-delay-300">
                    <span>© {new Date().getFullYear()} Rohit Gurung</span>
                    <span>Built with React &amp; Tailwind CSS</span>
                </footer>
            </div>
        </section>
    );
}
