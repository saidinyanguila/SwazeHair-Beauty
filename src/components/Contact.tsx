import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
            Visit Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Stop by our salon or reach out through
            any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location */}
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              34 Plein Street
              <br />
              City Centre, Cape Town
            </p>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">
              <a href="tel:+27787452823" className="hover:text-primary transition-colors">
                078 745 2823
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">
              <a href="mailto:bengacap2@gmail.com" className="hover:text-primary transition-colors">
                bengacap2@gmail.com
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="text-center group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Mon - Sun: 8AM - 7PM
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/swaze_hair_and_beauty_salon_/"
              target="_blank"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100021330024094"
              target="_blank"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
