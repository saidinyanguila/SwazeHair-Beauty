import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookiesConset from "@/components/CookiesConsent";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Services />
        <Contact />
      </main>
      <Footer />
      <CookiesConset />
    </div>
  );
};

export default ServicePage;
