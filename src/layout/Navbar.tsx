import { Menu, X, ArrowRight } from "lucide-react";
import React from "react";
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Work"},
    {href: "#stack", label: "Stack"},
    {href: "#contact", label: "Contact"},
]



export const Navbar = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    return(
        <header className="glass sticky top-0 left-0 right-0 py-5 z-50 border-b border-border">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
                    ROHIT<span className="text-muted-foreground">.GURUNG</span>
                </a>

                {/*Desktop Navigation*/}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className="group relative text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground/40 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/*CTA Button*/}

                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase font-semibold text-foreground hover:text-muted-foreground transition-colors"
                >
                    Hire Me <ArrowRight className="w-3.5 h-3.5" />
                </a>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu  */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                    <a
                        href={link.href}
                        key={index}
                        className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground rounded-full hover:bg-surface py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-md bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-bold"
                    >
                        Hire Me <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
                </div>
            )}

        </header>
    );
}
