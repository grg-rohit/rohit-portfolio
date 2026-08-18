import { SectionHeading } from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactCards = [
    {
        icon: Mail,
        label: "Email",
        value: "grgrohit746@gmail.com",
        href: "mailto:grgrohit746@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+977-9861465279",
        href: "tel:+9779861465279",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Kathmandu, Nepal",
    },
];

const socials = [
    { icon: FaGithub, label: "GitHub", value: "github.com/grg-rohit", href: "https://github.com/grg-rohit" },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/rohit-gurung-679b20237",
        href: "https://www.linkedin.com/in/rohit-gurung-679b20237",
    },
];

export const Contact = ()=>{
    return(
        <section id="contact" className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="Get In Touch"
                    title="Let's build something"
                    highlight="great."
                    description="Open to backend roles and freelance work. Reach out and I'll get back to you as soon as I can."
                />

                <div className="mt-16 max-w-4xl mx-auto animate-fade-in animation-delay-200">
                    <div className="glass-strong rounded-3xl p-8 md:p-12 glow-border">
                        <div className="grid sm:grid-cols-3 gap-6 mb-10">
                            {contactCards.map((card, idx) => {
                                const Icon = card.icon;
                                const content = (
                                    <>
                                        <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-3">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
                                        <p className="text-sm font-medium break-words">{card.value}</p>
                                    </>
                                );
                                return card.href ? (
                                    <a
                                        key={idx}
                                        href={card.href}
                                        className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={idx} className="glass rounded-2xl p-6 text-center">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
                            <div className="flex items-center gap-3">
                                {socials.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {social.label}
                                        </a>
                                    );
                                })}
                            </div>

                            <a href="mailto:grgrohit746@gmail.com">
                                <Button size="lg">
                                    Say Hello <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="text-center text-sm text-muted-foreground mt-20 animate-fade-in animation-delay-300">
                    &copy; {new Date().getFullYear()} Rohit Gurung. Built with React &amp; Tailwind CSS.
                </footer>
            </div>
        </section>
    );
}
