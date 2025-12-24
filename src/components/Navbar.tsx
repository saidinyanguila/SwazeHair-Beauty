import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
		<div className="container mx-auto px-4 md:px-6">
			<div className="flex items-center justify-between h-16 md:h-20">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<a href="/Hair-Shop/" className="flex items-center gap-2">
						<Scissors className="h-6 w-6 text-white" />
						<span className="font-display text-xl md:text-2xl font-semibold text-foreground">
						Swaze Hair & Beauty
						</span>
					</a>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					<a href="/Hair-Shop/gallery" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						Gallery
					</a>
					<a href="/Hair-Shop/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						About Us
					</a>
					<a href="/Hair-Shop/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						Services
					</a>
					<a href="tel:+27787452823" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						Contact
					</a>
					<Button variant="hero" size="sm" onClick={() => scrollToSection("booking")}>
						Book Appointment
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
					<X className="h-6 w-6 text-foreground" />
					) : (
					<Menu className="h-6 w-6 text-foreground" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
					<div className="flex flex-col gap-4">
					<a href="/Hair-Shop/gallery" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						Gallery
					</a>
					<a href="/Hair-Shop/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						About Us
					</a>
					<a href="/Hair-Shop/services" className="text-sm font-medium text-muted-foreground hover:text-primary  transition-colors">
						Services
					</a>
					<a href="tel:+27787452823" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
						Contact
					</a>
					<Button variant="hero" onClick={() => scrollToSection("booking")} className="w-full">
						Book Appointment
					</Button>
				</div>
			</div>
			)}
		</div>
    </nav>
  );
};

export default Navbar;
