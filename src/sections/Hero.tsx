import HeroImage from "@/assets/pfvg.jpg";
import profile from "@/assets/hero.png";
import Button from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const skills = [
    "FastAPI",
    "Django",
    "Docker",
    "Git"
]

export const Hero = ()=>{
    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}

            <div className="absolute inset-0">
                <img src={HeroImage} 
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/1 via-background/80 to-background">
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(80)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    }}
                />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2h-2 bg-primary rounded-full animate-pulse" />
                                    Backend Developer 
                            </span>
                        </div>

                        {/* Headline */}

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-priimary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-seriif italic font-normal text-white">
                                precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Rohit Gurung - a backend developer specializing in python, 
                                FastAPI. I build scalable, performant APIs.
                            </p>
                        </div>
                    
                    {/* CTAs */}

                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {[
                            { icon: FaGithub, href: "https://github.com/Alish545" },
                            {
                            icon: FaLinkedin,
                            href: "https://www.linkedin.com/in/alish-tuladhar-a6377831b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                            },
                            {
                            icon: FaInstagram,
                            href: "https://www.instagram.com/alishtuladhar?igsh=cHgyNHZ3dmh4dHhr&utm_source=qr",
                            },
                        ].map((social, idx) => {
                            const Icon = social.icon;

                            return (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                            );
                        })}
                        </div>
                        

                    </div>

                    {/* Right Column -Profile Image */}

                    <div className="relative animate-fade-in aniamtion-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img
                            src={profile}
                            alt="Rohit Gurung"
                            className="w-full aspect-4/5 object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">
                                Available For Work{" "}
                                </span>
                            </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary">1+</div>
                            <div className="text-xs text-muted-foreground">
                                Years Exp.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-pointer">
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