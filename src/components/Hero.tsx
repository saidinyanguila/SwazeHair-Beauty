import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxurious hair salon interior" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-extra" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm md:text-base font-medium text-primary mb-4 animate-fade-in tracking-widest uppercase">
            Premium Hair Salon
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-fade-in-up leading-tight">
            Where Beauty
            <br />
            <span className="text-primary">Meets Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-delay-1 max-w-xl mx-auto">
            Experience the art of hair styling at Luxe Hair. Our expert stylists
            create personalized looks that bring out your unique beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button variant="hero" size="xl" onClick={scrollToBooking}>
              Book Your Appointment
            </Button>
            <Button variant="elegant" size="xl" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              View Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
