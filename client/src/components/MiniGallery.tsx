import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-salon.jpg";
import img00 from "@/assets/gallery/img (11).jpeg";
import img01 from "@/assets/gallery/img (10).jpeg";
import img02 from "@/assets/gallery/img (16).jpeg";

const services = [
    {
        image: img00,
        title: "Haircut & Styling",
        description: "Precision cuts tailored to your face shape and lifestyle"
    },
    {
        image: img01,
        title: "Color & Highlights",
        description: "Full color, balayage, highlights, and creative coloring"
    },
    {
        image: img02,
        title: "Keratin Treatment",
        description: "Smooth, frizz-free hair that lasts for months"
    }
];

const MiniGallery = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-white mb-3 tracking-widest uppercase">
                Gallery
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                Some Of Our Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a look at some of our previous clients as a testimonial to the quality we provide.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
                <Card key={service.title} className="group cursor-pointer hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                        <img src={service.image} alt="Luxurious hair salon interior" className="w-full object-cover"/>
                    </CardHeader>

                    <CardContent>
                        <CardTitle className="text-white">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>

      <div className="text-center mb-10 mt-16">
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Still not convinced? Check out our <a href="/Hair-Shop/gallery" className="text-primary">Gallery</a> to find the inspiration you need!
            </p>
        </div>
    </section>
  );
};

export default MiniGallery;
