import Navbar from "@/components/Navbar";
import PaymentStatus from "@/components/PaymentStatus";
import CookiesConset from "@/components/CookiesConsent";

const Payment = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Navbar />
        <PaymentStatus />
      </main>
      <CookiesConset />
    </div>
  );
};

export default Payment;
