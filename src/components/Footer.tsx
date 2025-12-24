import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-white" />
            <span className="font-display text-lg font-semibold">Swaze Hair & Beauty</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Swaze Hair & Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
