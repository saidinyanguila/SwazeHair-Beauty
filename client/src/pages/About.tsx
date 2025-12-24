import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookiesConset from "@/components/CookiesConsent";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <Contact />
      </main>
      <Footer />
      <CookiesConset />
    </div>
  );
};

export default About;
