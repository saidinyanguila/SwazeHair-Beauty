import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MiniGallery from "@/components/MiniGallery";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookiesConset from "@/components/CookiesConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MiniGallery />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <CookiesConset />
    </div>
  );
};

export default Index;
