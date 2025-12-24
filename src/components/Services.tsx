import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Paintbrush, Sparkles, Wind, Crown, Heart } from "lucide-react";

const services = [
  {
	icon: Scissors,
	title: "Haircut & Styling",
	description: "Precision cuts tailored to your face shape and lifestyle",
	duration: "45-60 min",
  },
  {
    icon: Sparkles,
    title: "Keratin Treatment",
    description: "Smooth, frizz-free hair that lasts for months",
    duration: "2-3 hours",
  },
  {
    icon: Wind,
    title: "Blowout & Styling",
    description: "Professional blowouts for any occasion",
    duration: "30-45 min",
  },
  {
    icon: Crown,
    title: "Bridal & Events",
    description: "Special occasion styling with trial included",
    duration: "1-2 hours",
  },
  {
    icon: Heart,
    title: "Deep Conditioning",
    description: "Intensive treatments to restore hair health",
    duration: "30-45 min",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-white mb-3 tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From classic cuts to bold transformations, our skilled stylists
            provide personalized services to help you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-end md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-start text-sm">
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
