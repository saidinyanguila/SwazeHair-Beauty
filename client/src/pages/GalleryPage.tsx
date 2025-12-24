import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import CookiesConset from "@/components/CookiesConsent";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
      <CookiesConset />
    </div>
  );
};

export default GalleryPage;
